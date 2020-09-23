import React, { useContext } from 'react';
import { Context } from '..';

import Print from '../Print';
import Diff from '../Diff';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Equivalent of `<input type='text'>`
 * 
 * Accepts all
 * [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
 * props.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { bind } = useContext(Context);

    const defaultValue = bind.value || props.defaultValue;
    const value = bind.controlled && typeof (bind.value) === 'string' ? bind.value : undefined;

    const readOnly = bind.readOnly || props.readOnly;

    if (bind.diff) {
        return (
            <Diff
                value={typeof (value) === 'string' ? value : undefined}
                prevValue={typeof (bind.initialValue) === 'string' ? bind.initialValue : undefined}
            />
        )
    }

    if (readOnly) {
        return <Print value={typeof (value) === 'string' ? value : ''} />
    }

    const classNames = 'form-control ' +
        (props.className ?? '') +
        (bind.error ? ' is-invalid' : '') +
        (bind.success ? ' is-valid' : '')
        ;

    let inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = {
        ref: ref,
        ...props,
        type: "text",
        id: bind.id,
        name: bind.name || props.name,
        defaultValue: defaultValue,
        className: classNames,
        'aria-describedby': `${bind.id}-help`,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            bind.value = e.currentTarget.value;
            if (props.onChange) props.onChange(e);
        }
    }

    // Assign a value to the input if it is controlled
    if (bind.controlled) {
        inputProps.value = value
    }

    return (
        <input {...inputProps} />
    );
});

export default Input;
