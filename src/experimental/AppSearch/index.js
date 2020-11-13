
import React from 'react';
import PropTypes from 'prop-types';

import Search from '../../components/controls/Search';

/**
 * Application-wide searching. For use with the navbar.
 *
 * This component is a wrapper around `Search` with custom UX for displaying
 * aggregate search results across a wide variety of resources available
 * within an application - and linking to those resources (pages) rather than
 * filling in a search input after selection.
 */
class AppSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: false
        };

        this.contentRenderer = this.contentRenderer.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    /**
     * Event handler for the underlying input's `onFocus`
     *
     * @param {SyntheticEvent} e
     */
    onFocus(e) {
        this.setState({ focused: true });
    }

    /**
     * Event handler for the underlying input's `onBlur`
     *
     * @param {SyntheticEvent} e
     */
    onBlur(e) {
        this.setState({ focused: false });
    }

    contentRenderer(totalResults, results, error) {
        const style = {
            height: '0px'
        };

        // TODO: Dynamic height. Depends on the content height *after* render.
        // Current fixed height is trial and error, based on a 10 result maximum
        if (results.length > 0 || error) { // || this.state.focused) {
            style.height = '310px';
        }

        if (error) {
            return (
                <div className="app-search-error">Something went wrong</div>
            );
        }

        // Bucket results based on the categorizer
        const buckets = this.createBuckets(results);

        // Split buckets into two columns, maximum of 5 buckets per column
        const leftKeys = Object.keys(buckets);
        leftKeys.splice(10);
        const rightKeys = leftKeys.splice(Math.ceil(leftKeys.length / 2));

        // Balance results in each column
        let left = {};
        leftKeys.forEach((key) => left[key] = buckets[key]);
        left = this.balanceBuckets(left);

        let right = {};
        rightKeys.forEach((key) => right[key] = buckets[key]);
        right = this.balanceBuckets(right);

        return (
            <div id="app-search-results" className="app-search-results" style={style}>
                <div className="row">
                    <div className="col-6">
                        {leftKeys.map((key) => this.renderCategory(key, left[key]))}
                    </div>
                    <div className="col-6">
                        {rightKeys.map((key) => this.renderCategory(key, right[key]))}
                    </div>
                </div>
            </div>
        );
    }

    renderCategory(category, results) {
        return (
            <div className="app-search-category">
                <div className="app-search-category-header">
                    {category}
                </div>
                <ul className="app-search-category-results">
                    {results.map((result) =>
                        <li key={result.id}>
                            {result.attributes.name}
                        </li>
                    )}
                </ul>
            </div>
        );
    }

    /**
     * Balance a column of bucket results based on number of results
     * in each bucket against a maximum number of results for a column.
     */
    balanceBuckets(buckets) {
        let total = 0; // Total results included in this column
        const balanced = {}; // Buckets trimmed down to limited results
        const keys = Object.keys(buckets);
        const limit = 10 - keys.length; // Maximum number of results for this column

        let maxLength = 0;
        for (let i = 0; i < keys.length; i++) {
            maxLength = Math.max(maxLength, buckets[keys[i]].length);
        }

        // Evenly distribute from buckets to fill to the global limit
        for (let i = 0; i < maxLength && total < limit; i++) {
            for (let j = 0; j < keys.length && total < limit; j++) {
                const key = keys[j];

                if (!balanced.hasOwnProperty(key)) {
                    balanced[key] = [];
                }

                if (buckets[key].length > 0) {
                    balanced[key].push(buckets[key].shift());
                    total++;
                }
            }
        }

        return balanced;
    }

    /**
     * Group JSON:API results payloads into buckets based on our categorizer
     *
     * @return {object} Mapping bucket names to an array of values
     */
    createBuckets(results) {
        const buckets = {};
        const jpath = this.props.categorizer.split('.');

        for (let i = 0; i < results.length; i++) {
            let hasError = false;
            let category = results[i];

            for (let j = 0; j < jpath.length; j++) {
                if (category === null) {
                    hasError = true;
                    break;
                }

                category = category[jpath[j]];
            }

            // If the category is invalid, dump a console warning and skip.
            if (typeof category !== 'string' || hasError) {
                console.warn(`Could not resolve categorization path '${this.props.categorizer}' for resource ${
                    JSON.stringify(results[i])
                }`);
            } else {
                if (!buckets.hasOwnProperty(category)) {
                    buckets[category] = [];
                }

                buckets[category].push(results[i]);
            }
        }

        // Key sort and return as array
        const sorted = {};
        Object.keys(buckets).sort().forEach((key) => sorted[key] = buckets[key]);

        return sorted;
    }

    render() {
        const { endpoint, token, query } = this.props;

        return (
            <div className="app-search">
                <Search
                    name="app-search"
                    endpoint={endpoint}
                    token={token}
                    query={query}
                    readonlyAfterSelection={false}
                    alwaysShowResults={true}
                    dropdownContentRenderer={this.contentRenderer}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
            </div>
        );
    }
}

AppSearch.propTypes = {
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
     * JSON value to extract for categorizing results into multiple buckets.
     *
     * Dot-notation can be used to select a nested JSON path.
     */
    categorizer: PropTypes.string.isRequired,

    /**
     * Key in the JSON:API links object to use for populating results anchors.
     *
     * Private for now - name is subject to change.
     *
     * @private
     */
    linkKey: PropTypes.string.isRequired
};

AppSearch.defaultProps = {
    query: {},
    categorizer: 'type',
    linkKey: 'homepage',
};

export default AppSearch;
