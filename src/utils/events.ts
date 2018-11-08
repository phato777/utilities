export interface IEvent {
    eventName: string;
    callback: Function;
    id: string | number;
}

export interface IEvents {
    callbacks: IEvent[];
    fire: any;
    listen: any;
    unlisten: any;
}

export const Events: IEvents = {
    callbacks: [],

    fire(eventName: string, data: any = null) {
        const events = this.callbacks.filter((c: IEvent) => c.eventName === eventName);
        if(events.length > 0) events.forEach((c: IEvent) => c.callback(data));
    },

    listen(eventName: string, id: string | number, callback: Function) {
        const events = this.callbacks.filter((c: IEvent) => c.eventName === eventName && c.id === id);
        if(events.length === 0) this.callbacks.push({ eventName, callback, id });
    },

    unlisten(eventName: string, id: string | number) {
        const callback: IEvent | undefined = this.callbacks.find((c: IEvent) => c.eventName === eventName && c.id === id);
        const index: number | null = callback ? this.callbacks.indexOf(callback) : null;
        if(index) this.callbacks.splice(index, 1);
    }
};