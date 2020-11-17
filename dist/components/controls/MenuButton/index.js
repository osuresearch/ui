"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Context = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _Item = _interopRequireDefault(require("./Menu/Item"));

var Context = /*#__PURE__*/_react.default.createContext({
  id: ''
});

exports.Context = Context;

var MenuButton = function MenuButton(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'down' : _ref$direction;
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      id: id
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "drop".concat(direction, " ").concat(className ? className : '')
  }, children));
};

MenuButton.Button = _Button.default;
MenuButton.Menu = _Menu.default;
MenuButton.Menu.Item = _Item.default;
var _default = MenuButton;
exports.default = _default;