"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyMockStringBind = exports.NullFieldBind = exports.FieldBind = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Action = _interopRequireDefault(require("./Action"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Generic concrete implementation of IFieldBind.
 * 
 * Manages delegates for state and value change events and safely
 * fields with appropriate read/write accessors. 
 */
var FieldBind = /*#__PURE__*/function () {
  function FieldBind() {
    (0, _classCallCheck2.default)(this, FieldBind);
    (0, _defineProperty2.default)(this, "id", void 0);
    (0, _defineProperty2.default)(this, "name", void 0);
    (0, _defineProperty2.default)(this, "instructions", void 0);
    (0, _defineProperty2.default)(this, "help", void 0);
    (0, _defineProperty2.default)(this, "_error", '');
    (0, _defineProperty2.default)(this, "_success", '');
    (0, _defineProperty2.default)(this, "_readOnly", false);
    (0, _defineProperty2.default)(this, "_diff", false);
    (0, _defineProperty2.default)(this, "_required", false);
    (0, _defineProperty2.default)(this, "_controlled", false);
    (0, _defineProperty2.default)(this, "_value", null);
    (0, _defineProperty2.default)(this, "_previousValue", null);
    (0, _defineProperty2.default)(this, "onValueChange", new _Action.default());
    (0, _defineProperty2.default)(this, "onStateChange", new _Action.default());
  }

  (0, _createClass2.default)(FieldBind, [{
    key: "error",
    get:
    /** Validation error. */
    function get() {
      return this._error;
    }
    /** On update, notify all onStateChange delegates */
    ,
    set: function set(value) {
      this._error = value;
      this.onStateChange.dispatch(this);
    }
    /** Validation success */

  }, {
    key: "success",
    get: function get() {
      return this._success;
    }
    /** On update, notify all onStateChange delegates */
    ,
    set: function set(value) {
      this._success = value;
      this.onStateChange.dispatch(this);
    }
    /** Should the field be loaded as read-only. */

  }, {
    key: "readOnly",
    get: function get() {
      return this._readOnly;
    }
    /** On update, notify all onStateChange delegates */
    ,
    set: function set(value) {
      this._readOnly = value;
      this.onStateChange.dispatch(this);
    }
    /** Should the field be displayed as a diff. */

  }, {
    key: "diff",
    get: function get() {
      return this._diff;
    }
    /** On update, notify all onStateChange delegates */
    ,
    set: function set(value) {
      this._diff = value;
      this.onStateChange.dispatch(this);
    }
    /** Should the field be required */

  }, {
    key: "required",
    get: function get() {
      return this._required;
    }
    /** On update, notify all onStateChange delegates */
    ,
    set: function set(value) {
      this._required = value;
      this.onStateChange.dispatch(this);
    }
    /** Should the field be controlled */

  }, {
    key: "controlled",
    get: function get() {
      return this._controlled;
    }
    /** On update, notify all onStateChange delegates */
    ,
    set: function set(value) {
      this._controlled = value;
      this.onStateChange.dispatch(this);
    }
    /** The backing value for the field. */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
    /**On update, track previous value and notify all onChange delegates */
    ,
    set: function set(value) {
      this._previousValue = this._value;
      this._value = value;
      console.debug('set value', this);
      this.onValueChange.dispatch(value, this._previousValue, this);
    }
  }]);
  return FieldBind;
}();
/**
 * Null object pattern for field binds
 */


exports.FieldBind = FieldBind;

var NullFieldBind = /*#__PURE__*/function (_FieldBind) {
  (0, _inherits2.default)(NullFieldBind, _FieldBind);

  var _super = _createSuper(NullFieldBind);

  function NullFieldBind() {
    (0, _classCallCheck2.default)(this, NullFieldBind);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(NullFieldBind, [{
    key: "value",
    get: function get() {
      throw new Error('Cannot get value of NullFieldBind. This indicates improper usage of this placeholder class instance.');
    },
    set: function set(newValue) {
      throw new Error('Cannot set value of NullFieldBind. This indicates improper usage of this placeholder class instance.');
    }
  }]);
  return NullFieldBind;
}(FieldBind);

exports.NullFieldBind = NullFieldBind;

/**
 * Mock implementation of a stricter bind (e.g. data that comes from a backend API). 
 * Used for the readme.md examples since we can't write Typescript in examples
 */
var MyMockStringBind = /*#__PURE__*/function (_FieldBind2) {
  (0, _inherits2.default)(MyMockStringBind, _FieldBind2);

  var _super2 = _createSuper(MyMockStringBind);

  function MyMockStringBind(name, value) {
    var _this;

    (0, _classCallCheck2.default)(this, MyMockStringBind);
    _this = _super2.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "id", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "name", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "instructions", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "help", void 0);
    _this.id = name;
    _this.name = name;
    _this.instructions = 'Mock instructions constant';
    _this.help = 'Mock help constant';
    _this._value = value;
    return _this;
  }

  return MyMockStringBind;
}(FieldBind);

exports.MyMockStringBind = MyMockStringBind;