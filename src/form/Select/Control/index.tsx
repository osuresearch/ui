import React, { useContext } from 'react';
import { Context } from '..';
import FormContext from '../../../internal/FormCommon/FormContext';
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
    const { isDiff, isPrint } = useContext(FormContext);

    const classNames = `form-control custom-select ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'} ${props.className && props.className}`;

    const defaultValue = bind.value || props.defaultValue;

    if (isDiff || isPrint || bind.readOnly) {
        // Let the Option component handle the diff/print/readOnly rendering
        return <>{props.children}</>
    }

    return (
        <select
            ref={ref}
            {...props}
            id={bind.id}
            name={bind.name || props.name}
            className={classNames}
            defaultValue={defaultValue}
            aria-describedBy={`${bind.id}-help`}
            onChange={(e) => {
                bind.value = e.currentTarget.value;
                if (props.onChange) props.onChange(e);
            }}
        >
            {props.children}
        </select>
    )
});

export default Control;
