"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMinuteValue = getMinuteValue;

var _ = require(".");

function getMinuteValue(value) {
  if (typeof value === 'undefined' || !value.length) {
    return '';
  }

  var parts = value.split(':').map(Number);
  return (0, _.addLeadingZero)(parts[1].toString());
}