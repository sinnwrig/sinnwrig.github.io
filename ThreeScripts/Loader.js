import { DefaultLoadingManager } from './LoadingManager.js';


export class Loader 
{
	constructor (manager) 
	{
		this.manager = (manager !== undefined) ? manager : DefaultLoadingManager;

		this.crossOrigin = 'anonymous';
		this.withCredentials = false;
		this.path = '';
		this.resourcePath = '';
		this.requestHeader = {};
	}


	Load() {}


	LoadAsync(url, onProgress) 
	{
		const scope = this;

		return new Promise((resolve, reject) => 
		{
			scope.Load(url, resolve, onProgress, reject);
		});
	}
	

	setWithCredentials(value) 
	{
		this.withCredentials = value;
		return this;
	}

	setPath(path) 
	{
		this.path = path;
		return this;
	}


	setResourcePath(resourcePath) 
	{
		this.resourcePath = resourcePath;
		return this;
	}


	setRequestHeader(requestHeader) 
	{
		this.requestHeader = requestHeader;
		return this;
	}
}

Loader.DEFAULT_MATERIAL_NAME = '__DEFAULT';