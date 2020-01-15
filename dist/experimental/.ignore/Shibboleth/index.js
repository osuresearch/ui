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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = _interopRequireDefault(require("../../components/Modal"));

var _ModalBody = _interopRequireDefault(require("../../components/ModalBody"));

/*
    Language references:
    https://i.stack.imgur.com/KCged.png


*/

/**
 * Shibboleth state monitor
 */
var Shibboleth =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Shibboleth, _React$Component);

  function Shibboleth(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Shibboleth);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Shibboleth).call(this, props));
    _this.state = {
      pendingLogin: false,
      loginWindowRef: null
    };
    _this.modalOpen = false;
    _this.modal = _react.default.createRef();
    _this.ping = _this.ping.bind((0, _assertThisInitialized2.default)(_this));
    _this.openLoginWindow = _this.openLoginWindow.bind((0, _assertThisInitialized2.default)(_this));
    _this.onPingSuccess = _this.onPingSuccess.bind((0, _assertThisInitialized2.default)(_this));
    _this.onPingError = _this.onPingError.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  /**
   * On mount, start pinging for Shibboleth status
   */


  (0, _createClass2.default)(Shibboleth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.start(this.props.backgroundPing);
    }
    /**
     * Start sending pings for Shibboleth status
     *
     * @param {number} interval Ping interval, in seconds
     */

  }, {
    key: "start",
    value: function start(interval) {
      this.stop();
      this.interval = window.setInterval(this.ping, interval * 1000);
    }
    /**
     * Stop sending pings for Shibboleth status
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this.interval) {
        window.clearInterval(this.interval);
      }

      this.interval = null;
    }
    /**
     * Ping the endpoint for a valid response.
     *
     * If Shibboleth is timed out, it'll attempt a 302 redirect.
     * Since the redirect is made to a different domain (webauth.service...)
     * a preflight CORS request is sent. Shibb doesn't respond to CORS,
     * so it fails, and we get back a failed AJAX response.
     *
     * Note that it is impossible to identify CORS redirect failure versus
     * any other server failure on our end due to browser security. See:
     *      https://stackoverflow.com/a/19325710
     *      https://stackoverflow.com/a/6734427
     */

  }, {
    key: "ping",
    value: function ping() {
      var _this2 = this;

      fetch(this.props.endpoint, {
        method: 'HEAD',
        cache: 'no-cache',
        redirect: 'follow',
        credentials: 'same-origin'
      }).then(function (res) {
        if (res.ok) {
          _this2.onPingSuccess();
        } else {
          _this2.onPingError();
        }
      }).catch(this.onPingError);
    }
    /**
     * Shibboleth ping error.
     *
     * We're logged out and can't make any additional AJAX calls or form POSTs
     * without a session refresh. Lock the user out of the application by opening
     * up the login modal and reset our ping interval to the faster active version
     */

  }, {
    key: "onPingError",
    value: function onPingError() {
      var _this$state = this.state,
          pendingLogin = _this$state.pendingLogin,
          loginWindowRef = _this$state.loginWindowRef; // Still waiting? Keep modal open.

      if (pendingLogin) {
        // If the window handle was closed, fire off an event
        if (loginWindowRef && loginWindowRef.closed) {
          this.onCloseLoginWindow();
        }

        return;
      } // Prompt the user for login


      this.modal.current.show();
      this.setState({
        pendingLogin: true
      }); // Restart pings using active interval time

      this.start(this.props.loginPing);
    }
    /**
     * Shibboleth ping success.
     *
     * If this is a background ping, this method does nothing.
     *
     * If the login modal is open, this will close the modal and restart
     * the ping interval to the slower background version.
     */

  }, {
    key: "onPingSuccess",
    value: function onPingSuccess() {
      // Background success, don't need to do anything else
      if (!this.state.pendingLogin) {
        return;
      } // If this was a successful ping with the prompt open close the modal
      // and let the user go back to what they were doing


      this.modal.current.hide();
      this.setState({
        pendingLogin: false
      }); // Restart pings using background interval time

      this.start(this.props.backgroundPing);
    }
    /**
     * Open a new window/tab to get the user to refresh their login
     */

  }, {
    key: "openLoginWindow",
    value: function openLoginWindow() {
      var loginWindowRef = this.state.loginWindowRef;

      if (!loginWindowRef || loginWindowRef.closed) {
        loginWindowRef = window.open(this.props.endpoint, 'Login', 'width=800,height=600');
      } else {
        // Window is already open, focus it
        loginWindowRef.focus();
      }

      this.setState({
        loginWindowRef: loginWindowRef
      });
    }
    /**
     * User closed the login window before we confirmed our login status.
     *
     * We assume the user has logged in before they close it (because typically
     * the window will ask them to close the window after they've logged in) so
     * we ping immediately to verify.
     */

  }, {
    key: "onCloseLoginWindow",
    value: function onCloseLoginWindow() {
      this.setState({
        loginWindowRef: null
      });
      this.ping();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_Modal.default, {
        ref: this.modal,
        keyboard: false,
        backdrop: "static"
      }, _react.default.createElement(_ModalBody.default, null, _react.default.createElement("p", null, "Your login session has expired. To avoid losing work, click the button below to log back in. Session expired, click the button below to login again."), _react.default.createElement("p", null, "This window will close automatically after you have logged in.")), _react.default.createElement("div", {
        className: "modal-footer"
      }, this.state.loginWindowRef && _react.default.createElement(Button, {
        theme: "success",
        onClick: this.openLoginWindow
      }, _react.default.createElement(Icon, {
        name: "spinner",
        spin: true
      }), " Waiting for login..."), !this.state.loginWindowRef && _react.default.createElement(Button, {
        theme: "success",
        onClick: this.openLoginWindow
      }, "Login")));
    }
  }]);
  return Shibboleth;
}(_react.default.Component);

Shibboleth.propTypes = {
  /**
   * API endpoint to query for login status
   */
  endpoint: _propTypes.default.string.isRequired,

  /**
   * Frequency (in seconds) to ping the status endpoint
   */
  backgroundPing: _propTypes.default.number.isRequired,

  /**
   * Frequency (in seconds) to ping the status endpoint while the login
   * modal is open and waiting for the user to finish the login flow.
   */
  loginPing: _propTypes.default.number.isRequired // Two below settings are TBD - waiting for a dev meeting

  /**
   * How long the user can be inactive until we
   */
  // inactivityTimeout: PropTypes.number.isRequired,

  /**
   * Whether the user should be forcibly logged out after the inactivity timeout.
   */
  // inactiveLogout: PropTypes.bool.isRequired

};
Shibboleth.defaultProps = {
  backgroundPing: 300,
  loginPing: 5
};
var _default = Shibboleth;
exports.default = _default;