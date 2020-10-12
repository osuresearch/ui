"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YetAnotherRadioSetWrapper = exports.YetAnotherCheckboxWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var YetAnotherCheckboxWrapper = function YetAnotherCheckboxWrapper(props) {
  var id = "filter-checkbox-".concat(props.name);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-control custom-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: id,
    name: props.name,
    checked: props.checked,
    onClick: function onClick(e) {
      return props.onClick(e.currentTarget.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "custom-control-label",
    htmlFor: id
  }, props.children));
};

exports.YetAnotherCheckboxWrapper = YetAnotherCheckboxWrapper;

var YetAnotherRadioSetWrapper = function YetAnotherRadioSetWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys(props.options).map(function (key) {
    var id = "".concat(props.name, "-").concat(key);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "custom-control custom-radio",
      key: key
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      className: "custom-control-input",
      id: id,
      name: props.name,
      checked: key === props.value,
      onClick: function onClick(e) {
        props.onChange(key, props.options[key]);
      }
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "custom-control-label",
      htmlFor: id
    }, props.options[key]));
  }));
}; // export class SearchData {
//     terms: string 
//     filters: SearchFilters
//     constructor() {
//         this.terms = '';
//         this.filters = new SearchFilters();
//     }
// }
// SearchBind extends IFieldBind<SearchData>


exports.YetAnotherRadioSetWrapper = YetAnotherRadioSetWrapper;