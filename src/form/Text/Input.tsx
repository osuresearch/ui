import React, { useContext } from 'react';
import { TextContext } from '.';

export type InputProps =  React.InputHTMLAttributes<HTMLInputElement> & { 
    /** 
     * Number of lines for this field's input editor.
     * Will toggle between input and textarea accordingly. 
     */
    lines?: number;
}

export const Input: React.FC<InputProps> = ({ lines = 1, ...props }) => {
    const { bind } = useContext(TextContext);

    console.log('redraw input', bind);

    const classNames = 'form-control ' + 
        (props.className ?? '') + 
        (bind.error ? ' is-invalid' : '');

    if (lines < 2) {
        return (
            <input
                {...props}
                type="text"
                id={bind.id}
                name={bind.name}
                readOnly={bind.readOnly}
                value={bind.value || ''}
                className={classNames}
                onChange={(e) => bind.value = e.currentTarget.value}
            />
        );
    }

    // Multiple lines, show as a textarea
    // TODO: The props as ... isn't great since typescript will block
    // any textarea-specific props passed down into Input.
    return (
        <textarea
            {...props as React.InputHTMLAttributes<HTMLTextAreaElement>}
            id={bind.id}
            name={bind.name}
            readOnly={bind.readOnly}
            rows={lines}
            value={bind.value || ''}
            className={classNames}
            onChange={(e) => bind.value = e.currentTarget.value}
        />
    );
}
