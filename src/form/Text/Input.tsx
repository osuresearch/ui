import React, { useContext } from 'react';
import { TextContext } from '.';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => {
    const { bind } = useContext(TextContext);

    console.log('redraw input', bind);

    const classNames = 'custom-control-input ' +
        (props.className ?? '') +
        (bind.error ? ' is-invalid' : '') +
        (bind.success ? ' is-valid' : '')
        ;

    return (
        <input
            {...props}
            type="text"
            id={bind.id}
            name={bind.name || props.name}
            readOnly={bind.readOnly}
            value={bind.value || props.value}
            className={classNames}
            onChange={(e) => {
                bind.value = e.currentTarget.value;
                if (props.onChange) props.onChange(e);
            }}
        />
    );
}
