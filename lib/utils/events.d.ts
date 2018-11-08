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
export declare const Events: IEvents;
