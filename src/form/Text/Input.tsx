import React, { useContext } from 'react';
import { TextContext } from '.';

export type InputProps =  React.InputHTMLAttributes<HTMLInputElement> & { 
    lines?: number;
}

export const Input: React.FC<InputProps> = (props) => {
    const { bind } = useContext(TextContext);

    console.log('redraw input', bind);

    if (!props.lines || props.lines < 2) {
        return (
            <input
                {...props}
                type="text"
                id={bind.id}
                name={bind.name}
                value={bind.value}
                className={
                    'form-control ' + 
                    (props.className ?? '') + 
                    (bind.error ? ' is-invalid' : '')
                }
                onChange={(e) => {
                    bind.value = e.currentTarget.value;
                }}
            />
        );
    }

    // Multiple lines, show as a textarea
    return (
        <textarea
            {...props as React.InputHTMLAttributes<HTMLTextAreaElement>}
            id={bind.id}
            name={bind.name}
            defaultValue={bind.value}
            className={
                'custom-control-input ' + 
                (props.className ?? '') + 
                (bind.error ? ' is-invalid' : '')
            }
            onChange={(e) => {
                bind.value = e.currentTarget.value;
            }}
        />
    );
}
