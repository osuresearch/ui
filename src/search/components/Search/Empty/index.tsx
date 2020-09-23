import React, { useContext } from 'react';
import { Context } from '..';

export type Props = {
    /** Children are required for this component. */
    children: React.ReactNode
}

/**
 * Render the children of this component if the search completed 
 * successfully but there are no results to display.
 */
const Empty: React.FC<Props> = ({ children }) => {
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
