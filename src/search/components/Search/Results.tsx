import React, { useContext } from 'react';
import { Context } from '.';

export type ResultRendererProps = {
    result: any // ??
}

export type Props = {
    resultRenderer: React.FC<ResultRendererProps>
}

/**
 * Render the results of a search as a simple list of components. 
 * 
 * Provide your own component to render per-result.
 */
const Results: React.FC<Props> = ({
    resultRenderer
}) => {
    const data = useContext(Context);
    
    if (!data.results) {
        return null;
    }

    const RenderComponent = resultRenderer;
    return (
        <div className="search-results">
            {data.results.map((result: any, index) =>
                <RenderComponent key={index} result={result} />
            )}
        </div>
    );
}

export default Results;
