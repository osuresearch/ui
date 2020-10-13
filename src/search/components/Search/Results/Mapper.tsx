import React from 'react';

export type Props = {
    results: any[];
    /** 
     * A **single** React Element Component used to render each search result. 
     * 
     * The component must accept a `result` prop that contains the payload
     * of the search result (e.g. a GraphQL type, a JSON:API resource, etc).
     * For TypeScript, you may safely type this prop to your expected type.
     */
    children: React.ReactElement;
}

const Mapper: React.FC<Props> = ({
    results,
    children
}) => {
    return (
        <div className="search-results">
            {results.map((result: any, index) =>
                <React.Fragment key={`search-result-${index}`}>
                    {React.cloneElement(children, { result: result })}
                </React.Fragment>
            )}
        </div>
    );
}

export default Mapper;
