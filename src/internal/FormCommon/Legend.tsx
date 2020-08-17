import React from 'react';

export interface LegendProps extends React.HTMLAttributes<HTMLElement> { };

const Legend: React.FC<LegendProps> = ({ children, ...props }) => {
    return (
        <legend {...props}>
            {children}
        </legend>
    )
}

export default Legend;