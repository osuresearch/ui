"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SRDescriptions;

var _react = _interopRequireDefault(require("react"));

function SRDescriptions(_ref) {
  var id = _ref.id,
      readOnly = _ref.readOnly,
      hour = _ref.hour,
      minutes = _ref.minutes,
      meridiem = _ref.meridiem;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: 'hours-description-' + id,
    className: "sr-only"
  }, readOnly && /*#__PURE__*/_react.default.createElement("span", null, "This field is disabled. "), !hour && /*#__PURE__*/_react.default.createElement("span", null, "You have not yet selected an hour. "), hour && /*#__PURE__*/_react.default.createElement("span", null, hour, " hour selected. "), minutes && /*#__PURE__*/_react.default.createElement("span", null, minutes, " minutes selected. "), meridiem && /*#__PURE__*/_react.default.createElement("span", null, meridiem, " selected. "), !readOnly && /*#__PURE__*/_react.default.createElement("span", null, "To increment the hour, press the up arrow. To decrement, press the down arrow. Tab or press the right arrow to move to the minutes selector.")), /*#__PURE__*/_react.default.createElement("div", {
    id: 'minutes-description-' + id,
    className: "sr-only"
  }, readOnly && /*#__PURE__*/_react.default.createElement("span", null, "This field is disabled. "), !minutes && /*#__PURE__*/_react.default.createElement("span", null, "You have not yet selected minutes. "), minutes && /*#__PURE__*/_react.default.createElement("span", null, minutes, " minutes selected. "), hour && /*#__PURE__*/_react.default.createElement("span", null, hour, " hour selected. "), meridiem && /*#__PURE__*/_react.default.createElement("span", null, meridiem, " selected. "), !readOnly && /*#__PURE__*/_react.default.createElement("span", null, "To increment the minutes, press the up arrow. To decrement, press the down arrow. Tab or press the right arrow to move to the AM/PM selector. Press the left arrow to move to the hour selector.")), /*#__PURE__*/_react.default.createElement("div", {
    id: 'meridiem-description-' + id,
    className: "sr-only"
  }, readOnly && /*#__PURE__*/_react.default.createElement("span", null, "This field is disabled. "), !meridiem && /*#__PURE__*/_react.default.createElement("span", null, "You have not yet selected AM or PM. "), meridiem && /*#__PURE__*/_react.default.createElement("span", null, meridiem, " selected. "), hour && /*#__PURE__*/_react.default.createElement("span", null, hour, " hour selected. "), minutes && /*#__PURE__*/_react.default.createElement("span", null, minutes, " minutes selected. "), !readOnly && /*#__PURE__*/_react.default.createElement("span", null, "To select ", meridiem === 'AM' ? 'PM' : 'AM', ", press the up or down arrow. Press the right arrow to return to the hour selector. Press the left arrow to return to the minutes selector.")));
}