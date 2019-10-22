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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = _interopRequireDefault(require("./Modal"));

/**
 * Watches for user actions on the page and creates an inactivity popup
 * when the user has been detected as inactive, and optionally logs them
 * out of Shibboleth automatically.
 *
 * Usage:
 * ```jsx
 *      <InactivityMonitor timeout={300} hidePage={false} logout={false} />
 * ```
 */
var InactivityMonitor =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(InactivityMonitor, _React$Component);

  function InactivityMonitor(props) {
    var _this;

    (0, _classCallCheck2.default)(this, InactivityMonitor);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InactivityMonitor).call(this, props));
    _this.state = {// TBD
    };
    return _this;
  }

  (0, _createClass2.default)(InactivityMonitor, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Modal.default, {
        ref: this.modal,
        className: "inactivity-monitor",
        keyboard: false,
        backdrop: "static"
      }, _react.default.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, _react.default.createElement("div", {
        className: "modal-content"
      }, _react.default.createElement("div", {
        className: "modal-body"
      }, _react.default.createElement("p", null, "Message here.")), _react.default.createElement("div", {
        className: "modal-footer"
      }, _react.default.createElement("button", {
        type: "button",
        className: "btn btn-success",
        onClick: this.reset
      }, "Continue")))));
    }
  }]);
  return InactivityMonitor;
}(_react.default.Component);

InactivityMonitor.propTypes = {
  /**
   * How long the user can be inactive until we bring up the
   * warning modal (in seconds)
   */
  timeout: _propTypes.default.number.isRequired,

  /**
   * If true, the contents of the page will be hidden once
   * the inactive warning modal is displayed
   */
  hidePage: _propTypes.default.bool.isRequired,

  /**
   * If true, the user will be forcibly logged out once the
   * inactivity timeout is reached, instead of displaying
   * the warning modal.
   */
  logout: _propTypes.default.bool.isRequired
};
InactivityMonitor.defaultProps = {
  timeout: 300,
  // 5min
  hidePage: false,
  logout: false
};
var _default = InactivityMonitor;
exports.default = _default;