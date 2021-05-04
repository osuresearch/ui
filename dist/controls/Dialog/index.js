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
 * Dialog is a container to display content in an overlay window.
 * 
 * Dialog is part of the PrimeReact package, which is included in ORIS/UI. **Dialog is a replacement for the `Modal` component from previous versions of ORIS/UI.**
 * 
 * Its features are too extensive to document here, so be sure to [review the documentation at the PrimeReact demo website](https://www.primefaces.org/primereact/showcase/#/dialog).
 */
var Dialog = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog() {
    (0, _classCallCheck2.default)(this, Dialog);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Dialog, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Dialog;
}(_react.default.Component);

(0, _defineProperty2.default)(Dialog, "componentPathLine", "import { Dialog } from 'primereact/dialog';");
var _default = Dialog;
exports.default = _default;