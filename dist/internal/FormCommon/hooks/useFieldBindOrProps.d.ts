import { IFieldBind, FormFieldProps } from "../types";
/**
 * Generate an IFieldBind from a set of FormFieldProps.
 *
 * If the props contain a `bind`, that will be piped through as-is. Otherwise,
 * a new FieldBind will be constructed from the rest of the props.
 *
 * If an `onChange` delegate is provided, it will register with the IFieldBind
 * result and safely unregister when the component is unmounted.
 */
export default function useFieldBindOrProps<T>(props: FormFieldProps<T>): {
    bind: IFieldBind<T>;
};
//# sourceMappingURL=useFieldBindOrProps.d.ts.map