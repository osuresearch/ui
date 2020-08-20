import React, { useContext } from 'react';
import { Context } from './';
import { Option } from './Option';

export interface ControlProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: typeof Option | typeof Option[]
};

export const Control: React.FC<ControlProps> = ({ children, ...props }) => {
    const { bind } = useContext(Context);

    return (
        <select
            name={bind.id} // set the name prop to its ID - will be overridden if name is set on the Select.Control component
            {...props}
            id={bind.id}
            className={
                'form-control custom-select' +
                (bind.error ? ' is-invalid' : '') +
                (bind.success ? ' is-valid' : '') +
                (props.className ? ' ' + props.className : '')
            }
            required={bind.required}
            defaultValue={bind.value ? bind.value : undefined}
        >
            {children}
        </select>
    )
}