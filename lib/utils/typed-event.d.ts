export declare class TypedEventBase {
    sender: any;
    constructor(sender: any);
}
export interface Listener<T extends TypedEventBase> {
    (event: T): any;
}
export interface Disposable {
    dispose(): void;
}
export declare class TypedEvent<T extends TypedEventBase> {
    private listeners;
    private listenersOncer;
    readonly isEmpty: boolean;
    on: (listener: Listener<T>) => Disposable;
    once: (listener: Listener<T>) => void;
    off: (listener: Listener<T>) => void;
    emit: (event: T) => void;
    pipe: (te: TypedEvent<T>) => Disposable;
}
