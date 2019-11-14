"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Wrapper to simplify Bootstrap Modal injection
 *
 * This implementation is to help avoid developers writing their own
 * React Portals for rendering modals. It does nothing for rendering
 * the interior of the modal, simply the outer div and state management.
 *
 * Bootstrap's modal jQuery options can be passed in as React props.
 * For the complete list see https://getbootstrap.com/docs/4.0/components/modal/#options

 * This more-or-less follows the pattern at https://reactjs.org/docs/portals.html
 */
var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Modal, _React$Component);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Modal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Modal).call(this, props));
    _this.el = document.createElement('div');
    _this.ref = _react.default.createRef();
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
      return _reactDom.default.createPortal(_react.default.createElement("div", {
        className: "modal fade",
        tabIndex: "-1",
        role: "dialog",
        "aria-hidden": "true",
        ref: this.ref
      }, _react.default.createElement("div", {
        class: "modal-dialog",
        role: "document"
      }, _react.default.createElement("div", {
        class: "modal-content"
      }, this.props.children))), this.el);
    }
  }]);
  return Modal;
}(_react.default.Component);

Modal.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.object])
};
var _default = Modal;
exports.default = _default;