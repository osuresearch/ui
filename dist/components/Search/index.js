"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SearchResult = _interopRequireDefault(require("../SearchResult"));

var _JsonApiUtility = require("../../internal/JsonApiUtility");

// import FlowContext from '../context/FlowContext';

/**
 * Search input field. Pure-React replacement of Lookup.
 * Requires a JSON:API compliant backend endpoint.
 */
var Search =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Search, _React$Component);

  function Search(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Search);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Search).call(this, props));
    _this.state = {
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
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onResultSelect = _this.onResultSelect.bind((0, _assertThisInitialized2.default)(_this));
    _this.clear = _this.clear.bind((0, _assertThisInitialized2.default)(_this));
    _this.onChangeTimeout = _this.onChangeTimeout.bind((0, _assertThisInitialized2.default)(_this));
    _this.input = _react.default.createRef();

    if (!window.AbortController || !window.AbortSignal) {
      throw new Error('Browser does not support AbortController/AbortSignal');
    }

    _this.abortController = null;
    _this.changeTimeoutHandle = null;
    return _this;
  }
  /**
   * Font Awesome icon to display inline with the input.
   *
   * Icon changes depending on the current input state
   * (searching, has results, has error, etc)
   *
   * @return string
   */


  (0, _createClass2.default)(Search, [{
    key: "getPrefixIconClasses",
    value: function getPrefixIconClasses() {
      if (this.state.searching) {
        return 'fa fa-spinner fa-spin';
      }

      if (this.state.error) {
        return 'fa fa-exclamation-circle text-danger';
      } // Default looking glass icon


      return 'fa fa-search';
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reset();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // const current = this.props.bind.value;
      // const previous = prevProps.bind.value;
      var current = this.props.defaultValue;
      var previous = prevProps.defaultValue; // Extract mapping from bind on first data load

      if (previous === undefined && current !== undefined) {
        this.reset();
      }
    }
    /**
     * Reset the search to what was supplied in the `defaultValue` prop
     *
     * @public
     */

  }, {
    key: "reset",
    value: function reset() {
      var defaultValue = this.props.defaultValue;

      if ((0, _typeof2.default)(defaultValue) !== 'object') {
        this.clear();
        return;
      }

      this.setState({
        key: defaultValue.key,
        value: defaultValue.value,
        // Lock if a value was loaded and we should go readonly immediately
        lockSearchInput: this.props.readonlyAfterSelection
      });
    }
    /**
     * Cancel all async requests currently pending
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
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

  }, {
    key: "shouldSearch",
    value: function shouldSearch(term) {
      var prevTerm = this.state.lastSearchTerm;
      var prevTime = this.state.lastSearchTime;
      var now = Date.now(); // Check if the initial search term is over the initial length threshold

      if (prevTerm.length < 1 && term.length > this.props.threshold) {
        return true;
      } // Check for a length delta over the threshold


      if (Math.abs(term.length, prevTerm.length) > this.props.termDelta) {
        return true;
      } // Finally, check for a long enough delay


      if (prevTime + this.props.delay > now) {
        return true;
      } // No conditions passed: don't search


      return false;
    }
  }, {
    key: "onChangeTimeout",
    value: function onChangeTimeout() {
      if (this.state.lastSearchTerm === this.state.value) {
        return;
      }

      if (this.state.value) {
        this.search(this.state.value);
      }
    }
  }, {
    key: "stopChangeTimeout",
    value: function stopChangeTimeout() {
      if (this.changeTimeoutHandle) {
        window.clearTimeout(this.changeTimeoutHandle);
        this.changeTimeoutHandle = null;
      }
    }
  }, {
    key: "resetChangeTimeout",
    value: function resetChangeTimeout() {
      this.stopChangeTimeout();
      this.changeTimeoutHandle = window.setTimeout(this.onChangeTimeout, this.props.delay);
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

  }, {
    key: "search",
    value: function search(term) {
      var _this2 = this;

      if (!term) {
        throw new Error('Search term needs to be a non-empty string');
      }

      var now = Date.now();
      this.setState({
        lastSearchTerm: term,
        lastSearchTime: now,
        searching: true
      }); // Abort any prior search before firing off a new one

      if (this.abortController) {
        this.abortController.abort();
      }

      this.abortController = new window.AbortController();
      var payload = {
        signal: this.abortController.signal,
        method: 'GET',
        cache: 'no-cache',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json'
        }
      }; // Include authorization token, if supplied

      if (this.props.token) {
        payload.headers.Authorization = this.props.token;
      }

      return fetch(this.getEndpointURL(term), payload).then(function (res) {
        return (0, _JsonApiUtility.validateAndTransformJsonApiResponse)(res);
      }).then(function (json) {
        return _this2.loadApiResponse(json);
      }).catch(function (err) {
        if (err.name !== 'AbortError') {
          _this2.error(err.message);
        }
      });
    }
    /**
     * @param {Response} res
     */

  }, {
    key: "loadApiResponse",
    value: function loadApiResponse(res) {
      var results = res.data;
      var totalResults = res.data.length; // Look for a meta field that contains a true result count

      if (res.meta && res.meta.total) {
        totalResults = res.meta.total;
      }

      this.setState({
        results: results,
        totalResults: totalResults,
        showSearchResults: true,
        searching: false
      });
    }
    /**
     * Throw this component into an error state with the given message.
     *
     * @param {string} message
     */

  }, {
    key: "error",
    value: function error(message) {
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

  }, {
    key: "getEndpointURL",
    value: function getEndpointURL(term) {
      var _this3 = this;

      // TODO: It'd be nice to use URL and URLSearchParams here, but no IE11 support.
      var endpoint = this.props.endpoint + '?q=' + term;
      var keys = Object.keys(this.props.query);
      keys.forEach(function (key) {
        endpoint += '&' + key + '=' + _this3.props.query[key] + '&';
      });
      return endpoint;
    }
    /**
     * @param {string} key
     * @param {string} value
     */

  }, {
    key: "onResultSelect",
    value: function onResultSelect(key, value) {
      this.setState({
        key: key,
        value: value,
        showSearchResults: false,
        lockSearchInput: this.props.readonlyAfterSelection
      }); // Delegate to the parent HOF to update the bind
      // with an object containing {key, value} properties

      if (this.props.onChange) {
        this.props.onChange({
          target: {
            // name: this.props.bind.name,
            name: this.props.name,
            type: 'text',
            value: {
              key: key,
              value: value
            }
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

  }, {
    key: "onChange",
    value: function onChange(e) {
      // Reset whatever the current selection was, as a changed
      // value will immediately clear out any key.
      this.setState({
        key: null,
        value: e.target.value
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

  }, {
    key: "clear",
    value: function clear() {
      this.setState({
        key: null,
        value: '',
        results: [],
        totalResults: 0,
        lockSearchInput: false,
        showSearchResults: false,
        lastSearchTerm: '',
        lastSearchTime: 0
      }); // Clear bind values

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
      } // Ensure the input gets focus after the search is cleared


      this.input.current.focus();
    }
    /**
     * Get DOM that should be rendered in the dropdown
     */

  }, {
    key: "getDropdownContent",
    value: function getDropdownContent() {
      var _this4 = this;

      if (this.props.dropdownContentRenderer) {
        return this.props.dropdownContentRenderer(this.state.totalResults, this.state.results, this.state.error);
      } // const name = bind.name;


      var name = this.props.name;

      if (this.state.error) {
        return _react.default.createElement("div", {
          id: name + '-results',
          className: "dropdown-menu",
          role: "listbox"
        }, _react.default.createElement("div", {
          className: "dropdown-header"
        }, _react.default.createElement("span", {
          className: "lookup-error text-danger"
        }, "Something went wrong. Try reloading the page. If the problem persists, contact ", _react.default.createElement("a", {
          href: "mailto:orhelpdesk@osu.edu"
        }, "orhelpdesk@osu.edu"))));
      } // At least one result came back


      if (this.state.results.length > 0) {
        var ResultComponent = this.props.resultComponent || _SearchResult.default;
        var additionalResultsCount = this.state.totalResults - this.state.results.length;
        return _react.default.createElement("div", {
          id: name + '-results',
          className: "dropdown-menu",
          role: "listbox"
        }, this.state.results.map(function (result, idx) {
          return _react.default.createElement(ResultComponent, {
            key: idx,
            resource: result,
            onSelect: _this4.onResultSelect
          });
        }), additionalResultsCount > 0 && _react.default.createElement("div", {
          className: "dropdown-header"
        }, "There are ", _react.default.createElement("strong", null, additionalResultsCount), " additional results. Please narrow your search."));
      } // Default content: no results


      return _react.default.createElement("div", {
        id: name + '-results',
        className: "dropdown-menu",
        role: "listbox"
      }, _react.default.createElement("div", {
        className: "dropdown-header"
      }, "There are no matching results."));
    }
  }, {
    key: "render",
    value: function render() {
      // const { isPrint, isDiff, isLoading } = this.context;
      // const { bind } = this.props;
      var value = this.state.value || ''; // const name = bind.name;

      var _this$props = this.props,
          name = _this$props.name,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur; // If we're loading content (not search results, but initial form content),
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

      var classNames = 'form-control'; // if (bind.error) {
      //     classNames += ' is-invalid';
      // }

      return _react.default.createElement("div", {
        className: "input-group input-search"
      }, _react.default.createElement("span", {
        className: "input-group-prefix"
      }, _react.default.createElement("i", {
        className: this.getPrefixIconClasses(),
        "aria-hidden": "true"
      })), _react.default.createElement("input", {
        id: name,
        name: name,
        type: "text",
        className: classNames,
        value: value,
        autoComplete: "off",
        "aria-autocomplete": "list",
        "aria-haspopup": "true",
        "aria-owns": name + '-results',
        readOnly: this.state.lockSearchInput,
        ref: this.input,
        onChange: this.onChange,
        onFocus: onFocus,
        onBlur: onBlur
      }), this.state.lockSearchInput && _react.default.createElement("span", {
        className: "input-group-suffix"
      }, _react.default.createElement("button", {
        className: "btn btn-secondary",
        type: "button",
        "aria-label": "clear selection",
        onClick: this.clear
      }, "Clear")), (this.state.showSearchResults || this.props.alwaysShowResults) && this.getDropdownContent());
    }
  }]);
  return Search;
}(_react.default.Component);

Search.propTypes = {
  /**
   * Unique name (and ID) of the search input. This is required in order to
   * ensure that the appropriate Aria tags are set on the input and search results.
   */
  name: _propTypes.default.string.isRequired,
  // bind: PropTypes.object,

  /**
   * Preloaded value to start with when initializing the component
   */
  defaultValue: _propTypes.default.shape({
    key: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
    value: _propTypes.default.any.isRequired
  }),

  /**
   * Callable for when an item is selected from the search results, or the search is cleared.
   *
   * The callable receives an object that contains `.target.name` with the value of the `name` prop,
   * and `.target.value` containing the attributes of the selected result from the API.
   */
  onChange: _propTypes.default.func,

  /**
   * `onFocus` event delegated to the inner `input` element
   */
  onFocus: _propTypes.default.func,

  /**
   * `onBlur` event delegated to the inner `input` element
   */
  onBlur: _propTypes.default.func,

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
  resultComponent: _propTypes.default.node,

  /**
   * Callback to render custom content in place of the dropdown.
   *
   * This is for use internally by `AppSearch` and is subject to change without notice.
   *
   * @private
   */
  dropdownContentRenderer: _propTypes.default.func,

  /**
   * Should the results list always be displayed, whether or not there are results.
   *
   * This is for use internally by `AppSearch` and is subject to change without notice.
   *
   * @private
   */
  alwaysShowResults: _propTypes.default.bool.isRequired,

  /**
   * URI to an endpoint that supports full text search (`q` query paramter)
   * and returns a collection of JSON:API resources.
   */
  endpoint: _propTypes.default.string.isRequired,

  /**
   * Value to send in the `Authorization` header of requests.
   * Typically a bearer token for endpoints behind OAuth.
   */
  token: _propTypes.default.string,

  /**
   * Key-value pairs of additional query parameters passed to the endpoint
   */
  query: _propTypes.default.object.isRequired,

  /**
   * If true, the input will go readonly once the user selects an option.
   * This is to prevent the user from selecting something, and then changing
   * the contents of the input to differ slightly from what was expected.
   */
  readonlyAfterSelection: _propTypes.default.bool.isRequired,

  /**
   * Minimum characters required before searching
   */
  threshold: _propTypes.default.number.isRequired,

  /**
   * Delta of search text change before firing the next HTTP request.
   *
   * This helps throttle our requests for fast typers while keeping
   * the results as responsive as possible
   */
  termDelta: _propTypes.default.number.isRequired,

  /**
   * Delay between the last input event and the next HTTP request.
   *
   * This is applied when a user inputs text that isn't long enough
   * to pass `termDelta`, but the stopped typing implies that they
   * are waiting for a result response
   */
  delay: _propTypes.default.number.isRequired
};
Search.defaultProps = {
  query: {},
  onChange: null,
  onFocus: null,
  onBlur: null,
  readonlyAfterSelection: true,
  dropdownContentRenderer: null,
  alwaysShowResults: false,
  threshold: 3,
  termDelta: 5,
  delay: 500
}; // Search.contextType = FlowContext;

var _default = Search;
exports.default = _default;