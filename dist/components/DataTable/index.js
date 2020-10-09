"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _datatable = require("primereact/datatable");

var _Column = _interopRequireDefault(require("./Column"));

var DataTable = function DataTable(props, ref) {
  var localRef = (0, _react.useRef)(null); // Expose PrimeReact DataTable methods to the incoming ref

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      reset: function reset() {
        var _localRef$current;

        localRef === null || localRef === void 0 ? void 0 : (_localRef$current = localRef.current) === null || _localRef$current === void 0 ? void 0 : _localRef$current.reset();
      },
      exportCSV: function exportCSV() {
        var _localRef$current2;

        localRef === null || localRef === void 0 ? void 0 : (_localRef$current2 = localRef.current) === null || _localRef$current2 === void 0 ? void 0 : _localRef$current2.exportCSV();
      },
      filter: function filter(value, field, mode) {
        var _localRef$current3;

        localRef === null || localRef === void 0 ? void 0 : (_localRef$current3 = localRef.current) === null || _localRef$current3 === void 0 ? void 0 : _localRef$current3.filter(value, field, mode);
      },
      resetColumnOrder: function resetColumnOrder() {
        var _localRef$current4;

        localRef === null || localRef === void 0 ? void 0 : (_localRef$current4 = localRef.current) === null || _localRef$current4 === void 0 ? void 0 : _localRef$current4.resetColumnOrder();
      },
      closeEditingCell: function closeEditingCell() {
        var _localRef$current5;

        localRef === null || localRef === void 0 ? void 0 : (_localRef$current5 = localRef.current) === null || _localRef$current5 === void 0 ? void 0 : _localRef$current5.closeEditingCell();
      }
    };
  }, [localRef]);
  return /*#__PURE__*/_react.default.createElement(_datatable.DataTable, (0, _extends2.default)({}, props, {
    ref: localRef
  }), props.children);
};

DataTable.Column = _Column.default;

var _default = /*#__PURE__*/_react.default.forwardRef(DataTable);

exports.default = _default;