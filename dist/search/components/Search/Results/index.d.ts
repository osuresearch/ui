import React from 'react';
export declare type ResultRendererProps = {
    result: any;
};
export declare type Props = {
    /**
     * Component used to render each search result.
     *
     * The component must accept a `result` prop that contains the payload
     * of the search result (e.g. a GraphQL type, a JSON:API resource, etc).
     * For TypeScript, you may safely type this prop to your expected type.
     */
    resultRenderer: React.FC<ResultRendererProps>;
};
/**
 * Render the results of a search as a simple list of components.
 *
 * Provide your own component to render each result (e.g. as table rows, Kanban cards, etc).
 */
declare const Results: React.FC<Props>;
export default Results;
//# sourceMappingURL=index.d.ts.map