"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MeridiemDescription;

var _react = _interopRequireWildcard(require("react"));

var _TimeFieldContext = require("./TimeFieldContext");

function MeridiemDescription() {
  var _useContext = (0, _react.useContext)(_TimeFieldContext.TimeFieldContext),
      id = _useContext.id,
      readOnly = _useContext.readOnly,
      hour = _useContext.hour,
      minutes = _useContext.minutes,
      meridiem = _useContext.meridiem;

  return /*#__PURE__*/_react.default.createElement("div", {
    id: 'meridiem-description-' + id,
    className: "sr-only"
  }, readOnly && /*#__PURE__*/_react.default.createElement("span", null, "This field is disabled. "), !meridiem && /*#__PURE__*/_react.default.createElement("span", null, "You have not yet selected AM or PM. "), meridiem && /*#__PURE__*/_react.default.createElement("span", null, meridiem, " selected. "), hour && /*#__PURE__*/_react.default.createElement("span", null, hour, " hour selected. "), minutes && /*#__PURE__*/_react.default.createElement("span", null, minutes, " minutes selected. "), !readOnly && /*#__PURE__*/_react.default.createElement("span", null, "To select ", meridiem === 'AM' ? 'PM' : 'AM', ", press the up or down arrow. Press the right arrow to return to the hour selector. Press the left arrow to return to the minutes selector."));
}