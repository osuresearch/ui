import React, { useContext } from 'react';
import { Context } from '..';
import { OptionProps } from '../Option';
import { Print } from '../../../../internal/FormCommon/Utility';

export type ControlProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    children: React.ReactElement<OptionProps>[] | React.ReactElement<OptionProps>
};

/**
 * A control container for `<Select.Option>` children.
 * 
 * Accepts all 
 * [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 * props.
 */
const Control = React.forwardRef<HTMLSelectElement, ControlProps>((props, ref) => {
    const { bind } = useContext(Context);

    const classNames = `form-control custom-select ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'} ${props.className ? props.className : ''}`;

    const value = bind.value || props.defaultValue || props.value;
    const required = bind.required || props.required;

    // Display Read Only as readOnly text input
    if (bind.readOnly) {
        return (
            <Print
                id={bind.id}
                name={bind.name || props.name}
                value={value}
            />
        )
    }

    if (bind.diff) {
        // Let the Option component handle the diff
        return <>{props.children}</>
    }

    let selectProps: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> = {
        ref: ref,
        ...props,
        id: bind.id,
        name: bind.name || props.name,
        className: classNames,
        defaultValue: value,
        "aria-describedby": `${bind.id}-help`,
        onChange: (e) => {
            bind.value = e.currentTarget.value;
            if (props.onChange) props.onChange(e);
        },
        'aria-required': required,
        "aria-invalid": bind.error ? true : false
    }

    // Assign a value to the select if it is controlled
    if (bind.controlled) {
        selectProps.value = value
    }

    return (
        <select {...selectProps}>
            {props.children}
        </select>
    )
});

export default Control;
