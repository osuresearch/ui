import React, { useContext } from 'react';
import { Context } from '..';

export type Props = {
    /**
     * A **single** React Element Component that will receive 
     * the results array
     */
    children: React.ReactElement;
}

/**
 * Render the results of a search as a simple list of components. 
 * 
 * Provide your own component to render each result (e.g. as table rows, Kanban cards, etc).
 */
const Results: React.FC<Props> = ({
    children
}) => {
    const data = useContext(Context);

    if (!data.results) {
        return null;
    }

    return (
        <div className="search-results">
            {React.cloneElement(children, { results: data.results })}
        </div>
    );
}

export default Results;
