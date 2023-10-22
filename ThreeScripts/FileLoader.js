import { CallbackList } from './CallbackList.js';
import { Loader } from './Loader.js';


export class HttpError extends Error 
{
	constructor (message, response) 
	{
		super(message);
		this.response = response;
	}
}


const loading = {};


export class FileLoader extends Loader 
{
	constructor(manager) 
	{
		super(manager);
	}


	Load(url, onLoad, onProgress, onError) 
	{
		if (url === undefined)
			url = '';

		if (this.path !== undefined) 
			url = this.path + url;

		url = this.manager.resolveURL(url);

		// Check if request is duplicate
		if (loading[url] !== undefined) 
		{
			let request = loading[url];

			request.onLoad.Add(onLoad);
			request.onProgress.Add(onProgress);
			request.onError.Add(onError);

			return;
		}

		// Initialise list of duplicate requests
		loading[url] = {
			onLoad: new CallbackList(onLoad),
			onProgress: new CallbackList(onProgress),
			onError: new CallbackList(onError),
		};

		// create request
		const req = new Request(url, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? 'include' : 'same-origin' });

		// record states (avoid data race)
		const responseType = this.responseType;

		// start the fetch
		fetch(req)
			.then((response) => HandleResponse(response, url))
			.then((response) => HandleType(response, responseType))
			.then((data) => OnLoaded(data, url))
			.catch((err) => HandleError(err, url, this.manager))
			.finally(() => this.manager.itemEnd(url));

		this.manager.itemStart(url);
	}


	SetResponseType(value) 
	{
		this.responseType = value;
		return this;
	}
}



function HandleResponse(response, url)
{
	if (response.status !== 200 && response.status !== 0)
		throw new HttpError(`fetch for "${response.url}" responded with ${response.status}: ${response.statusText}`, response);

	// Some browsers return HTTP Status 0 when using non-http protocol
	// e.g. 'file://' or 'data://'. Handle as success.
	if (response.status === 0) 
		console.warn(`FileLoader: HTTP Status 0 received for ${url}`);

	// Workaround: Checking if response.body === undefined for Alipay browser #23548
	if (typeof ReadableStream === 'undefined' || response.body === undefined || response.body.getReader === undefined) 
		return response;

	const callbacks = loading[url];
	const reader = response.body.getReader();

	// Nginx needs X-File-Size check
	// https://serverfault.com/questions/482875/why-does-nginx-remove-content-length-header-for-chunked-content
	const contentLength = response.headers.get('Content-Length') || response.headers.get('X-File-Size');
	const total = contentLength ? parseInt(contentLength) : 0;
	const lengthComputable = total !== 0;
	let loaded = 0;

	// periodically read data into the new stream tracking while download progress
	const stream = new ReadableStream( {
		start(controller) 
		{
			readData();

			function readData()
			{
				reader.read().then(( { done, value } ) => 
				{
					if (done) 
						controller.close();
					else 
					{
						loaded += value.byteLength;

						const event = new ProgressEvent('progress', { lengthComputable, loaded, total } );
						callbacks.onProgress.Invoke(event);

						controller.enqueue(value);
						readData();
					}
				});
			}
		}
	});
			
	return new Response(stream);
}


function HandleType(response, responseType)
{
	if (responseType == 'arraybuffer')
		return response.arrayBuffer();
	if (responseType == 'blob')
		return response.blob();
	if (responseType == 'json')
		return response.json();

	return response.text();
}


function OnLoaded(data, url)
{
	const callbacks = loading[url];
	delete loading[url];
	callbacks.onLoad.Invoke(data);
}


function HandleError(error, url, manager)
{
	// Abort errors and other errors are handled the same
	const callbacks = loading[url];

	if (callbacks === undefined) 
	{
		// When onLoad was called and url was deleted in `loading`
		manager.itemError(url);
		throw err;
	}

	delete loading[url];

	callbacks.onError.Invoke(error);
	manager.itemError(url);
}


export const DefaultFileLoader = new FileLoader();