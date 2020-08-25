"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HoursDescription;

var _react = _interopRequireWildcard(require("react"));

var _TimeFieldContext = require("./TimeFieldContext");

function HoursDescription() {
  var _useContext = (0, _react.useContext)(_TimeFieldContext.TimeFieldContext),
      id = _useContext.id,
      readOnly = _useContext.readOnly,
      hour = _useContext.hour,
      minutes = _useContext.minutes,
      meridiem = _useContext.meridiem;

  return /*#__PURE__*/_react.default.createElement("div", {
    id: 'hours-description-' + id,
    className: "sr-only"
  }, readOnly && /*#__PURE__*/_react.default.createElement("span", null, "This field is disabled. "), !hour && /*#__PURE__*/_react.default.createElement("span", null, "You have not yet selected an hour. "), hour && /*#__PURE__*/_react.default.createElement("span", null, hour, " hour selected. "), minutes && /*#__PURE__*/_react.default.createElement("span", null, minutes, " minutes selected. "), meridiem && /*#__PURE__*/_react.default.createElement("span", null, meridiem, " selected. "), !readOnly && /*#__PURE__*/_react.default.createElement("span", null, "To increment the hour, press the up arrow. To decrement, press the down arrow. Tab or press the right arrow to move to the minutes selector."));
}