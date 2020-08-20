import React, { useContext } from 'react';
import { Context } from '.';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input: React.FC<InputProps> = (props) => {
    const { bind } = useContext(Context);

    const classNames = 'custom-control-input ' +
        (props.className ?? '') +
        (bind.error ? ' is-invalid' : '') +
        (bind.success ? ' is-valid' : '')
        ;

    return (
        <input
            {...props}
            type='radio'
            id={bind.id}
            name={bind.name || props.name}
            readOnly={bind.readOnly}
            checked={props.checked}
            value={bind.value ? bind.value : ''}
            className={classNames}
            onChange={(e) => {
                //bind.value = e.currentTarget.checked;
                if (props.onChange) props.onChange(e);
            }}
        />
    )
}