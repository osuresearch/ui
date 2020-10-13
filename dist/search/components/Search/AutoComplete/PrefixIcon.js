"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PrefixIcon;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../../../components/Icon"));

/**
 * Font Awesome icon to display inline with the input.
 * 
 * Icon changes depending on the current input state
 * (searching, has results, has error, etc)
 * 
 * @return {JSX.Element}
 */
function PrefixIcon(_ref) {
  var searching = _ref.searching,
      error = _ref.error;

  var getPrefixIcon = function getPrefixIcon() {
    if (searching) {
      return {
        name: 'spinner',
        spin: true
      };
    }

    if (error) {
      return {
        name: 'exclamation-circle'
      };
    } // Default looking glass icon


    return {
      name: 'search'
    };
  };

  return /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-prefix ".concat(error && 'text-danger')
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, getPrefixIcon()));
}