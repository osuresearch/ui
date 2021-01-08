"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

/** Full confiugration (that we're willing to support) */
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
 * Simple preconfigured Richtext editor
 * 
 * @deprecated Use `<Text.Rich>` from `@oris/ui` Form Components. Will be removed in a future version of `@oris/ui`
 * 
 */

function Richtext(_ref) {
  var id = _ref.id,
      onChange = _ref.onChange,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      _ref$simple = _ref.simple,
      simple = _ref$simple === void 0 ? false : _ref$simple,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$contentsCss = _ref.contentsCss,
      contentsCss = _ref$contentsCss === void 0 ? 'https://orapps.osu.edu/assets/css/ckeditor/contents.css' : _ref$contentsCss;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = (0, _slicedToArray2.default)(_useState, 1),
      initialData = _useState2[0];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var editorRef = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    // @ts-ignore 
    var cke = window.CKEDITOR;
    var editor = undefined; // No type info exists for CKE

    if (!cke) {
      // TODO: Error message improvements
      setError('window.CKEDITOR is undefined. Are you missing an external script?');
      return;
    }

    var toolbar = simple ? SIMPLE_TOOLBAR_CONFIG : FULL_TOOLBAR_CONFIG;
    var opts = {
      toolbar: toolbar,
      // TODO: Prop to provide extra plugins (e.g. Signet signature captures)
      extraPlugins: '',
      // Disable the body > blockquote > p ... path in the editor footer
      removePlugins: 'elementspath',
      contentsCss: contentsCss
    };
    editor = cke.replace(editorRef.current, opts);
    editor.setData(initialData);
    editor.on('change', function () {
      if (onChange) {
        onChange(editor.getData());
      }
    });
    return function () {
      if (editor) {
        editor.destroy();
        editor = undefined;
      }
    };
  }, [initialData, simple, contentsCss, onChange]);

  if (error) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "richtext is-error"
    }, error);
  } // TODO: Toggling readOnly isn't super efficient here, since 
  // it'll recreate the editor from scratch. But I don't envision
  // many use cases where we'll be doing that.


  return /*#__PURE__*/_react.default.createElement("div", {
    className: "richtext ".concat(className, " ").concat(readOnly ? 'is-readonly' : '')
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    id: id,
    className: "richtext-editor",
    ref: editorRef,
    disabled: readOnly
  }));
}

;

var _default = /*#__PURE__*/(0, _react.memo)(Richtext);

exports.default = _default;