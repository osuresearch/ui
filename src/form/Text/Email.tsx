import React, { useContext } from 'react';
import { TextContext } from '.';

export type EmailProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Email input field with automatic validation for invalid email addresses
 */
export const Email: React.FC<EmailProps> = (props) => {
    const { bind } = useContext(TextContext);

    const classNames = 'form-control ' + 
        (bind.error ? ' is-invalid' : '');

    const nativeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        bind.value = e.currentTarget.value;
    }

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
            {...props}
            type="text"
            id={bind.id}
            name={bind.name}
            readOnly={bind.readOnly}
            value={bind.value || ''}
            className={classNames}
            onChange={nativeOnChange}
            onBlur={nativeOnBlur}
        />
    );
}
