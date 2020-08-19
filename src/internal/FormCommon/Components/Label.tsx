import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { };

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
    return (
        <label
            {...props}
            className={
                'custom-control-label' +
                (props.className ? ' ' + props.className : '')
            }
        >
            {children}
        </label>
    )
}

export default Label;