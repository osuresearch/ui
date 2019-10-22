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

/**
 * A simple themed button
 */
var Button =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Button, _React$Component);

  function Button() {
    (0, _classCallCheck2.default)(this, Button);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
  }

  (0, _createClass2.default)(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          small = _this$props.small,
          onClick = _this$props.onClick;
      var classNames = 'btn btn-' + theme;

      if (small) {
        classNames += ' btn-sm';
      }

      return _react.default.createElement("button", {
        type: "button",
        className: classNames,
        onClick: onClick
      }, children);
    }
  }]);
  return Button;
}(_react.default.Component);

Button.propTypes = {
  /**
   * The content of the button label
   */
  children: _propTypes.default.any,

  /**
   * The Bootstrap theme to apply to the button
   */
  theme: _propTypes.default.string.isRequired,

  /**
   * Should the button be rendered smaller. Useful for inlining buttons into tables.
   */
  small: _propTypes.default.bool.isRequired,

  /**
   * Callable for when the button is clicked
   */
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  theme: 'primary',
  small: false
};
var _default = Button;
exports.default = _default;