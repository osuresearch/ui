import React, { useContext } from 'react';
import { Context } from '..';

import Diff from '../Diff';

export type EmailProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Email input field with automatic validation for invalid email addresses
 * 
 * Accepts all
 * [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
 * props.
 */
const Email = React.forwardRef<HTMLInputElement, EmailProps>((props, ref) => {
    const { bind } = useContext(Context);

    const defaultValue = bind.value || props.defaultValue;
    const value = bind.controlled && typeof (bind.value) === 'string' ? bind.value : undefined;

    const readOnly = bind.readOnly || props.readOnly;
    const required = bind.required || props.required;

    if (bind.diff) {
        return (
            <Diff
                value={typeof (value) === 'string' ? value : undefined}
                prevValue={typeof (bind.initialValue) === 'string' ? bind.initialValue : undefined}
            />
        )
    }

    const classNames = 'form-control ' +
        (props.className ?? '') +
        (bind.error ? ' is-invalid' : '') +
        (bind.success ? ' is-valid' : '')
        ;

    /** SIMPLE email validation. Updates the bind's error state on invalid email */
    const nativeOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!bind.value) {
            if (props.required) {
                bind.error = 'You must specify an email address'
            }
            return;
        }

        if (!/[^@]+@[^\.]+\..+/g.test(bind.value)) {
            bind.error = 'Invalid email';
        } else {
            bind.error = '';
        }
    }

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
        },
        onBlur: nativeOnBlur,
        readOnly: readOnly,
        "aria-disabled": readOnly,
        "aria-required": required,
        "aria-invalid": bind.error ? true : false
    }

    // Assign a value to the input if it is controlled
    if (bind.controlled) {
        inputProps.value = value
    }

    return (
        <input {...inputProps} />
    );
});

export default Email;
