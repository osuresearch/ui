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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/** 
 * Accordion groups a collection of contents in tabs.
 * 
 * Accordion is part of the PrimeReact package, which is included in ORIS/UI. 
 * 
 * [Review the full documentation at the PrimeReact demo website](https://www.primefaces.org/primereact/showcase/#/accordion).
 */
var Accordion = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Accordion, _React$Component);

  var _super = _createSuper(Accordion);

  function Accordion() {
    (0, _classCallCheck2.default)(this, Accordion);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Accordion, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Accordion;
}(_react.default.Component);

(0, _defineProperty2.default)(Accordion, "componentPathLine", "import { Accordion, AccordionTab } from 'primereact/accordion'");
var _default = Accordion;
exports.default = _default;