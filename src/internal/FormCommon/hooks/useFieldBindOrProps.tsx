
import { useState, useEffect } from "react";
import { IFieldBind, IFieldBindFactory, FormFieldProps, FieldBind, FormFieldBindProp, FormFieldSpreadProps, OnValueChangeDelegate } from "../types";
import useFieldBind from "./useFieldBind";

/**
 * Factory to convert a set of FormFieldProps over to an IFieldBind
 */
function createFieldBindFromProps<T>(props: FormFieldSpreadProps<T>): FieldBind<T> {
    const bind = new FieldBind<T>();

    bind.error = props.error || '';

    // bind.name = props.name; // TODO: Fix this one. Placeholdering to ID for a sec.
    bind.name = props.id;

    bind.id = props.id;
    bind.readOnly = props.readOnly || false;

    return bind;
}

function fillFieldBindFromProps<T>(bind: FieldBind<T>, props: FormFieldSpreadProps<T>) {
    bind.error = props.error || '';
    bind.success = props.success || '';
    bind.name = props.name || props.id; // TODO: Same as above
    bind.id = props.id;
    bind.readOnly = props.readOnly || false;
    bind.required = props.required || false;
}

function isFormFieldBindProp<T>(props: FormFieldProps<T>): props is FormFieldBindProp<T> {
    return typeof (props as FormFieldBindProp<T>).bind !== 'undefined';
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
    // Local bind copy to update from props, if one isn't supplied.
    const [propsBind,] = useState(new FieldBind<T>());

    const [bind, setBind] = useState<IFieldBind<T>>(() => {
        if (isFormFieldBindProp(props)) {
            console.debug('[useFieldBindOrProps] Initializing from IFieldBind ref', props.bind);
            props.bind.controlled = true;
            return props.bind;
        }

        console.debug('[useFieldBindOrProps] Initialize from props', props);
        fillFieldBindFromProps(propsBind, props);
        return propsBind;
        // return createFieldBindFromProps(props);
    });

    // If the bind object reference changes, apply the new bind.
    // Or - if any of the props change, update the props copy bind.
    useEffect(() => {
        if (isFormFieldBindProp(props)) {
            console.debug('[useFieldBindOrProps] Bind change, setting state', props.bind);
            setBind(props.bind);
        } else {
            // It was removed, fallback to a props copy
            console.debug('[useFieldBindOrProps] Bind undefined, falling back to props', props);
            fillFieldBindFromProps(propsBind, props);
            setBind(propsBind);
        }
    }, Object.values(props));

    // TODO: While the above monitors props, it doesn't monitor the bind itself.
    // I'd probably want some sort of state hash of the bind to check against.
    // e.g. your typical .hashCode() method that just bitwise combines properties.

    // On change of the bind or onChange delegate, (un)register the delegate.
    // This will also deal with cleaning up the delegate on unmount
    useEffect(() => {
        if (props.onChange) {
            bind.onValueChange.add(props.onChange);
            console.debug('[useFieldBindOrProps] Register onChange', bind);
        }

        return () => {
            if (props.onChange) {
                bind.onValueChange.remove(props.onChange);
                console.debug('[useFieldBindOrProps] Unregister onChange', bind);
            }
        }
    }, [bind, props.onChange]);

    return useFieldBind(bind);
}
