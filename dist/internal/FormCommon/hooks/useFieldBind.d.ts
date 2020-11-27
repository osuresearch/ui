import { IFieldBind, IFieldBindFactory } from "../types";
/**
 * Automatically monitor an IFieldBind for changes and redraw the component.
 *
 * Like `useState()`, you can provide a lambda factory method instead of an instance.
 */
export default function useFieldBind<T>(ref: IFieldBind<T> | IFieldBindFactory<T>): {
    bind: IFieldBind<T>;
};
//# sourceMappingURL=useFieldBind.d.ts.map