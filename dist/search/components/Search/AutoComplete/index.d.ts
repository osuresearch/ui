import React from 'react';
interface SearchMethods {
    /**
     * Reset the search to what was supplied in the `defaultValue` prop
     */
    reset: () => void;
    /**
     * Clear the current search field and results.
     *
     * This will also unlock the search field to accept new
     * input from the user if it was previously locked.
     */
    clear: () => void;
    /**
     * Sets the selected search value
     *
     * @param {string} display A string that represents the full value that will be displayed in the search input
     * @param {any} value The complete value object
     */
    set: (display: string, value: any) => void;
}
interface SearchValue {
    display: string;
    value?: any;
}
export declare type Props = {
    /**
     * Provider ID - the ID of the SearchProvider
     */
    provider: string;
    /**
     * Unique name (and ID) of the search input. This is required in order to
     * ensure that the appropriate Aria tags are set on the input and search results.
     */
    name: string;
    /**
     * Preloaded value to start with when initializing the component
     */
    defaultValue?: SearchValue;
    /**
     * Callable for when an item is selected from the search results, or the search is cleared.
     *
     * The callable receives the selected value
     */
    onChange?: (value: any) => void;
    /**
     * `onFocus` event delegated to the inner `input` element
     */
    onFocus?: () => void;
    /**
     * `onBlur` event delegated to the inner `input` element
     */
    onBlur?: () => void;
    /**
     * Can the search input be modified by the end user. Setting this to `true`
     * will also disable the user's ability to clear the selection.
     */
    readOnly?: boolean;
};
declare const AutoComplete: React.ForwardRefExoticComponent<Props & React.RefAttributes<SearchMethods>>;
export default AutoComplete;
//# sourceMappingURL=index.d.ts.map