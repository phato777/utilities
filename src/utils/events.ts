interface IEvents {
    callbacks: any;
    fire: any;
    listen: any;
    unlisten: any;
}

export const Events: IEvents = {
    callbacks: [],

    fire(eventName: string, data: any = null) {
        if (this.callbacks.some((c: any) => c.eventName === eventName)) {
            this.callbacks.filter((c: any) => c.eventName === eventName).forEach((c: any) => {
                c.callback(data);
            });
        }
    },

    listen(eventName: string, id: string | number, callback: Function) {
        this.callbacks.push({ eventName, callback, id });
    },

    unlisten(eventName: string, id: string | number) {
        this.callbacks.splice(this.callbacks.indexOf(this.callbacks.find((c: any) => c.eventName === eventName && c.id === id)), 1);
    }
};