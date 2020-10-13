import React from 'react';
export declare type Props = {
    results: any[];
    /**
     * A **single** React Element Component used to render each search result.
     *
     * The component must accept a `result` prop that contains the payload
     * of the search result (e.g. a GraphQL type, a JSON:API resource, etc).
     * For TypeScript, you may safely type this prop to your expected type.
     */
    children: React.ReactElement;
};
declare const Mapper: React.FC<Props>;
export default Mapper;
//# sourceMappingURL=Mapper.d.ts.map