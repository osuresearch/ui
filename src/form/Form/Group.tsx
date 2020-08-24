import React from 'react';

type GroupProps = React.HTMLAttributes<HTMLDivElement> & {};

/**
 * Wrapping component for form components
 * 
 */
const Group: React.FC<GroupProps> = (props) => {
    return (
        <div {...props} className={
            `form-group ${props.className ? props.className : ''}`
        }>
            {props.children}
        </div>
    )
}

export default Group;