import React, { useContext } from 'react';
import { Context } from '..';
import { OptionProps } from '../Option';

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

    const defaultValue = bind.value || props.defaultValue;
    const value = bind.controlled && bind.value ? bind.value : undefined;

    if (bind.readOnly || bind.diff) {
        // Let the Option component handle the diff/print/readOnly rendering
        return <>{props.children}</>
    }

    let selectProps: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> = {
        ref: ref,
        ...props,
        id: bind.id,
        name: bind.name || props.name,
        className: classNames,
        defaultValue: defaultValue,
        "aria-describedby": `${bind.id}-help`,
        onChange: (e) => {
            bind.value = e.currentTarget.value;
            if (props.onChange) props.onChange(e);
        }
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
