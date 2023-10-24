export class LoadingManager 
{
	constructor(onLoad, onProgress, onError) 
	{
		const scope = this;

		let isLoading = false;
		let itemsLoaded = 0;
		let itemsTotal = 0;
		let urlModifier = undefined;
		const handlers = [];

		this.onStart = undefined;
		this.onLoad = onLoad;
		this.onProgress = onProgress;
		this.onError = onError;


		this.itemStart = (url) =>
		{
			itemsTotal++;

			if (isLoading === false) 
			{
				if (scope.onStart !== undefined) 
					scope.onStart(url, itemsLoaded, itemsTotal);
			}

			isLoading = true;
		};


		this.itemEnd = (url) => 
		{
			itemsLoaded++;

			if (scope.onProgress !== undefined) 
				scope.onProgress(url, itemsLoaded, itemsTotal);

			if (itemsLoaded === itemsTotal) 
			{
				isLoading = false;

				if (scope.onLoad !== undefined)
					scope.onLoad();
			}

		};


		this.itemError = (url) => 
		{
			if (scope.onError !== undefined) 
				scope.onError(url);
		};


		this.resolveURL = (url) =>
		{
			if (urlModifier) 
				return urlModifier(url);

			return url;
		};


		this.setURLModifier = (transform) =>
		{
			urlModifier = transform;
			return this;
		};


		this.addHandler = (regex, loader) => 
		{
			handlers.push(regex, loader);
			return this;
		};


		this.removeHandler = (regex) =>
		{
			const index = handlers.indexOf(regex);
			
			if (index !== -1)
				handlers.splice( index, 2);

			return this;
		};
		

		this.getHandler = (file) =>
		{
			for (let i = 0, l = handlers.length; i < l; i += 2)
			{
				const regex = handlers[i];
				const loader = handlers[i + 1];

				if (regex.global) 
					regex.lastIndex = 0;

				if (regex.test(file)) 
					return loader;
			}

			return null;
		};
	}
}

export const DefaultLoadingManager = new LoadingManager();