
import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import SearchResult from '../SearchResult';
// import FlowContext from '../context/FlowContext';

import {
    validateAndTransformJsonApiResponse
} from '../../internal/JsonApiUtility';

/**
 * Search input field. Pure-React replacement of Lookup.
 * Requires a JSON:API compliant backend endpoint.
 */
class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searching: false,
            error: false,

            // Whether or not to display the search results dropdown
            showSearchResults: false,

            // Prevent the user from changing the search
            // input until they click the clear button
            lockSearchInput: false,

            // Total number of reported results. Could be larger
            // than the actual results array returned by the endpoint.
            totalResults: 0,

            // Result resources returned by the search endpoint
            results: [],

            lastSearchTerm: '',
            lastSearchTime: 0
        };

        this.onChange = this.onChange.bind(this);
        this.onResultSelect = this.onResultSelect.bind(this);
        this.clear = this.clear.bind(this);
        this.onChangeTimeout = this.onChangeTimeout.bind(this);
        this.input = React.createRef();

        if (!window.AbortController || !window.AbortSignal) {
            throw new Error('Browser does not support AbortController/AbortSignal');
        }

        this.abortController = null;
        this.changeTimeoutHandle = null;
    }

    /**
     * Font Awesome icon to display inline with the input.
     *
     * Icon changes depending on the current input state
     * (searching, has results, has error, etc)
     *
     * @return string
     */
    getPrefixIconClasses() {
        if (this.state.searching) {
            return 'fa fa-spinner fa-spin';
        }

        if (this.state.error) {
            return 'fa fa-exclamation-circle text-danger';
        }

        // Default looking glass icon
        return 'fa fa-search';
    }

    componentDidMount() {
        this.reset();
    }

    componentDidUpdate(prevProps) {
        // const current = this.props.bind.value;
        // const previous = prevProps.bind.value;
        const current = this.props.defaultValue;
        const previous = prevProps.defaultValue;

        // Extract mapping from bind on first data load
        if (previous === undefined && current !== undefined) {
            this.reset();
        }
    }

    /**
     * Reset the search to what was supplied in the `defaultValue` prop
     *
     * @public
     */
    reset() {
        let { defaultValue } = this.props;

        if (typeof defaultValue !== 'object') {
            this.clear();
            return;
        }

        this.setState({
            key: defaultValue.key,
            value: defaultValue.value,
            // Lock if a value was loaded and we should go readonly immediately
            lockSearchInput: this.props.readOnlyAfterSelection
        });
    }

    /**
     * Cancel all async requests currently pending
     */
    componentWillUnmount() {
        if (this.abortController) {
            this.abortController.abort();
        }
    }

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
    shouldSearch(term) {
        const prevTerm = this.state.lastSearchTerm;
        const prevTime = this.state.lastSearchTime;
        const now = Date.now();

        // Check if the initial search term is over the initial length threshold
        if (prevTerm.length < 1 && term.length > this.props.threshold) {
            return true;
        }

        // Check for a length delta over the threshold
        if (Math.abs(term.length, prevTerm.length) > this.props.termDelta) {
            return true;
        }

        // Finally, check for a long enough delay
        if (prevTime + this.props.delay > now) {
            return true;
        }

        // No conditions passed: don't search
        return false;
    }

    onChangeTimeout() {
        if (this.state.lastSearchTerm === this.state.value) {
            return;
        }

        if (this.state.value) {
            this.search(this.state.value);
        }
    }

    stopChangeTimeout() {
        if (this.changeTimeoutHandle) {
            window.clearTimeout(this.changeTimeoutHandle);
            this.changeTimeoutHandle = null;
        }
    }

    resetChangeTimeout() {
        this.stopChangeTimeout();

        this.changeTimeoutHandle = window.setTimeout(
            this.onChangeTimeout,
            this.props.delay
        );
    }

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
    search(term) {
        if (!term) {
            throw new Error('Search term needs to be a non-empty string');
        }

        const now = Date.now();

        this.setState({
            lastSearchTerm: term,
            lastSearchTime: now,
            searching: true
        });

        // Abort any prior search before firing off a new one
        if (this.abortController) {
            this.abortController.abort();
        }

        this.abortController = new window.AbortController();

        const payload = {
            signal: this.abortController.signal,
            method: 'GET',
            cache: 'no-cache',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // Include authorization token, if supplied
        if (this.props.token) {
            payload.headers.Authorization = this.props.token;
        }

        return fetch(this.getEndpointURL(term), payload)
            .then((res) => validateAndTransformJsonApiResponse(res))
            .then((json) => this.loadApiResponse(json))
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    this.error(err.message);
                }
            });
    }

    /**
     * @param {Response} res
     */
    loadApiResponse(res) {
        const results = res.data;
        let totalResults = res.data.length;

        // Look for a meta field that contains a true result count
        if (res.meta && res.meta.total) {
            totalResults = res.meta.total;
        }

        this.setState({
            results,
            totalResults,
            showSearchResults: true,
            searching: false
        });
    }

    /**
     * Throw this component into an error state with the given message.
     *
     * @param {string} message
     */
    error(message) {
        console.error(message);

        this.setState({
            error: true,
            showSearchResults: true,
            searching: false
        });
    }

    /**
     * Generate a URL for the endpoint that contains the entire term + query
     *
     * @param {string} term Search term to send
     *
     * @return {string} Final URL of the endpoint
     */
    getEndpointURL(term) {
        // TODO: It'd be nice to use URL and URLSearchParams here, but no IE11 support.
        let endpoint = this.props.endpoint + '?q=' + term;

        const keys = Object.keys(this.props.query);
        keys.forEach((key) => {
            endpoint += '&' + key + '=' + this.props.query[key] + '&';
        });

        return endpoint;
    }

    /**
     * @param {string} key
     * @param {string} value
     */
    onResultSelect(key, value) {
        this.setState({
            key,
            value,
            showSearchResults: false,
            lockSearchInput: this.props.readOnlyAfterSelection
        });

        // Delegate to the parent HOF to update the bind
        // with an object containing {key, value} properties
        if (this.props.onChange) {
            this.props.onChange({
                target: {
                    // name: this.props.bind.name,
                    name: this.props.name,
                    type: 'text',
                    value: { key, value }
                }
            });
        }
    }

    /**
     * Custom change handler, as typing in the search box does
     * *not* automatically update the field we should PATCH back.
     *
     * @param {SyntheticEvent} e
     */
    onChange(e) {
        // Reset whatever the current selection was, as a changed
        // value will immediately clear out any key.
        this.setState({
            key: null,
            value: e.target.value,
        });

        this.resetChangeTimeout();

        if (e.target.value.length < 1) {
            this.clear();
        } else if (this.shouldSearch(e.target.value)) {
            this.search(e.target.value);
        }
    }

    /**
     * Clear the current search field and results.
     *
     * This will also unlock the search field to accept new
     * input from the user if it was previously locked.
     *
     * @public
     */
    clear() {
        this.setState({
            key: null,
            value: '',
            results: [],
            totalResults: 0,
            lockSearchInput: false,
            showSearchResults: false,
            lastSearchTerm: '',
            lastSearchTime: 0
        });

        // Clear bind values
        if (this.props.onChange) {
            this.props.onChange({
                target: {
                    // name: this.props.bind.name,
                    name: this.props.name,
                    type: 'text',
                    value: {
                        key: null,
                        value: ''
                    }
                }
            });
        }

        // Ensure the input gets focus after the search is cleared
        this.input.current.focus();
    }

    /**
     * Get DOM that should be rendered in the dropdown
     */
    getDropdownContent() {
        if (this.props.dropdownContentRenderer) {
            return this.props.dropdownContentRenderer(
                this.state.totalResults,
                this.state.results,
                this.state.error
            );
        }

        // const name = bind.name;
        const name = this.props.name;

        if (this.state.error) {
            return (
                <div id={name + '-results'} className="dropdown-menu" role="listbox">
                    <div className="dropdown-header">
                        <span className="lookup-error text-danger">
                            Something went wrong. Try reloading the page. If the problem persists,
                            contact <a href="mailto:orhelpdesk@osu.edu">orhelpdesk@osu.edu</a>
                        </span>
                    </div>
                </div>
            );
        }

        // At least one result came back
        if (this.state.results.length > 0) {
            const ResultComponent = this.props.resultComponent || SearchResult;
            const additionalResultsCount = this.state.totalResults - this.state.results.length;
            return (
                <div id={name + '-results'} className="dropdown-menu" role="listbox">
                    {this.state.results.map(
                        (result, idx) => <ResultComponent
                                        key={idx}
                                        resource={result}
                                        onSelect={this.onResultSelect}
                                    />
                    )}

                    {additionalResultsCount > 0 &&
                        <div className="dropdown-header">
                            There are <strong>{additionalResultsCount}</strong> additional
                            results. Please narrow your search.
                        </div>
                    }
                </div>
            );
        }

        // Default content: no results
        return (
            <div id={name + '-results'} className="dropdown-menu" role="listbox">
                <div className="dropdown-header">
                    There are no matching results.
                </div>
            </div>
        );
    }

    render() {
        // const { isPrint, isDiff, isLoading } = this.context;
        // const { bind } = this.props;
        const value = this.state.value || '';
        const hasValue = value.length > 0;

        // const name = bind.name;
        const { name, onFocus, onBlur, readOnly } = this.props;

        // If we're loading content (not search results, but initial form content),
        // display a lazy loader placeholder
        // if (isLoading) {
        //     return (
        //         <div className="flow-text-lazy-loader">
        //             <div className="flow-text-lazy-loader-line"></div>
        //         </div>
        //     );
        // }

        // // If Flow is printing, just return the display value.
        // if (isPrint) {
        //     return <p className="text-print">{value || '—'}</p>;
        // }

        // if (isDiff) {
        //     // If the value changed, we show both as added/removed.
        //     if (value !== bind.default.value) {
        //         return (
        //             <p className="text-diff text-print">
        //                 <span className="is-removed"> {bind.default.value} </span>
        //                 <span className="is-added"> {value} </span>
        //             </p>
        //         );
        //     }

        //     // If there's no value change, just dump what the current value is (or a dash for no value)
        //     return <p>{value || '—'}</p>;
        // }

        // Wrap the control in a  `.is-invalid` if there's any validation errors
        let classNames = 'form-control search-input';
        // if (bind.error) {
        //     classNames += ' is-invalid';
        // }

        if (hasValue) {
            classNames += ' search-input-has-value';
        }

        return (
            <div className="input-group search">
                <span className="input-group-prefix">
                    <i className={this.getPrefixIconClasses()} aria-hidden="true"></i>
                </span>

                <input id={name} name={name} type="text"
                    className={classNames} value={value}
                    autoComplete="off" aria-autocomplete="list"
                    aria-haspopup="true" aria-owns={name + '-results'}
                    readOnly={this.state.lockSearchInput || readOnly}
                    ref={this.input}
                    onChange={this.onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                {hasValue && !readOnly &&
                    <button className="btn btn-link search-clear" type="button"
                        aria-label="clear selection"
                        onClick={this.clear}><Icon name="close"></Icon></button>
                }

                {(this.state.showSearchResults || this.props.alwaysShowResults) &&
                    this.getDropdownContent()
                }
            </div>
        );
    }
}

Search.propTypes = {
    /**
     * Unique name (and ID) of the search input. This is required in order to
     * ensure that the appropriate Aria tags are set on the input and search results.
     */
    name: PropTypes.string.isRequired,
    // bind: PropTypes.object,

    /**
     * Preloaded value to start with when initializing the component
     */
    defaultValue: PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        value: PropTypes.any.isRequired
    }),

    /**
     * Callable for when an item is selected from the search results, or the search is cleared.
     *
     * The callable receives an object that contains `.target.name` with the value of the `name` prop,
     * and `.target.value` containing the attributes of the selected result from the API.
     */
    onChange: PropTypes.func,

    /**
     * `onFocus` event delegated to the inner `input` element
     */
    onFocus: PropTypes.func,

    /**
     * `onBlur` event delegated to the inner `input` element
     */
    onBlur: PropTypes.func,

    /**
     * The component to render for each search result listed.
     *
     * This MUST support the following properties:
     *
     * - `onSelect`: Callable that signals Search that the result has been selected
     * - `resource`: Contains the full JSON:API resource payload for a specific search result.
     *
     * Defaults to the `SearchResult` component if not supplied.
     */
    resultComponent: PropTypes.node,

    /**
     * Callback to render custom content in place of the dropdown.
     *
     * This is for use internally by `AppSearch` and is subject to change without notice.
     *
     * @private
     */
    dropdownContentRenderer: PropTypes.func,

    /**
     * Should the results list always be displayed, whether or not there are results.
     *
     * This is for use internally by `AppSearch` and is subject to change without notice.
     *
     * @private
     */
    alwaysShowResults: PropTypes.bool.isRequired,

    /**
     * URI to an endpoint that supports full text search (`q` query paramter)
     * and returns a collection of JSON:API resources.
     */
    endpoint: PropTypes.string.isRequired,

    /**
     * Value to send in the `Authorization` header of requests.
     * Typically a bearer token for endpoints behind OAuth.
     */
    token: PropTypes.string,

    /**
     * Key-value pairs of additional query parameters passed to the endpoint
     */
    query: PropTypes.object.isRequired,

    /**
     * If true, the input will go readonly once the user selects an option.
     * This is to prevent the user from selecting something, and then changing
     * the contents of the input to differ slightly from what was expected.
     *
     * Note that this will still allow the user to clear the selection unlike
     * setting `readOnly={true}`.
     */
    readOnlyAfterSelection: PropTypes.bool.isRequired,

    /**
     * Minimum characters required before searching
     */
    threshold: PropTypes.number.isRequired,

    /**
     * Delta of search text change before firing the next HTTP request.
     *
     * This helps throttle our requests for fast typers while keeping
     * the results as responsive as possible
     */
    termDelta: PropTypes.number.isRequired,

    /**
     * Delay between the last input event and the next HTTP request.
     *
     * This is applied when a user inputs text that isn't long enough
     * to pass `termDelta`, but the stopped typing implies that they
     * are waiting for a result response
     */
    delay: PropTypes.number.isRequired,

    /**
     * Can the search input be modified by the end user. Setting this to `true`
     * will also disable the user's ability to clear the selection.
     */
    readOnly: PropTypes.bool.isRequired
};

Search.defaultProps = {
    query: {},
    onChange: null,
    onFocus: null,
    onBlur: null,
    readOnlyAfterSelection: true,
    dropdownContentRenderer: null,
    alwaysShowResults: false,
    threshold: 3,
    termDelta: 5,
    delay: 500,
    readOnly: false
};

// Search.contextType = FlowContext;

export default Search;
