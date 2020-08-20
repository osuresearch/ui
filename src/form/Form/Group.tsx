import React from 'react';

/**
 * Wrapping component for form components
 * 
 */
const Group: React.FC = ({ children }) => {
    return <div className='form-group'>{children}</div>
}

export default Group;