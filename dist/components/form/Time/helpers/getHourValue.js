"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHourValue = getHourValue;

var _ = require(".");

function getHourValue(value) {
  if (typeof value === 'undefined' || !value.length) {
    return '';
  }

  var hour = value.split(':').map(Number)[0];
  return (0, _.addLeadingZero)((hour > 12 ? hour - 12 : hour === 0 ? 12 : hour).toString());
}