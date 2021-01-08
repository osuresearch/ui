"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../../generic/Icon"));

var InputGroup = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var error = _ref.error,
      searching = _ref.searching,
      bind = _ref.bind,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onKeyDown = _ref.onKeyDown,
      classNames = _ref.classNames,
      showResultsPane = _ref.showResultsPane,
      activeDescendant = _ref.activeDescendant;
  var iconProps = {
    name: 'search',
    spin: false
  };

  if (searching) {
    iconProps = {
      name: 'spinner',
      spin: true
    };
  } else if (error) {
    iconProps = {
      name: 'exclamation-circle',
      spin: false
    };
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-prefix ".concat(error && 'text-danger')
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, iconProps)), /*#__PURE__*/_react.default.createElement("input", {
    ref: ref,
    type: "text",
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-expanded": showResultsPane,
    "aria-autocomplete": "list",
    "aria-controls": "".concat(bind.id, "-lookup-results"),
    "aria-activedescendant": activeDescendant,
    id: bind.id,
    name: bind.name,
    className: classNames,
    required: bind.required,
    onBlur: onBlur,
    onChange: onChange,
    onKeyDown: onKeyDown
  }), searching && /*#__PURE__*/_react.default.createElement("div", {
    className: "sr-only",
    role: "status"
  }, "Searching..."));
});

var _default = InputGroup;
exports.default = _default;