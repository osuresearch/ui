export default AppSearch;
/**
 * Application-wide searching. For use with the navbar.
 *
 * This component is a wrapper around `Search` with custom UX for displaying
 * aggregate search results across a wide variety of resources available
 * within an application - and linking to those resources (pages) rather than
 * filling in a search input after selection.
 */
declare class AppSearch extends React.Component<any, any, any> {
    constructor(props: any);
    contentRenderer(totalResults: any, results: any, error: any): JSX.Element;
    /**
     * Event handler for the underlying input's `onFocus`
     *
     * @param {SyntheticEvent} e
     */
    onFocus(e: any): void;
    /**
     * Event handler for the underlying input's `onBlur`
     *
     * @param {SyntheticEvent} e
     */
    onBlur(e: any): void;
    renderCategory(category: any, results: any): JSX.Element;
    /**
     * Balance a column of bucket results based on number of results
     * in each bucket against a maximum number of results for a column.
     */
    balanceBuckets(buckets: any): {};
    /**
     * Group JSON:API results payloads into buckets based on our categorizer
     *
     * @return {object} Mapping bucket names to an array of values
     */
    createBuckets(results: any): object;
}
declare namespace AppSearch {
    export namespace propTypes {
        export const endpoint: PropTypes.Validator<string>;
        export const token: PropTypes.Requireable<string>;
        export const query: PropTypes.Validator<object>;
        export const categorizer: PropTypes.Validator<string>;
        export const linkKey: PropTypes.Validator<string>;
    }
    export namespace defaultProps {
        const query_1: {};
        export { query_1 as query };
        const categorizer_1: string;
        export { categorizer_1 as categorizer };
        const linkKey_1: string;
        export { linkKey_1 as linkKey };
    }
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map