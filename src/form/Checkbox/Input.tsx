import React, { useContext } from 'react';
import { CheckboxContext } from '.';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input: React.FC<InputProps> = (props) => {
    const { bind } = useContext(CheckboxContext);

    const classNames = 'custom-control-input ' +
        (props.className ?? '') +
        (bind.error ? ' is-invalid' : '') +
        (bind.success ? ' is-valid' : '')
        ;

    return (
        <input
            {...props}
            type='checkbox'
            id={bind.id}
            name={bind.name || props.name}
            readOnly={bind.readOnly}
            checked={bind.value || props.checked}
            className={classNames}
            onChange={(e) => {
                bind.value = e.currentTarget.checked;
                if (props.onChange) props.onChange(e);
            }}
        />
    )

    // console.log('redraw input', bind);



    // return (
    //     <input
    //         {...props}
    //         type="text"
    //         id={bind.id}
    //         name={bind.name || props.name}
    //         readOnly={bind.readOnly}
    //         value={bind.value || props.value}
    //         className={classNames}
    //         onChange={(e) => {
    //             bind.value = e.currentTarget.value;
    //             if (props.onChange) props.onChange(e);
    //         }}
    //     />
    // );
}