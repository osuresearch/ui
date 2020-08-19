
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
    const [, increment] = useState(0);

    // Update local store if the referenced bind changes
    useEffect(() => {
        // TODO: What about the callable? That may cause issues when someone
        // is inlining a lambda like: `useFieldBind(() => new ...)`
        // Maybe just get rid of the IFieldBindFactory support?
        setBind(ref);
    }, [ref]);

    // Register our state setter as a bind change handler to trigger a 
    // refresh of this component/context upon value change 
    useEffect(() => {
        console.debug('[useFieldBind] Bind onChange', bind);

        function incrementState(bind: IFieldBind<T>) {
            // This is a dumb way of triggering React re-renders on
            // IFieldBind state changes without caring about the 
            // specifics of what changed. Alternative solution is 
            // to retrieve a state hash from the IFieldBind, but
            // calculating that hash would be slower with minimal benefit.
            increment((prev) => prev + 1);
        }

        // Register change listeners
        bind.onChange.add(setValue);
        bind.onStateChange.add(incrementState);

        // Unregister change listeners
        return () => {
            console.debug('[useFieldBind] Unbind onChange', bind);
            bind.onChange.remove(setValue);
            bind.onStateChange.remove(incrementState);
        }
    }, [bind]);

    return { bind };
}
