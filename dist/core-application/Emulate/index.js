"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@ORIS/ui");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Modal to change emulation of users within the application.
 *
 * Renders itself as a link to open the modal. Once emulation has
 * changed, the entire application will be refreshed to load
 * under the new emulated user.
 *
 * @deprecated Use `@ORIS/auth`. Will be removed in a future version of `@ORIS/ui`
 */
var Emulate = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Emulate, _React$Component);

  var _super = _createSuper(Emulate);

  function Emulate(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Emulate);
    _this = _super.call(this, props);
    _this.modal = /*#__PURE__*/_react.default.createRef();
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.onEmulate = _this.onEmulate.bind((0, _assertThisInitialized2.default)(_this));
    _this.onReset = _this.onReset.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      localStorage: JSON.parse(window.localStorage.getItem(props.localStorageKey)) || []
    };
    return _this;
  }
  /**
   * Display the modal on button click
   */


  (0, _createClass2.default)(Emulate, [{
    key: "onClick",
    value: function onClick() {
      this.modal.current.show();
    }
    /**
     * Reset emulation action.
     *
     * Submits an emulation DELETE request and refreshes the current page.
     */

  }, {
    key: "onReset",
    value: function onReset(e) {
      fetch(this.props.endpoint, {
        method: 'DELETE'
      }).then(function () {
        return window.location.reload();
      });
    }
    /**
     * Submit emulation for an individual, by ID
     *
     * After success, this will reload the current page.
     *
     * @param {string} id OSU ID
     * @param {string} name Display name
     */

  }, {
    key: "emulate",
    value: function emulate(id, name) {
      this.addToHistory(id, name);
      fetch(this.props.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
        }),
        cache: 'no-cache',
        redirect: 'follow',
        credentials: 'same-origin'
      }).then(function () {
        return window.location.reload();
      });
    }
    /**
     * Add a user to our emulation history in local storage
     *
     * @param {string} id OSU ID
     * @param {string} name Display name
     */

  }, {
    key: "addToHistory",
    value: function addToHistory(id, name) {
      var localStorage = this.state.localStorage;
      var matches = localStorage.filter(function (item) {
        return item.id === id;
      }); // If they're already in recent history, do nothing

      if (matches.length) {
        return;
      } // Insert the new person into local storage


      localStorage.push({
        id: id,
        name: name
      }); // Only show the last N individuals emulated

      if (localStorage.length > 4) {
        localStorage.shift();
      }

      window.localStorage.setItem(this.props.localStorageKey, JSON.stringify(localStorage));
      this.setState({
        localStorage: localStorage
      });
    }
    /**
     * Change event callback for the Lookup component
     *
     * @param {SyntheticEvent} e
     */

  }, {
    key: "onEmulate",
    value: function onEmulate(e) {
      var person = e.target.value;
      console.log(person);

      if (person.key !== null) {
        this.emulate(person.key, person.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Modal, {
        ref: this.modal
      }, /*#__PURE__*/_react.default.createElement(_ui.ModalHeader, {
        hasCloseButton: true
      }, "Emulate User"), /*#__PURE__*/_react.default.createElement(_ui.ModalBody, null, /*#__PURE__*/_react.default.createElement(_ui.Search, {
        name: "emulate-user-lookup",
        endpoint: this.props.lookupEndpoint,
        hasClearButton: false,
        onChange: this.onEmulate,
        resultComponent: _ui.PersonSearchResult
      }), this.props.isEmulating && /*#__PURE__*/_react.default.createElement("small", {
        className: "form-text"
      }, "Currently emulating ", /*#__PURE__*/_react.default.createElement("strong", null, this.props.username, ". "), /*#__PURE__*/_react.default.createElement("button", {
        className: "btn-link",
        onClick: this.onReset
      }, "Click to clear emulation.")), /*#__PURE__*/_react.default.createElement("div", {
        className: "emulate-history"
      }, this.state.localStorage.map(function (item) {
        return /*#__PURE__*/_react.default.createElement("span", {
          key: item.id
        }, " ", /*#__PURE__*/_react.default.createElement("a", {
          href: "#",
          className: "badge badge-secondary",
          onClick: function onClick() {
            return _this2.emulate(item.id, item.name);
          }
        }, item.name));
      })))), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: this.props.className,
        onClick: this.onClick
      }, "Emulate"));
    }
  }]);
  return Emulate;
}(_react.default.Component);

Emulate.propTypes = {
  /**
   * Custom className to apply to the rendered `<button>` element.
   *
   * Useful for buttons that should be displayed in dropdowns
   * versus displayed on a page with a particular color
   */
  className: _propTypes.default.string,

  /**
   * Endpoint for emulation POST/DELETE requests (absolute url)
   */
  endpoint: _propTypes.default.string.isRequired,

  /**
   * API endpoint for user lookups (absolute url)
   *
   * Must work from a `<Search>` component using `<PersonSearchResult>` for results.
   */
  lookupEndpoint: _propTypes.default.string.isRequired,

  /**
   * True if we're emulating a user on the current session
   */
  isEmulating: _propTypes.default.bool.isRequired,

  /**
   * Individual we're currently emulating
   */
  username: _propTypes.default.string,

  /**
   * Key used for emulation history in Local Storage
   */
  localStorageKey: _propTypes.default.string.isRequired
};
Emulate.defaultProps = {
  lookupEndpoint: 'https://orapps.osu.edu/api/v1/person',
  isEmulating: false,
  username: null,
  className: 'btn btn-danger',
  localStorageKey: 'emulate-history'
};
var _default = Emulate;
exports.default = _default;