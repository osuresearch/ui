"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utility = require("../utility");

var _ContextConnectorElement = _interopRequireDefault(require("./ContextConnectorElement"));

/**
 * Convert a date to either the time (if same day) or just the locale date
 */
function prettifyDate(date) {
  var now = new Date();

  if (date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate()) {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  return date.toLocaleDateString();
}

function isWithinFiveMinutes(created, updated) {
  var threshold = 5 * 60 * 1000;
  return updated.getTime() - created.getTime() < threshold;
}
/**
 * Custom element abstraction for comment blocks
 */


var CommentElement = /*#__PURE__*/function () {
  // public get rect(): DOMRect {
  //     if (!this.cachedRect) {
  //         this.cachedRect = getDocumentRect(this.container);
  //     }
  //     return this.cachedRect;
  // }
  // public recalculateRect() {
  //     this.cachedRect = getDocumentRect(this.container);
  // }
  // private cachedRect?: DOMRect;

  /**
   * Setup internal DOM for the given Comment
   */
  function CommentElement(document, comment, context) {
    (0, _classCallCheck2.default)(this, CommentElement);
    (0, _defineProperty2.default)(this, "comment", void 0);
    (0, _defineProperty2.default)(this, "context", void 0);
    (0, _defineProperty2.default)(this, "container", void 0);
    (0, _defineProperty2.default)(this, "info", void 0);
    (0, _defineProperty2.default)(this, "updated", void 0);
    (0, _defineProperty2.default)(this, "content", void 0);
    (0, _defineProperty2.default)(this, "replies", void 0);
    (0, _defineProperty2.default)(this, "replyButton", void 0);
    (0, _defineProperty2.default)(this, "deleteButton", void 0);
    (0, _defineProperty2.default)(this, "connector", void 0);
    (0, _defineProperty2.default)(this, "onDelete", void 0);
    (0, _defineProperty2.default)(this, "onReply", void 0);
    (0, _defineProperty2.default)(this, "onChange", void 0);
    (0, _defineProperty2.default)(this, "onFocus", void 0);
    (0, _defineProperty2.default)(this, "onBlur", void 0);
    (0, _defineProperty2.default)(this, "prevClientHeight", void 0);
    this.comment = comment;
    this.context = context;
    this.prevClientHeight = 0;
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.onReplyButtonClick = this.onReplyButtonClick.bind(this);
    this.onContentEditableInput = this.onContentEditableInput.bind(this);
    this.onContentEditableBlur = this.onContentEditableBlur.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    var container = document.createElement('div');
    container.id = 'comment-' + comment.id;
    container.classList.add('comment');

    if (this.isReply) {
      container.classList.add('is-reply');
    }

    container.style.top = this.context.rect.top + 'px'; // Add events to highlight the target whenever we enter/leave this comment

    if (!this.isReply) {
      container.addEventListener('mouseenter', this.onMouseEnter);
      container.addEventListener('mouseleave', this.onMouseLeave);
    }

    this.container = container; // The colored line between the comment and the document. 
    // This is a visual indicator to help identify the commenter

    if (!this.isReply) {
      var edge = document.createElement('div');
      edge.classList.add('comment-edge');
      edge.style.backgroundColor = (0, _utility.colorToCss)(comment.color);
      container.appendChild(edge);
    } // Header content


    var header = document.createElement('div');
    header.classList.add('comment-header');
    container.appendChild(header);
    var info = document.createElement('div');
    info.classList.add('comment-info');
    header.appendChild(info);
    this.info = info;
    var updated = document.createElement('div');
    updated.classList.add('comment-updated');
    header.appendChild(updated);
    this.updated = updated; // Body content

    var content = document.createElement('div');
    content.classList.add('comment-content');
    content.addEventListener('input', this.onContentEditableInput);
    content.addEventListener('blur', this.onContentEditableBlur);
    container.appendChild(content);
    this.content = content;
    var replies = document.createElement('div');
    replies.classList.add('comment-replies');
    container.appendChild(replies);
    this.replies = replies; // Controls

    if (this.canDelete) {
      var deleteButton = document.createElement('button');
      deleteButton.classList.add('comment-delete');
      deleteButton.innerHTML = '&times;';
      deleteButton.addEventListener('click', this.onDeleteButtonClick);
      header.appendChild(deleteButton);
      this.deleteButton = deleteButton;
    }

    if (this.canReply) {
      var replyButton = document.createElement('button');
      replyButton.classList.add('comment-reply');
      replyButton.innerText = 'Reply';
      replyButton.addEventListener('click', this.onReplyButtonClick);
      container.appendChild(replyButton);
      this.replyButton = replyButton;
    } // Add a visual edge connecting this comment to the context.


    if (!this.isReply) {
      // document.defaultView?.requestAnimationFrame(() => {
      this.connector = new _ContextConnectorElement.default(document, this, context, comment.color);
    }

    this.refresh();
  }

  (0, _createClass2.default)(CommentElement, [{
    key: "isReply",
    get:
    /** Track the clientHeight since the last time we reflowed comments */
    function get() {
      return this.comment.parentId !== undefined;
    }
  }, {
    key: "isEdited",
    get: function get() {
      return !isWithinFiveMinutes(this.comment.created, this.comment.updated);
    }
  }, {
    key: "canDelete",
    get: function get() {
      return this.comment.canDelete || false;
    }
  }, {
    key: "canReply",
    get: function get() {
      return !this.isReply;
    }
  }, {
    key: "canEdit",
    get: function get() {
      return this.comment.canEdit || false;
    }
  }, {
    key: "hasReplies",
    get: function get() {
      return this.replies.childNodes.length > 0;
    }
  }, {
    key: "onDeleteButtonClick",
    value: function onDeleteButtonClick(e) {
      if (!this.canDelete) return;

      if (this.onDelete) {
        this.onDelete(this);
      }
    }
  }, {
    key: "onReplyButtonClick",
    value: function onReplyButtonClick(e) {
      if (this.onReply) {
        this.onReply(this);
      }
    }
  }, {
    key: "onContentEditableInput",
    value: function onContentEditableInput(e) {
      if (!this.canEdit || !this.onChange) return;

      if (!(e.target instanceof HTMLElement)) {
        throw new Error('Expected HTMLElement as event target');
      }

      this.onChange(this, e.target.innerText);
    }
    /**
     * When the user blurs an empty comment without any children, delete it.
     */

  }, {
    key: "onContentEditableBlur",
    value: function onContentEditableBlur(e) {
      if (!this.canDelete || this.hasReplies) return;

      if (!(e.target instanceof HTMLElement)) {
        throw new Error('Expected HTMLElement as event target');
      }

      var text = e.target.innerText.trim();

      if (text.length > 0) {
        return;
      }

      if (this.onDelete) {
        this.onDelete(this);
      }
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(e) {
      if (this.onFocus) {
        this.onFocus(this);
      }
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(e) {
      if (this.onBlur) {
        this.onBlur(this);
      }
    }
    /**
     * Refresh DOM content to match updated Comment information
     */

  }, {
    key: "refresh",
    value: function refresh() {
      var _this$connector;

      var comment = this.comment;
      this.info.innerText = comment.author;
      this.updated.innerText = "".concat(prettifyDate(comment.updated), " ").concat(this.isEdited ? '(edited)' : '');
      var content = this.content;
      content.contentEditable = this.canEdit ? 'true' : ''; // Make sure we're not trying to update innerText while
      // someone is actively typing - as part of an event callback

      if (content.innerText !== comment.message) {
        content.innerText = comment.message;
      }

      (_this$connector = this.connector) === null || _this$connector === void 0 ? void 0 : _this$connector.refresh();
    }
    /**
     * Remove this comment from the DOM
     */

  }, {
    key: "remove",
    value: function remove() {
      var _this$connector2;

      this.context.blur();
      this.container.remove();
      (_this$connector2 = this.connector) === null || _this$connector2 === void 0 ? void 0 : _this$connector2.remove();
    }
    /**
     * Focus on the editable of this comment
     */

  }, {
    key: "focus",
    value: function focus() {
      this.content.focus(); // TODO: Also scroll document to put this comment in view.. somehow.
    }
    /**
     * Nest a CommentElement under this one
     */

  }, {
    key: "addReply",
    value: function addReply(el) {
      if (this.isReply) {
        throw new Error('Cannot nest replies');
      } // TODO: Insert by date, in case these were added out of order.


      this.replies.appendChild(el.container);
    }
  }]);
  return CommentElement;
}();

exports.default = CommentElement;