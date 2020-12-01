"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Context = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _AutoComplete = _interopRequireDefault(require("./AutoComplete"));

var _Results = _interopRequireDefault(require("./Results"));

var _Mapper = _interopRequireDefault(require("./Results/Mapper"));

var _Panel = _interopRequireDefault(require("./Results/Panel"));

var _AggregatePanel = _interopRequireDefault(require("./Results/AggregatePanel"));

var _Error = _interopRequireDefault(require("./Error"));

var _Empty = _interopRequireDefault(require("./Empty"));

var Context = /*#__PURE__*/_react.default.createContext({});
/**
 * Composite component that handles performing searches with a provided `driver`
 * and displaying the results of each search.
 *
 * Drivers will typically execute a search whenever search data changes (terms, filters, or sorting).
 * For more information on how each driver executes a search, see their respective documentation.
 */


exports.Context = Context;

var Search = function Search(_ref) {
  var provider = _ref.provider,
      driver = _ref.driver,
      children = _ref.children;

  var _useState = (0, _react.useState)({
    loading: true
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1]; // TODO: Remove this component. Unnecessary.


  var DriverComponent = driver;
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: data
  }, /*#__PURE__*/_react.default.createElement(DriverComponent, {
    provider: provider
  }), children);
};

Search.AutoComplete = _AutoComplete.default;
Search.Results = _Results.default;
Search.Results.Mapper = _Mapper.default;
Search.Results.Panel = _Panel.default;
Search.Results.AggregatePanel = _AggregatePanel.default;
Search.Error = _Error.default;
Search.Empty = _Empty.default;
var _default = Search;
exports.default = _default;