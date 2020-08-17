import React from 'react';

export interface HelpProps extends React.HTMLAttributes<HTMLElement> { }

const Help: React.FC<HelpProps> = ({ children, ...props }) => {
    return (
        <small
            {...props}
            id={props.id}
            className='form-text text-muted'
        >
            {children}
        </small>
    )
}

export default Help;