import React, { useContext } from 'react';
import { Context } from '..';

export type ResultRendererProps = {
    result: any // ??
}

export type Props = {
    /** 
     * Component used to render each search result. 
     * 
     * The component must accept a `result` prop that contains the payload
     * of the search result (e.g. a GraphQL type, a JSON:API resource, etc).
     * For TypeScript, you may safely type this prop to your expected type.
     */
    resultRenderer: React.FC<ResultRendererProps>
}

/**
 * Render the results of a search as a simple list of components. 
 * 
 * Provide your own component to render each result (e.g. as table rows, Kanban cards, etc).
 * 
 * @visibleName Search.Results
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
