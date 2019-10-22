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
 * Red server-wide alert banner. May appear for network issues,
 * planned outages, buckeye alerts, etc.
 */
var AppAlert =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(AppAlert, _React$Component);

  function AppAlert(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AppAlert);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AppAlert).call(this, props));
    _this.state = {
      message: null
    };
    return _this;
  }
  /**
   * Load the alert contents from the endpoint on mount
   */


  (0, _createClass2.default)(AppAlert, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch(this.props.endpoint, {
        cache: 'no-cache',
        redirect: 'follow',
        credentials: 'same-origin'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this2.setState({
          message: res.data
        });
      }).catch(function () {
        return _this2.setState({
          message: 'Could not communicate with the alerting API'
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.message) {
        return null;
      }

      return _react.default.createElement("div", {
        className: "application-alert"
      }, this.state.message, ". Contact the ", _react.default.createElement("a", {
        href: "https://orhelp.osu.edu",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "OR Help Desk"), " for more information.");
    }
  }]);
  return AppAlert;
}(_react.default.Component);

AppAlert.propTypes = {
  /**
   * API endpoint to query for alerts
   */
  endpoint: _propTypes.default.string.isRequired
};
var _default = AppAlert;
exports.default = _default;