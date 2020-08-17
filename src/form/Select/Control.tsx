import React, { useContext } from 'react';
import { Context } from './';
import { Option } from './Option';

export interface ControlProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: typeof Option | typeof Option[]
};

export const Control: React.FC<ControlProps> = ({ children, ...props }) => {
    const { id, invalid, valid, required } = useContext(Context);

    return (
        <select
            name={id} // set the name prop to its ID - will be overridden if name is set on the Select.Control component
            {...props}
            id={id}
            className={
                'form-control custom-select' +
                (invalid ? ' is-invalid' : '') +
                (valid ? ' is-valid' : '') +
                (props.className ? ' ' + props.className : '')
            }
            required={required}
        >
            {children}
        </select>
    )
}