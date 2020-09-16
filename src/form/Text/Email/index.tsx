import React, { useContext } from 'react';
import { Context } from '..';

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

    const value = bind.value || props.defaultValue;

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

    return (
        <input
            ref={ref}
            {...props}
            type="text"
            id={bind.id}
            name={bind.name || props.name}
            defaultValue={value}
            className={classNames}
            aria-describedBy={`${bind.id}-help`}
            onChange={(e) => {
                bind.value = e.currentTarget.value;
                if (props.onChange) props.onChange(e);
            }}
            onBlur={nativeOnBlur}
            readOnly={bind.readOnly || props.readOnly}
        />
    );
});

export default Email;
