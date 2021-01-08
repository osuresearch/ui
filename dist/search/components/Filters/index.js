"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Context = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.scss");

var _Active = _interopRequireDefault(require("./Active"));

var _Terms = _interopRequireDefault(require("./Terms"));

var _Group = _interopRequireDefault(require("./Group"));

var _OneOf = _interopRequireDefault(require("./OneOf"));

var _AnyOf = _interopRequireDefault(require("./AnyOf"));

var _Toggle = _interopRequireDefault(require("./Toggle"));

var _Match = _interopRequireDefault(require("./Match"));

var _More = _interopRequireDefault(require("./More"));

var _Toggles = _interopRequireDefault(require("./Toggles"));

var _SortBy = _interopRequireDefault(require("./SortBy"));

var _useSearchProvider = _interopRequireDefault(require("../../hooks/useSearchProvider"));

// Context shared by all children of <Filters>
var Context = /*#__PURE__*/(0, _react.createContext)({});
/**
 * Set of UI components that control the terms and filters for a search.
 *
 * At the top level `<Filters>` binds to a named search via `useSearchProvider()`
 * and all the child components automatically update terms and filters of
 * that search.
 */

exports.Context = Context;

var Filters = function Filters(_ref) {
  var provider = _ref.provider,
      children = _ref.children;
  // This uses a search provider and shares the same provider with all child
  // components, without each one needing to also hook the provider.
  // const search = useSearchProvider(provider);
  var search = (0, _useSearchProvider.default)(provider);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: search
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "filters"
  }, children));
};

Filters.Terms = _Terms.default;
Filters.Group = _Group.default;
Filters.OneOf = _OneOf.default;
Filters.AnyOf = _AnyOf.default;
Filters.Toggles = _Toggles.default;
Filters.Toggle = _Toggle.default;
Filters.Match = _Match.default;
Filters.Active = _Active.default;
Filters.More = _More.default;
Filters.SortBy = _SortBy.default;
var _default = Filters;
exports.default = _default;