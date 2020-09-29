"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _HamburgerButtonElement = _interopRequireDefault(require("./HamburgerButtonElement"));

/**
 * Render a list of `Section` as document anchor links
 */
var TableOfContentsElement = /*#__PURE__*/function () {
  function TableOfContentsElement(document, sections) {
    var _document$defaultView;

    (0, _classCallCheck2.default)(this, TableOfContentsElement);
    (0, _defineProperty2.default)(this, "container", void 0);
    (0, _defineProperty2.default)(this, "hamburger", void 0);
    var windowInnerWidth = ((_document$defaultView = document.defaultView) === null || _document$defaultView === void 0 ? void 0 : _document$defaultView.innerWidth) || 9999;
    var startCollapsed = windowInnerWidth < 1200;
    var container = document.createElement('div');
    container.classList.add('comments-toc');
    document.body.prepend(container);
    this.container = container; // TODO: Anchors for each section -> #section.id

    var liHtml = '';
    sections.forEach(function (section) {
      liHtml += "\n                <li class=\"comments-section comments-section-level-".concat(section.level, "\">\n                    <a href=\"#").concat(section.el.id, "\">").concat(section.title, "</a>\n                </li>\n            ");
    });
    container.innerHTML = "\n            <div class=\"comments-toc-wrapper\">\n                <div class=\"comments-toc-scrollbox\">\n                    <ul class=\"comments-toc-sections\">\n                        ".concat(liHtml, "\n                    </ul>\n                </div>\n                <div class=\"comments-toc-fade\"></div>\n            </div>\n        "); // Mmmm, hamburgers

    var hamburger = new _HamburgerButtonElement.default(document);
    hamburger.onOpen = this.onOpen.bind(this);
    hamburger.onClose = this.onClose.bind(this);
    container.prepend(hamburger.el);
    this.hamburger = hamburger;

    if (startCollapsed) {
      // Closing the hamburger will propagate to the onClose event handler
      hamburger.isOpen = false;
    }
  }

  (0, _createClass2.default)(TableOfContentsElement, [{
    key: "onOpen",
    value: function onOpen() {
      this.container.classList.remove('is-collapsed');
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.container.classList.add('is-collapsed');
    }
  }, {
    key: "remove",
    value: function remove() {
      this.hamburger.remove();
      this.container.remove();
    }
  }]);
  return TableOfContentsElement;
}();

exports.default = TableOfContentsElement;