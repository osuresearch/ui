"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ = require(".");

/**
 * Immutable set of filters.
 * 
 * Any mutation methods to the filters return a new modified copy.
 */
var SearchFilters = /*#__PURE__*/function () {
  /** All top level filters are ANDed together */

  /** Current search filter */
  // TODO: Just slap terms in here too instead of tracking separately?
  function SearchFilters() {
    var initialFilters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    (0, _classCallCheck2.default)(this, SearchFilters);
    (0, _defineProperty2.default)(this, "m_Filters", void 0);
    (0, _defineProperty2.default)(this, "m_Sort", void 0);
    this.m_Filters = (0, _.AND)(initialFilters);
  }
  /**
   * Get a readonly copy of the current filters
   */


  (0, _createClass2.default)(SearchFilters, [{
    key: "add",

    /**
     * Add a new filter to the top level list of filters.
     * 
     * If an existing filter exists with the same name, it will be replaced.
     */
    value: function add(filter) {
      var clone = this.clone(); // In-place replace if an existing filter matches the name

      for (var i = 0; i < clone.m_Filters.AND.length; i++) {
        if (clone.m_Filters.AND[i].name === filter.name) {
          clone.m_Filters.AND[i] = filter;
          return clone;
        }
      } // Otherwise - insert at the end as a new filter.


      clone.m_Filters.AND.push(filter);
      return clone;
    }
  }, {
    key: "get",
    value: function get(name, defaultValue) {
      var _ref;

      return (_ref = this.m_Filters.AND.find(function (f) {
        return f.name === name;
      })) !== null && _ref !== void 0 ? _ref : defaultValue;
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== undefined;
    }
    /**
     * Remove a named filter and return a new immutable copy of this class
     */

  }, {
    key: "delete",
    value: function _delete(name) {
      var clone = this.clone();
      clone.m_Filters.AND = clone.m_Filters.AND.filter(function (f) {
        return f.name !== name;
      });
      return clone;
    }
    /**
     * Replace current sort rules and return a new immutable copy of this class
     */

  }, {
    key: "sortBy",
    value: function sortBy(sort) {
      var clone = this.clone(); // Deep(ish) copy the input sort

      if (!sort) {
        clone.m_Sort = undefined;
      } else {
        clone.m_Sort = {
          name: sort.name,
          sort: (0, _toConsumableArray2.default)(sort.sort)
        };
      }

      return clone;
    }
  }, {
    key: "clone",
    value: function clone() {
      var clone = new SearchFilters(); // TODO: actual deep copy. This'll at least deref the 
      // parentmost array so that anything monitoring the full
      // set of filters will get a new object ref

      clone.m_Filters.AND = (0, _toConsumableArray2.default)(this.m_Filters.AND); // TODO: Deep copy.

      clone.m_Sort = this.m_Sort; // Could be resolved via: https://reactjs.org/docs/update.html
      // (Specifically https://github.com/kolodny/immutability-helper)

      return clone;
    }
  }, {
    key: "filters",
    get: function get() {
      return this.m_Filters.AND;
    }
    /**
     * Get a readonly copy of the current sort rules
     */

  }, {
    key: "sort",
    get: function get() {
      return this.m_Sort;
    }
  }]);
  return SearchFilters;
}();

exports.default = SearchFilters;