import React from 'react';

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    children: string;
};

export const Option: React.FC<OptionProps> = ({ children, ...props }) => {
    return (
        <option {...props}>{children}</option>
    )
}