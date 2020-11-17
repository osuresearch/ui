"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMeridiemValue = getMeridiemValue;

function getMeridiemValue(value) {
  if (typeof value === 'undefined' || !value.length) {
    return '';
  }

  var parts = value.split(':').map(Number);
  return parts[0] < 12 ? 'AM' : 'PM';
}