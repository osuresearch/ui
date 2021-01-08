"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AND = AND;
exports.OR = OR;
exports.term = term;
exports.anyOf = anyOf;
exports.between = between;
exports.sort = sort;
Object.defineProperty(exports, "SearchFilters", {
  enumerable: true,
  get: function get() {
    return _SearchFilters.default;
  }
});
Object.defineProperty(exports, "SearchProvider", {
  enumerable: true,
  get: function get() {
    return _SearchProvider.default;
  }
});
Object.defineProperty(exports, "SearchDebugger", {
  enumerable: true,
  get: function get() {
    return _SearchDebugger.default;
  }
});
Object.defineProperty(exports, "SyncSearchWithURL", {
  enumerable: true,
  get: function get() {
    return _SyncSearchWithURL.default;
  }
});
Object.defineProperty(exports, "Filters", {
  enumerable: true,
  get: function get() {
    return _Filters.default;
  }
});
Object.defineProperty(exports, "useSearchProvider", {
  enumerable: true,
  get: function get() {
    return _useSearchProvider.default;
  }
});

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _SearchFilters = _interopRequireDefault(require("./SearchFilters"));

var _SearchProvider = _interopRequireDefault(require("./components/SearchProvider"));

var _SearchDebugger = _interopRequireDefault(require("./components/SearchDebugger"));

var _SyncSearchWithURL = _interopRequireDefault(require("./components/SyncSearchWithURL"));

var _Filters = _interopRequireDefault(require("./components/Filters"));

var _useSearchProvider = _interopRequireDefault(require("./hooks/useSearchProvider"));

//#region Driver interfaces

/**
 * Required props for a driver component provided to `Search.driver`
 */
//#endregion
//#region Filter interfaces
//#endregion
//#region Sort interfaces

/** Collection of fields to sort on */
//#endregion
//#region Filter vanity functions

/**
 * Factory method to create an `AndFilters` rule
 *
 * @param filters
 * @param name
 */
function AND(filters, name) {
  return {
    name: name,
    AND: filters
  };
}
/**
 * Factory method to create an `OrFilters` rule
 *
 * @param filters
 * @param name
 */


function OR(filters, name) {
  return {
    name: name,
    OR: filters
  };
}
/**
 * Factory method to create a `TermFilter` rule
 *
 * @param field
 * @param value
 * @param name
 */


function term(field, value, name) {
  return {
    name: name,
    term: (0, _defineProperty2.default)({}, field, value)
  };
}
/**
 * Factory method to create an `AnyOfFilter` rule
 *
 * @param field
 * @param values
 * @param name
 */


function anyOf(field, values, name) {
  return {
    name: name,
    anyOf: (0, _defineProperty2.default)({}, field, values)
  };
}
/**
 * Factory method to create a `BetweenFilter` rule
 *
 * @param field
 * @param from
 * @param to
 * @param name
 */


function between(field, from, to, name) {
  return {
    name: name,
    between: (0, _defineProperty2.default)({}, field, {
      from: from,
      to: to
    })
  };
} //#endregion
//#region Sort vanity functions

/**
 * Simple use case of sorting on a single field.
 *
 * ```ts
 * filters.sort(
 *  sort('Relevance', 'rank', 'desc')
 * )
 * ```
 */


function sort(name, field) {
  var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'desc';
  return {
    name: name,
    sort: [{
      field: field,
      order: order
    }]
  };
} //#endregion
//#region Public API
// Data structures and types
// Drivers are not exported here - import specific ones from `@oris/ui/search/drivers`
// This allows us to safely load only the drivers that are needed in a project.
// (e.g. a non-GraphQL project doesn't need to worry about GraphQL drivers)
//#endregion