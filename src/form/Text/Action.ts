
/**
 * Collection of callables that are used as event delegate listeners
 * (your typical pub/sub pattern)
 */
class Action<T extends CallableFunction> {
    private delegates: T[];

    constructor() {
        this.delegates = [];
    }

    public add(delegate: T): void {
        if (this.delegates.indexOf(delegate) < 0) {
            this.delegates.push(delegate);
        }
    }

    public remove(delegate: T): void {
        this.delegates = this.delegates.filter(
            (d) => d !== delegate
        );
    }

    public get length(): number {
        return this.delegates.length;
    }

    public dispatch(...args: any[]): void {
        this.delegates.forEach(
            (delegate) => delegate(...args)
        );
    }
}

class BaseAction<F> {
    protected delegates: F[];

    constructor() {
        this.delegates = [];
    }

    public add(delegate: F): void {
        if (this.delegates.indexOf(delegate) < 0) {
            this.delegates.push(delegate);
        }
    }

    public remove(delegate: F): void {
        this.delegates = this.delegates.filter(
            (d) => d !== delegate
        );
    }

    public get length(): number {
        return this.delegates.length;
    }
}

class Action1<T> extends BaseAction<(arg: T) => void> {
    public dispatch(arg: T): void {
        this.delegates.forEach(
            (delegate) => delegate(arg)
        );
    }
}

// This sucks. Can't just extend a generic with the same name
// to support `a: Action<float>` and `b: Action<string, float>` like in C#.
class Action2<T, U> extends BaseAction<(arg: T, arg2: U) => void> {
    public dispatch(arg: T, arg2: U): void {
        this.delegates.forEach(
            (delegate) => delegate(arg, arg2)
        );
    }
}

export default Action;
