/**
 * Collection of callables that are used as event delegate listeners
 * (your typical pub/sub pattern)
 */
declare class Action<T extends CallableFunction> {
    private delegates;
    constructor();
    add(delegate: T): void;
    remove(delegate: T): void;
    get length(): number;
    dispatch(...args: any[]): void;
}
export default Action;
//# sourceMappingURL=Action.d.ts.map