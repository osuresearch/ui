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
 * TreeTable is used to display hierarchical data in tabular format. It supports filtering, sorting, selection, reordering, and much more.
 * 
 * TreeTable is part of the PrimeReact package, which is included in ORIS/UI. 
 * 
 * Its features are too extensive to document here, so be sure to [review the documentation at the PrimeReact demo website](https://www.primefaces.org/primereact/showcase/#/treetable).
 */
var TreeTable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TreeTable, _React$Component);

  var _super = _createSuper(TreeTable);

  function TreeTable() {
    (0, _classCallCheck2.default)(this, TreeTable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TreeTable, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return TreeTable;
}(_react.default.Component);

(0, _defineProperty2.default)(TreeTable, "componentPathLine", "import { TreeTable } from 'primereact/treetable'");
var _default = TreeTable;
exports.default = _default;