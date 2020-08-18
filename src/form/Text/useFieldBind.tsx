
import { useState, useEffect } from "react";
import { IFieldBind, IFieldBindFactory } from "./etc";

/**
 * Automatically monitor an IFieldBind for changes and redraw the component.
 * 
 * Like `useState()`, you can provide a lambda factory method instead of an instance.
 */
export default function useFieldBind<T>(ref: IFieldBind<T> | IFieldBindFactory<T>) {
    const [bind, setBind] = useState<IFieldBind<T>>(ref);

    // Value is stored to trigger re-renders, but we don't really use it.
    const [value, setValue] = useState(bind.value);

    // Register our state setter as a bind change handler to trigger a 
    // refresh of this component/context upon value change 
    useEffect(() => {
        console.debug('[useFieldBind] Bind onChange', bind);

        // Register change listeners
        bind.onChange.add(setValue);

        // Unregister change listeners
        return () => {
            console.debug('[useFieldBind] Unbind onChange', bind);
            bind.onChange.remove(setValue);
        }
    }, [bind]);

    return { bind };
}
