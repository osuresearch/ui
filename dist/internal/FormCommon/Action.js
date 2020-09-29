"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Collection of callables that are used as event delegate listeners
 * (your typical pub/sub pattern)
 */
var Action = /*#__PURE__*/function () {
  function Action() {
    (0, _classCallCheck2.default)(this, Action);
    (0, _defineProperty2.default)(this, "delegates", void 0);
    this.delegates = [];
  }

  (0, _createClass2.default)(Action, [{
    key: "add",
    value: function add(delegate) {
      if (this.delegates.indexOf(delegate) < 0) {
        this.delegates.push(delegate);
      }
    }
  }, {
    key: "remove",
    value: function remove(delegate) {
      this.delegates = this.delegates.filter(function (d) {
        return d !== delegate;
      });
    }
  }, {
    key: "dispatch",
    value: function dispatch() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.delegates.forEach(function (delegate) {
        return delegate.apply(void 0, args);
      });
    }
  }, {
    key: "length",
    get: function get() {
      return this.delegates.length;
    }
  }]);
  return Action;
}();

var BaseAction = /*#__PURE__*/function () {
  function BaseAction() {
    (0, _classCallCheck2.default)(this, BaseAction);
    (0, _defineProperty2.default)(this, "delegates", void 0);
    this.delegates = [];
  }

  (0, _createClass2.default)(BaseAction, [{
    key: "add",
    value: function add(delegate) {
      if (this.delegates.indexOf(delegate) < 0) {
        this.delegates.push(delegate);
      }
    }
  }, {
    key: "remove",
    value: function remove(delegate) {
      this.delegates = this.delegates.filter(function (d) {
        return d !== delegate;
      });
    }
  }, {
    key: "length",
    get: function get() {
      return this.delegates.length;
    }
  }]);
  return BaseAction;
}();

var Action1 = /*#__PURE__*/function (_BaseAction) {
  (0, _inherits2.default)(Action1, _BaseAction);

  var _super = _createSuper(Action1);

  function Action1() {
    (0, _classCallCheck2.default)(this, Action1);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Action1, [{
    key: "dispatch",
    value: function dispatch(arg) {
      this.delegates.forEach(function (delegate) {
        return delegate(arg);
      });
    }
  }]);
  return Action1;
}(BaseAction); // This sucks. Can't just extend a generic with the same name
// to support `a: Action<float>` and `b: Action<string, float>` like in C#.


var Action2 = /*#__PURE__*/function (_BaseAction2) {
  (0, _inherits2.default)(Action2, _BaseAction2);

  var _super2 = _createSuper(Action2);

  function Action2() {
    (0, _classCallCheck2.default)(this, Action2);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2.default)(Action2, [{
    key: "dispatch",
    value: function dispatch(arg, arg2) {
      this.delegates.forEach(function (delegate) {
        return delegate(arg, arg2);
      });
    }
  }]);
  return Action2;
}(BaseAction);

var _default = Action;
exports.default = _default;