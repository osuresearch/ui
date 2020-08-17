import React, { useContext } from 'react';
import { CheckboxContext } from '.';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { };

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
    const { id } = useContext(CheckboxContext);

    return (
        <label
            {...props}
            className={
                'custom-control-label' +
                (props.className ? ' ' + props.className : '')
            }
            htmlFor={id}
        >
            {children}
        </label>
    )
}