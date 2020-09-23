import React, { useContext } from 'react';
import { Context } from '..';

export type Props = {
    /** Children are required for this component. */
    children: React.ReactNode
}

/**
 * Render the children of this component if the search failed to complete
 * (backend threw an error, connection problem, etc).
 */
const Error: React.FC<Props> = ({ children }) => {
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
