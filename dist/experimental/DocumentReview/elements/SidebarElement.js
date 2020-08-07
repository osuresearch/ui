"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var SidebarElement = /*#__PURE__*/function () {
  function SidebarElement(document) {
    (0, _classCallCheck2.default)(this, SidebarElement);
    var container = document.createElement('div');
    container.classList.add('comments-sidebar');
    document.body.appendChild(container);
    this.container = container;
  }

  (0, _createClass2.default)(SidebarElement, [{
    key: "remove",
    value: function remove() {
      this.container.remove();
    }
  }]);
  return SidebarElement;
}();

exports.default = SidebarElement;