export class VCEvent {
    sender: any;

    constructor(sender: any) {
        this.sender = sender;
    }
}

export interface Listener<T extends VCEvent> {
    (event: T): any;
}

export interface Disposable {
    dispose(): void;
}

export class TypedEvent<T extends VCEvent> {
    private listeners: Listener<T>[] = [];
    private listenersOncer: Listener<T>[] = [];

    get isEmpty(): boolean {
        return (this.listeners.length === 0 && this.listenersOncer.length === 0);
    }

    on = (listener: Listener<T>): Disposable => {
        this.listeners.push(listener);
        return {
            dispose: () => this.off(listener)
        };
    }

    once = (listener: Listener<T>): void => {
        this.listenersOncer.push(listener);
    }

    off = (listener: Listener<T>) => {
        var callbackIndex = this.listeners.indexOf(listener);
        if (callbackIndex > -1) this.listeners.splice(callbackIndex, 1);
    }

    emit = (event: T) => {
        /** Update any general listeners */
        this.listeners.forEach((listener) => listener(event));

        /** Clear the `once` queue */
        this.listenersOncer.forEach((listener) => listener(event));
        this.listenersOncer = [];
    }

    pipe = (te: TypedEvent<T>): Disposable => {
        return this.on((e) => te.emit(e));
    }
}