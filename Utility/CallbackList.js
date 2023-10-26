// Container that holds a list of registered callback functions

export class CallbackList
{
    constructor (callback)
    {
        if (Array.isArray(callback))
        {
            this.callbacks = callback;
        }

        this.callbacks = [ callback ];
    }


    Add(callback)
    {
        this.callbacks.push(callback);
    }


    Remove(callback)
    {
        const index = this.callbacks.indexOf(callback);

        if (index > -1) 
            this.callbacks.splice(index, 1);

        return index > -1;
    }


    RemoveAll(callback) 
    {
        let removed = 0;
        
        for (let i = this.callbacks.length - 1; i >= 0; i--)
        {
            if (this.callbacks[i] === callback)
            { 
                this.callbacks.splice(i, 1);
                removed++;
            }
        }

        return removed;
    }


    // Five args is normally more than enough... right?
    Invoke(arg1, arg2, arg3, arg4, arg5)
    {   
        for (let i = 0; i < this.callbacks.length; i++)
        {
            let func = this.callbacks[i];

            if (func === undefined)
                continue;

            func(arg1, arg2, arg3, arg4, arg5);
        }
    }
}