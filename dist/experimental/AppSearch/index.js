"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Search = _interopRequireDefault(require("../../components/Search"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Application-wide searching. For use with the navbar.
 *
 * This component is a wrapper around `Search` with custom UX for displaying
 * aggregate search results across a wide variety of resources available
 * within an application - and linking to those resources (pages) rather than
 * filling in a search input after selection.
 */
var AppSearch = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AppSearch, _React$Component);

  var _super = _createSuper(AppSearch);

  function AppSearch(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AppSearch);
    _this = _super.call(this, props);
    _this.state = {
      focused: false
    };
    _this.contentRenderer = _this.contentRenderer.bind((0, _assertThisInitialized2.default)(_this));
    _this.onFocus = _this.onFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.onBlur = _this.onBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  /**
   * Event handler for the underlying input's `onFocus`
   *
   * @param {SyntheticEvent} e
   */


  (0, _createClass2.default)(AppSearch, [{
    key: "onFocus",
    value: function onFocus(e) {
      this.setState({
        focused: true
      });
    }
    /**
     * Event handler for the underlying input's `onBlur`
     *
     * @param {SyntheticEvent} e
     */

  }, {
    key: "onBlur",
    value: function onBlur(e) {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "contentRenderer",
    value: function contentRenderer(totalResults, results, error) {
      var _this2 = this;

      var style = {
        height: '0px'
      }; // TODO: Dynamic height. Depends on the content height *after* render.
      // Current fixed height is trial and error, based on a 10 result maximum

      if (results.length > 0 || error) {
        // || this.state.focused) {
        style.height = '310px';
      }

      if (error) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "app-search-error"
        }, "Something went wrong");
      } // Bucket results based on the categorizer


      var buckets = this.createBuckets(results); // Split buckets into two columns, maximum of 5 buckets per column

      var leftKeys = Object.keys(buckets);
      leftKeys.splice(10);
      var rightKeys = leftKeys.splice(Math.ceil(leftKeys.length / 2)); // Balance results in each column

      var left = {};
      leftKeys.forEach(function (key) {
        return left[key] = buckets[key];
      });
      left = this.balanceBuckets(left);
      var right = {};
      rightKeys.forEach(function (key) {
        return right[key] = buckets[key];
      });
      right = this.balanceBuckets(right);
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "app-search-results",
        className: "app-search-results",
        style: style
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-6"
      }, leftKeys.map(function (key) {
        return _this2.renderCategory(key, left[key]);
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-6"
      }, rightKeys.map(function (key) {
        return _this2.renderCategory(key, right[key]);
      }))));
    }
  }, {
    key: "renderCategory",
    value: function renderCategory(category, results) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "app-search-category"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "app-search-category-header"
      }, category), /*#__PURE__*/_react.default.createElement("ul", {
        className: "app-search-category-results"
      }, results.map(function (result) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: result.id
        }, result.attributes.name);
      })));
    }
    /**
     * Balance a column of bucket results based on number of results
     * in each bucket against a maximum number of results for a column.
     */

  }, {
    key: "balanceBuckets",
    value: function balanceBuckets(buckets) {
      var total = 0; // Total results included in this column

      var balanced = {}; // Buckets trimmed down to limited results

      var keys = Object.keys(buckets);
      var limit = 10 - keys.length; // Maximum number of results for this column

      var maxLength = 0;

      for (var i = 0; i < keys.length; i++) {
        maxLength = Math.max(maxLength, buckets[keys[i]].length);
      } // Evenly distribute from buckets to fill to the global limit


      for (var _i = 0; _i < maxLength && total < limit; _i++) {
        for (var j = 0; j < keys.length && total < limit; j++) {
          var key = keys[j];

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

  }, {
    key: "createBuckets",
    value: function createBuckets(results) {
      var buckets = {};
      var jpath = this.props.categorizer.split('.');

      for (var i = 0; i < results.length; i++) {
        var hasError = false;
        var category = results[i];

        for (var j = 0; j < jpath.length; j++) {
          if (category === null) {
            hasError = true;
            break;
          }

          category = category[jpath[j]];
        } // If the category is invalid, dump a console warning and skip.


        if (typeof category !== 'string' || hasError) {
          console.warn("Could not resolve categorization path '".concat(this.props.categorizer, "' for resource ").concat(JSON.stringify(results[i])));
        } else {
          if (!buckets.hasOwnProperty(category)) {
            buckets[category] = [];
          }

          buckets[category].push(results[i]);
        }
      } // Key sort and return as array


      var sorted = {};
      Object.keys(buckets).sort().forEach(function (key) {
        return sorted[key] = buckets[key];
      });
      return sorted;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          endpoint = _this$props.endpoint,
          token = _this$props.token,
          query = _this$props.query;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "app-search"
      }, /*#__PURE__*/_react.default.createElement(_Search.default, {
        name: "app-search",
        endpoint: endpoint,
        token: token,
        query: query,
        readonlyAfterSelection: false,
        alwaysShowResults: true,
        dropdownContentRenderer: this.contentRenderer,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }));
    }
  }]);
  return AppSearch;
}(_react.default.Component);

AppSearch.propTypes = {
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
   * JSON value to extract for categorizing results into multiple buckets.
   *
   * Dot-notation can be used to select a nested JSON path.
   */
  categorizer: _propTypes.default.string.isRequired,

  /**
   * Key in the JSON:API links object to use for populating results anchors.
   *
   * Private for now - name is subject to change.
   *
   * @private
   */
  linkKey: _propTypes.default.string.isRequired
};
AppSearch.defaultProps = {
  query: {},
  categorizer: 'type',
  linkKey: 'homepage'
};
var _default = AppSearch;
exports.default = _default;