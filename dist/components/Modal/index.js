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

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Wrapper to simplify Bootstrap Modal injection
 *
 * This implementation is to help avoid developers writing their own
 * React Portals for rendering modals. It does nothing for rendering
 * the interior of the modal, simply the outer div and state management.
 *
 * Bootstrap's modal jQuery options can be passed in as React props.
 * For the complete list see https://getbootstrap.com/docs/4.0/components/modal/#options
 * 
 * Bootstrap modal modifier classes (such as .modal-dialog-centered and 
 * .modal-sm) and custom wrapping classes can also be passed in using the 
 * **className** prop. Note that the classes are added to the
 * '.modal-dialog' element and not the outermost '.modal' element.
 * 

 * This more-or-less follows the pattern at https://reactjs.org/docs/portals.html
 */
var Modal = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Modal);
    _this = _super.call(this, props);
    _this.el = document.createElement('div');
    _this.ref = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.appendChild(this.el);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.el);
    }
    /**
     * Activates and displays the modal
     *
     * @public
     */

  }, {
    key: "show",
    value: function show() {
      window.$(this.ref.current).modal(this.props);
    }
    /**
     * Hides the modal from the end user
     *
     * @public
     */

  }, {
    key: "hide",
    value: function hide() {
      // TODO: Destroy instead? It might be more react-friendly
      // to fully reconstruct the modal content after a toggle?
      window.$(this.ref.current).modal('hide');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
        className: "modal fade",
        tabIndex: "-1",
        role: "dialog",
        "aria-hidden": "true",
        ref: this.ref
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "modal-dialog" + (this.props.className ? " " + this.props.className : ''),
        role: "document"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "modal-content"
      }, this.props.children))), this.el);
    }
  }]);
  return Modal;
}(_react.default.Component);

Modal.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.object])
};
var _default = Modal;
exports.default = _default;