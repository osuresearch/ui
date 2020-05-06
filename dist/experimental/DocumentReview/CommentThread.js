"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Manager for a thread of comments within a document. This performs the heavy
 * lifting of manipulating content within an iframe document inside DocumentReview.
 *
 * This is *not* a React component. This is a direct DOM manager.
 *
 * TODO: Cache solution for position lookups so we stop querying the DOM. (Same goes for anchors)
 * The lookups should only invalidate if the container frame dimensions change.
 */
var CommentThread = /*#__PURE__*/function () {
  /**
   * @param {Document} document Document that comment DOM exists within
   * @param {HTMLElement} parent Containing element that threads are associated with
   * @param {CommentAnchor} anchor Document anchor for this thread
   * @param {CommentContent} comment Top level comment for this section
   */
  function CommentThread(document, parent, anchor, comment) {
    (0, _classCallCheck2.default)(this, CommentThread);
    this.document = document;
    this.parent = parent;
    this.anchor = anchor;
    this.topLevelComment = comment;
    this.replies = [];
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onUpdateHandler = null;
    this.injectDOM();
  }
  /**
   * Inject DOM and event handlers required for this comment section into the document.
   *
   * This is a non-React system, since we're operating on a static HTML document
   * that's contained within an IFrame.
   */


  (0, _createClass2.default)(CommentThread, [{
    key: "injectDOM",
    value: function injectDOM() {
      // Add a container for all comments and our new comment form
      var container = this.document.createElement('div');
      container.classList.add('comment-section');
      var _this$topLevelComment = this.topLevelComment,
          username = _this$topLevelComment.username,
          datetime = _this$topLevelComment.datetime,
          content = _this$topLevelComment.content,
          editable = _this$topLevelComment.editable; // Header

      var header = this.document.createElement('div');
      header.classList.add('comment-header');
      header.innerHTML = "".concat(username, "\n            <span class=\"comment-info\">\n                ").concat(datetime, "\n                <button class=\"comment-delete\">Delete</button>\n            </span>\n        ");
      container.appendChild(header); // DOM element for the top level comment

      var comment = this.document.createElement('div');
      comment.classList.add('comment-editable');
      comment.innerText = ''; // TODO: Prefill text

      comment.contentEditable = true;
      comment.addEventListener('input', this.onCommentChange);
      container.appendChild(comment);
      this.topLevelComment.node = comment; // TODO: Replies and such
      // Add reply button
      // const reply = this.document.createElement('button');
      // reply.classList.add('comment-reply-button');
      // reply.innerText = 'Reply';
      // // TODO: Click event and such
      // container.appendChild(reply);

      this.container = container;
      this.parent.appendChild(container);
    }
  }, {
    key: "onCommentChange",
    value: function onCommentChange(e) {
      console.log('onCommentChange', e); // TODO: Debounce

      if (this.onUpdateHandler) {
        this.onUpdateHandler();
      }
    }
    /**
     * Convert newlines to <br> elements
     *
     * Author: https://stackoverflow.com/a/7467863
     */

  }, {
    key: "nl2br",
    value: function nl2br(str) {
      if (typeof str === 'undefined' || str === null) return '';
      return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br/>$2');
    }
    /**
     * Return Document position of the anchored element
     */

  }, {
    key: "getAnchorRect",
    value: function getAnchorRect() {
      var clientRect = this.anchor.node.getBoundingClientRect();
      var window = this.document.defaultView;
      var left = clientRect.left + window.scrollX;
      var top = clientRect.top + window.scrollY;
      return {
        left: left,
        top: top,
        right: left + clientRect.width,
        bottom: top + clientRect.height
      };
    }
    /**
     * Focus the user to the comment entry box
     */

  }, {
    key: "focus",
    value: function focus() {
      this.topLevelComment.node.focus();
    }
    /**
     * Set the absolute top position of this comment section in the document
     *
     * @param {integer} top
     */

  }, {
    key: "setTop",
    value: function setTop(top) {
      this.container.style.top = "".concat(top, "px"); // TODO: Impl.

      this.updateSVGEdge();
    }
    /**
     * Should this comment section be displayed as a collapsed section
     *
     * @param {boolean} collapsed
     */

  }, {
    key: "setCollapsed",
    value: function setCollapsed(collapsed) {} // TODO: Impl. Pretty much just a class change

    /**
     * Reposition the SVG dashed line between this comment section and the anchor
     */

  }, {
    key: "updateSVGEdge",
    value: function updateSVGEdge() {
      if (!this.svg) {
        var svg = this.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var lineFromAnchor = this.document.createElementNS('http://www.w3.org/2000/svg', 'line');
        var lineToComment = this.document.createElementNS('http://www.w3.org/2000/svg', 'line');
        svg.classList.add('comment-svg');
        lineToComment.setAttribute('stroke-dasharray', '5, 5');
        lineToComment.setAttribute('stroke-dasharray', '5, 5');
        svg.appendChild(lineFromAnchor);
        svg.appendChild(lineToComment);
        this.document.body.appendChild(svg); // Monitor focus events on the parent.
        // IDEALLY, svg would just be a child of the container. But dealing with
        // positioning absolutely on the document is a PITA when factoring in a moving
        // container. So I just attach it straight to <body> instead and use events.

        this.container.addEventListener('mouseenter', function () {
          return svg.classList.add('is-focused');
        });
        this.container.addEventListener('mouseleave', function () {
          return svg.classList.remove('is-focused');
        });
        this.svg = svg;
        this.lineFromAnchor = lineFromAnchor;
        this.lineToComment = lineToComment;
      }

      var anchorRect = this.getAnchorRect();
      var commentRect = this.container.getBoundingClientRect();
      var bodyRect = this.document.body.getBoundingClientRect();
      var window = this.document.defaultView;
      var anchorPt = {
        // For elements that are full width of the page (e.g. blocks)
        // we won't have a proper overline. So we correct this by offsetting
        // to the right slightly.
        x: Math.max(anchorRect.left, anchorRect.right - 50),
        y: anchorRect.top - (bodyRect.top + window.scrollY)
      }; // Bend at the right edge of the body window

      var bendPt = {
        x: bodyRect.right,
        y: anchorPt.y
      }; // And connect to the comment box itself.

      var commentPt = {
        x: commentRect.left + window.pageXOffset,
        y: commentRect.top + window.pageYOffset
      };
      this.lineFromAnchor.setAttribute('x1', anchorPt.x);
      this.lineFromAnchor.setAttribute('y1', anchorPt.y);
      this.lineFromAnchor.setAttribute('x2', bendPt.x);
      this.lineFromAnchor.setAttribute('y2', bendPt.y);
      this.lineToComment.setAttribute('x1', bendPt.x);
      this.lineToComment.setAttribute('y1', bendPt.y);
      this.lineToComment.setAttribute('x2', commentPt.x);
      this.lineToComment.setAttribute('y2', commentPt.y);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      // TODO: Handle collapsed heights
      return this.container.getBoundingClientRect().height;
    }
  }]);
  return CommentThread;
}();

var _default = CommentThread;
exports.default = _default;