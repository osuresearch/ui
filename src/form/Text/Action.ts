
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

export default Action;
