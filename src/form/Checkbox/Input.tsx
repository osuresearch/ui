import React, { useContext } from 'react';
import { CheckboxContext } from '.';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input: React.FC<InputProps> = ({ ...props }) => {
    const { id, name, valid, invalid } = useContext(CheckboxContext);

    return (
        <input
            {...props}
            type='checkbox'
            className={
                'custom-control-input' +
                (props.className ? ' ' + props.className : '') +
                (valid ? ' is-valid' : '') +
                (invalid ? ' is-invalid' : '')
            }
            id={id}
            name={name}
        />
    )
}