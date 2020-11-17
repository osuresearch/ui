"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLeadingZero = addLeadingZero;

function addLeadingZero(value) {
  return value.length === 1 ? "0" + value : value;
}