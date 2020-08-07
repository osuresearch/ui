export default Search;
/**
 * Search input field. Pure-React replacement of Lookup.
 * Requires a JSON:API compliant backend endpoint.
 */
declare class Search extends React.Component<any, any, any> {
    constructor(props: any);
    /**
     * Custom change handler, as typing in the search box does
     * *not* automatically update the field we should PATCH back.
     *
     * @param {SyntheticEvent} e
     */
    onChange(e: any): void;
    /**
     * @param {string} key
     * @param {string} value
     */
    onResultSelect(key: string, value: string): void;
    /**
     * Clear the current search field and results.
     *
     * This will also unlock the search field to accept new
     * input from the user if it was previously locked.
     *
     * @public
     */
    public clear(): void;
    onChangeTimeout(): void;
    input: React.RefObject<any>;
    abortController: AbortController | null;
    changeTimeoutHandle: number | null;
    /**
     * Font Awesome icon to display inline with the input.
     *
     * Icon changes depending on the current input state
     * (searching, has results, has error, etc)
     *
     * @return string
     */
    getPrefixIconClasses(): "fa fa-spinner fa-spin" | "fa fa-exclamation-circle text-danger" | "fa fa-search";
    /**
     * Reset the search to what was supplied in the `defaultValue` prop
     *
     * @public
     */
    public reset(): void;
    /**
     * Determine if we should fire off a new search.
     *
     * This is based on the difference between the input term and the
     * previous search term, the timing, and the current throttling
     * rules that are in place.
     *
     * @param {string} term
     *
     * @return {boolean} True if a new search should be started
     */
    shouldSearch(term: string): boolean;
    stopChangeTimeout(): void;
    resetChangeTimeout(): void;
    /**
     * Execute a search against the endpoint for the given term
     *
     * Will return a promise for the request to allow a third party
     * to fire off a search and listen for results externally.
     *
     * @param {string} term
     * @return {Promise}
     * @public
     */
    public search(term: string): Promise<any>;
    /**
     * @param {Response} res
     */
    loadApiResponse(res: Response): void;
    /**
     * Throw this component into an error state with the given message.
     *
     * @param {string} message
     */
    error(message: string): void;
    /**
     * Generate a URL for the endpoint that contains the entire term + query
     *
     * @param {string} term Search term to send
     *
     * @return {string} Final URL of the endpoint
     */
    getEndpointURL(term: string): string;
    /**
     * Get DOM that should be rendered in the dropdown
     */
    getDropdownContent(): any;
}
declare namespace Search {
    export namespace propTypes {
        export const name: PropTypes.Validator<string>;
        export const defaultValue: PropTypes.Requireable<PropTypes.InferProps<{
            key: PropTypes.Validator<React.ReactText>;
            value: PropTypes.Validator<any>;
        }>>;
        export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        export const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        export const resultComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        export const dropdownContentRenderer: PropTypes.Requireable<(...args: any[]) => any>;
        export const alwaysShowResults: PropTypes.Validator<boolean>;
        export const endpoint: PropTypes.Validator<string>;
        export const token: PropTypes.Requireable<string>;
        export const query: PropTypes.Validator<object>;
        export const readOnlyAfterSelection: PropTypes.Validator<boolean>;
        export const threshold: PropTypes.Validator<number>;
        export const termDelta: PropTypes.Validator<number>;
        export const delay: PropTypes.Validator<number>;
        export const readOnly: PropTypes.Validator<boolean>;
    }
    export namespace defaultProps {
        const query_1: {};
        export { query_1 as query };
        const onChange_1: null;
        export { onChange_1 as onChange };
        const onFocus_1: null;
        export { onFocus_1 as onFocus };
        const onBlur_1: null;
        export { onBlur_1 as onBlur };
        const readOnlyAfterSelection_1: boolean;
        export { readOnlyAfterSelection_1 as readOnlyAfterSelection };
        const dropdownContentRenderer_1: null;
        export { dropdownContentRenderer_1 as dropdownContentRenderer };
        const alwaysShowResults_1: boolean;
        export { alwaysShowResults_1 as alwaysShowResults };
        const threshold_1: number;
        export { threshold_1 as threshold };
        const termDelta_1: number;
        export { termDelta_1 as termDelta };
        const delay_1: number;
        export { delay_1 as delay };
        const readOnly_1: boolean;
        export { readOnly_1 as readOnly };
    }
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map