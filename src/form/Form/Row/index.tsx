import React from 'react';

export type RowProps = React.HTMLAttributes<HTMLDivElement> & {};

/**
 * Wrapping component for form components
 * 
 */
const Row: React.FC<RowProps> = (props) => {
    return (
        <div {...props} className={
            `form-row ${props.className ? props.className : ''}`
        }>
            {props.children}
        </div>
    )
}

export default Row;