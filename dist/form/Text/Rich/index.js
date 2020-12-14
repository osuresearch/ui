"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _ckeditor4React = _interopRequireDefault(require("ckeditor4-react"));

var _Diff = _interopRequireDefault(require("../Diff"));

// @ts-ignore

/** Full configuration (that we're willing to support) */
var FULL_TOOLBAR_CONFIG = [{
  name: 'styles',
  items: ['Format']
}, {
  name: 'basicstyles',
  items: ['Bold', 'Italic', 'Underline', 'Strike']
}, {
  name: 'paragraph',
  items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
}, {
  name: 'links',
  items: ['Link', 'Unlink']
}, {
  name: 'insert',
  items: ['Table', 'HorizontalRule']
}];
/** Reduced configuration that's just very basic formatting, lists, and links */

var SIMPLE_TOOLBAR_CONFIG = [{
  name: 'basicstyles',
  items: ['Bold', 'Italic', 'Underline', 'Strike']
}, {
  name: 'paragraph',
  items: ['NumberedList', 'BulletedList']
}, {
  name: 'links',
  items: ['Link', 'Unlink']
}];
/**
 * A rich text editor (RTE) based on CKEditor
 * 
 */

var Rich = function Rich(_ref) {
  var onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
      _ref$simple = _ref.simple,
      simple = _ref$simple === void 0 ? false : _ref$simple,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$contentsCss = _ref.contentsCss,
      contentsCss = _ref$contentsCss === void 0 ? 'https://orapps.osu.edu/assets/css/ckeditor/contents.css' : _ref$contentsCss;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      label = _useState2[0],
      setLabel = _useState2[1];

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var value = bind.value || defaultValue;
  (0, _react.useLayoutEffect)(function () {
    var _document$querySelect;

    // @ts-ignore
    var labelText = (_document$querySelect = document.querySelector("label[for=\"".concat(bind.id, "\"]"))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.innerText;

    if (labelText) {
      setLabel(labelText);
    } else if (bind.instructions) {
      setLabel(bind.instructions);
    } else {
      setLabel('Rich Text Editor');
    }
  }, [bind]);

  if (bind.diff) {
    // TODO - This really isn't going to work with HTML
    return /*#__PURE__*/_react.default.createElement(_Diff.default, {
      value: typeof value === 'string' ? value : undefined,
      prevValue: typeof bind.initialValue === 'string' ? bind.initialValue : undefined
    });
  } // Wait to render the editor until a label is set


  if (!label) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "richtext ".concat(className, " ").concat(bind.readOnly ? 'readonly' : '')
  }, /*#__PURE__*/_react.default.createElement(_ckeditor4React.default, {
    data: value,
    config: {
      toolbar: simple ? SIMPLE_TOOLBAR_CONFIG : FULL_TOOLBAR_CONFIG,
      // TODO: Prop to provide extra plugins (e.g. Signet signature captures)
      extraPlugins: '',
      // Disable the body > blockquote > p ... path in the editor footer
      removePlugins: 'elementspath',
      contentsCss: contentsCss,
      title: label
    },
    readOnly: bind.readOnly,
    onChange: function (_onChange) {
      function onChange(_x) {
        return _onChange.apply(this, arguments);
      }

      onChange.toString = function () {
        return _onChange.toString();
      };

      return onChange;
    }(function (e) {
      var newValue = e.editor.getData();
      bind.value = newValue;

      if (onChange) {
        onChange(newValue);
      }
    }),
    onBlur: onBlur
  }));
};

var _default = Rich;
exports.default = _default;