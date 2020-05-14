"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

// CKEditor 5 Toolbar configurations.
// We can't use the default because it includes plugins that we don't support (e.g. image uploads)
// The full list of available toolbar items comes from running `editor.ui.componentFactory.names()`
var DEFAULT_TOOLBAR_ITEMS = ["|", "heading", "|", "fontfamily", "fontsize", "fontColor", "fontBackgroundColor", "|", "bold", "italic", "underline", "strikethrough", "|", "alignment", "|", "numberedList", "bulletedList", "|", "indent", "outdent", "|", "link", "blockquote",
/*"imageUpload",*/
"insertTable", "mediaEmbed"
/* "|", "undo", "redo" */
];
/**
 * Simple preconfigured Richtext editor
 */

var Richtext = function Richtext(_ref) {
  var _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      onChange = _ref.onChange,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = (0, _slicedToArray2.default)(_useState, 1),
      initialData = _useState2[0];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var editorRef = (0, _react.useRef)(null);
  var toolbarRef = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    // @ts-ignore 
    var cke = window.DecoupledEditor;
    var editor = undefined; // No type info exists for CKE

    if (!cke) {
      // TODO: Error message improvements
      setError('window.DecoupledEditor is undefined. Are you missing a dependency?');
      return;
    } // https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html


    var opts = {
      initialData: initialData,
      toolbar: {
        items: DEFAULT_TOOLBAR_ITEMS
      } // TODO: Disable the "Insert Image" plugin entirely, we're not supporting it.
      // All of the below didn't work so far. Only thing I found to work 
      // is to completely replace the full toolbar.
      // removePlugins: [ 'ckfinder', 'imageUpload', 'imageInsert' ],
      // imageEditing: {
      //     isEnabled: false
      // }

    };
    cke.create(editorRef.current, opts).then(function (instance) {
      editor = instance;
      editor.isReadOnly = readOnly; // Bind CKE's change event to our own onChange

      editor.model.document.on('change:data', function () {
        if (onChange) {
          onChange(editor.getData());
        }
      }); // Setup toolbar DOM

      if (toolbarRef.current) {
        toolbarRef.current.innerHTML = '';

        if (!readOnly) {
          toolbarRef.current.appendChild(editor.ui.view.toolbar.element);
        }
      }
    }).catch(function (err) {
      console.error('CKEditor Load Error', err);
      setError('Failed to load CKEditor. Check Console for additional information');
    });
    return function () {
      if (editor) {
        editor.destroy().catch(function (err) {
          console.error('CKEditor Unload Error', err);
        });
      }
    };
  }, [initialData, readOnly, onChange]); // TODO: Toggling readOnly isn't super efficient here, since 
  // it'll recreate the editor from scratch. But I don't envision
  // many use cases where we'll be doing that.

  if (error) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "richtext is-error"
    }, error);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "richtext ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "richtext-toolbar",
    ref: toolbarRef
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "richtext-editor-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "richtext-editor",
    ref: editorRef
  })));
};

var _default = (0, _react.memo)(Richtext);

exports.default = _default;