"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ReviewManager = _interopRequireDefault(require("./ReviewManager"));

require("./index.scss");

/*
Requirements blob:

- A "section" element containing one or more commentable elements (at any depth) requires:
    1. An `id` attribute which - obviously - must be unique across the entire document
    2. A `data-comment-section="Human Readable Name"` attribute
- Every element you want to support block comments (as in the entire element and
    all children can be clicked on and comments added, as a single block) requires:
    1. An `id` attribute
    2. A `data-comment-block="true"` attribute
- Every element you want to support inline comments (as in the user can highlight a segment
    of text within the element and link a comment to only that text segment) requires:
    1. An `id` attribute
    2. A `data-comment-inline="true"` attribute
    3. To contain no child elements and only text (e.g. no <strong>, <em>, etc)
*/
var DocumentReview = function DocumentReview(_ref) {
  var src = _ref.src,
      comments = _ref.comments,
      onAddComment = _ref.onAddComment,
      onUpdateComment = _ref.onUpdateComment,
      onRemoveComment = _ref.onRemoveComment,
      onReady = _ref.onReady,
      defaultAuthor = _ref.defaultAuthor,
      canEditAnyComment = _ref.canEditAnyComment,
      id = _ref.id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  var iframe = (0, _react.useRef)(null); // The majority of work for this component is just passing props 
  // through to the manager that works within the IFrame and outside of React.
  // This component does not support mutation of most props
  // TODO: Might have to though - how would that work?

  var _useState = (0, _react.useState)(function () {
    var manager = new _ReviewManager.default();
    manager.initialComments = comments;
    manager.onAddComment = onAddComment;
    manager.onUpdateComment = onUpdateComment;
    manager.onRemoveComment = onRemoveComment;
    manager.onReady = onReady;
    manager.defaultAuthor = defaultAuthor;
    manager.canEditAnyComment = canEditAnyComment;
    return manager;
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 1),
      manager = _useState2[0]; // TODO: Neato realtime sync with a backend via constant calls to the endpoints
  // and passing the new comment data back into manager.syncComments()
  // Once the iframe has loaded, hook the manager into it to start working outside of React. 


  (0, _react.useEffect)(function () {
    var _iframe$current$conte;

    if (!iframe.current) {
      return;
    }

    var iframeDocument = iframe.current.contentDocument || ((_iframe$current$conte = iframe.current.contentWindow) === null || _iframe$current$conte === void 0 ? void 0 : _iframe$current$conte.document);

    if (!iframeDocument) {
      throw new Error('Could not obtain reference to iframe content document');
    }

    iframeDocument.write(src);
    iframeDocument.close();
    manager.bind(iframeDocument);
  }, [src, manager, iframe]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: "document-review ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    ref: iframe,
    frameBorder: "0"
  }));
};

var _default = DocumentReview;
exports.default = _default;