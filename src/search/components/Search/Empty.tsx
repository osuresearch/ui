import React, { useContext } from 'react';
import { Context } from '.';

/**
 * Render the children if the search results come back empty
 */
const Empty: React.FC = ({ children }) => {
    const data = useContext(Context);
    
    // In some loading state or we have results, hide. 
    if (data.loading || data.error || !data.results || data.results.length > 0) {
        return null;
    }

    // We're not in a loading state, there are results, 
    // but it's an empty array. So show the empty message.
    return (
        <div className="search-empty">
            {children}
        </div>
    );
}

export default Empty;
