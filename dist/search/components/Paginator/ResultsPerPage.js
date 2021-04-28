"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ResultsPerPage;

var _react = _interopRequireDefault(require("react"));

var _useSearchProvider = _interopRequireDefault(require("../../hooks/useSearchProvider"));

var _dropdown = require("primereact/dropdown");

function ResultsPerPage(_ref) {
  var provider = _ref.provider;

  /** Could just pass this down in props, but we also need the provider name for the id, so we'll just get the search provider again */
  var ctx = (0, _useSearchProvider.default)(provider);
  var options = [{
    label: '10',
    value: 10
  }, {
    label: '20',
    value: 20
  }, {
    label: '50',
    value: 50
  }, {
    label: '100',
    value: 100
  }];
  var id = "".concat(provider, "-results-per-page");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "sr-only"
  }, "Results Per Page"), /*#__PURE__*/_react.default.createElement(_dropdown.Dropdown, {
    id: id,
    value: ctx.limit,
    options: options,
    onChange: function onChange(e) {
      return ctx.setLimit(e.value);
    }
  }));
}