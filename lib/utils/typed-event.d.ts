export interface Listener<T> {
    (sender: any, event: T): any;
}
export interface Disposable {
    dispose(): void;
}
export declare class TypedEvent<T> {
    private listeners;
    private listenersOncer;
    readonly isEmpty: boolean;
    on: (listener: Listener<T>) => Disposable;
    once: (listener: Listener<T>) => void;
    off: (listener: Listener<T>) => void;
    emit: (sender: any, event: T) => void;
    pipe: (sender: any, te: TypedEvent<T>) => Disposable;
}
export default TypeError;
