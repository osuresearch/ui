
import { useState, useEffect } from "react";
import { IFieldBind, IFieldBindFactory, FormFieldProps, FieldBind } from "./etc";
import useFieldBind from "./useFieldBind";

/**
 * Factory to convert a set of FormFieldProps over to an IFieldBind
 */
function createFieldBindFromProps<T>(props: FormFieldProps<T>): FieldBind<T> {
    const bind = new FieldBind<T>();

    bind.error = props.error;
    bind.help = props.help;
    bind.instructions = props.instructions;
    bind.name = props.name;
    bind.id = props.id;
    bind.readOnly = props.readOnly;
    bind.value = props.value;

    return bind;
}

function isFormFieldProps<T>(props: any): props is FormFieldProps<T> {
    return typeof (props as FormFieldProps<T>).bind !== 'undefined' ||
            typeof (props as FormFieldProps<T>).name !== 'undefined';
}

/**
 * Generate an IFieldBind from a set of FormFieldProps. 
 * 
 * If the props contain a `bind`, that will be piped through as-is. Otherwise,
 * a new FieldBind will be constructed from the rest of the props. 
 * 
 * If an `onChange` delegate is provided, it will register with the IFieldBind 
 * result and safely unregister when the component is unmounted.
 */
export default function useFieldBindOrProps<T>(props: FormFieldProps<T>) {
    const [bind, setBind] = useState<IFieldBind<T>>(() => {
        if (props.bind) {
            console.debug('[useFieldBindOrProps] Initializing from IFieldBind ref', props.bind);
            return props.bind;
        }

        console.debug('[useFieldBindOrProps] Initializing from props', props);
        return createFieldBindFromProps(props);
    });

    // If the bind object reference changes, apply the new bind.
    // Or - if any of the props change, update the props copy bind.
    useEffect(() => {
        if (bind) {
            console.debug('[useFieldBindOrProps] Bind change, setting state', bind);
            setBind(bind);
        } else {
            // It was removed, fallback to a props copy
            console.debug('[useFieldBindOrProps] Bind undefined, falling back to props', props);
            setBind(createFieldBindFromProps(props));
        }
    }, [bind, props.value, props.error, props.help, props.instructions]); 
    // ... and so on... unfortunately.

    // On change of the bind or onChange delegate, (un)register the delegate.
    // This will also deal with cleaning up the delegate on unmount
    useEffect(() => {
        if (props.onChange) {
            bind.onChange.add(props.onChange);
        }

        return () => {
            if (props.onChange) {
                bind.onChange.remove(props.onChange);
            }
        }
    }, [bind, props.onChange]);

    return useFieldBind(bind);
}
