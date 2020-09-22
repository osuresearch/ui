import React, { useContext } from 'react';
import { Context } from '..';

/**
 * Render the error message in case the search driver fails.
 * 
 * @visibleName Search.Error
 */
const Error: React.FC = ({ children }) => {
    const data = useContext(Context);
    
    if (!data.error) {
        return null;
    }

    return (
        <div className="search-error">
            {children}
        </div>
    );
}

export default Error;
