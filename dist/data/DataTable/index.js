"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/** 
 * DataTable displays data in tabular format. It supports filtering, sorting, selection, editing, CSV exports, lazy-loading, and much more.
 * 
 * DataTable is part of the PrimeReact package, which is included in ORIS/UI.
 * 
 * Its features are too extensive to document here, so be sure to [review the documentation at the PrimeReact demo website](https://www.primefaces.org/primereact/showcase/#/datatable).
 */
var DataTable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DataTable, _React$Component);

  var _super = _createSuper(DataTable);

  function DataTable() {
    (0, _classCallCheck2.default)(this, DataTable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DataTable, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return DataTable;
}(_react.default.Component);

(0, _defineProperty2.default)(DataTable, "componentPathLine", "import { DataTable } from 'primereact/datatable'");
var _default = DataTable;
exports.default = _default;