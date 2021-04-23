"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
    key: "length",
    get: function get() {
      return this.delegates.length;
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
}(); // class Action1<T> extends BaseAction<(arg: T) => void> {
//     public dispatch(arg: T): void {
//         this.delegates.forEach(
//             (delegate) => delegate(arg)
//         );
//     }
// }
// // This sucks. Can't just extend a generic with the same name
// // to support `a: Action<float>` and `b: Action<string, float>` like in C#.
// class Action2<T, U> extends BaseAction<(arg: T, arg2: U) => void> {
//     public dispatch(arg: T, arg2: U): void {
//         this.delegates.forEach(
//             (delegate) => delegate(arg, arg2)
//         );
//     }
// }


var _default = Action;
exports.default = _default;