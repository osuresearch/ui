"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _TableOfContentsElement = _interopRequireDefault(require("./elements/TableOfContentsElement"));

var _SidebarElement = _interopRequireDefault(require("./elements/SidebarElement"));

var _CommentElement = _interopRequireDefault(require("./elements/CommentElement"));

var _CSSElement = _interopRequireDefault(require("./elements/CSSElement"));

var _SelectionManager = _interopRequireDefault(require("./SelectionManager"));

var _CommentContext = _interopRequireDefault(require("./CommentContext"));

var SECTION_DATA_ATTR = 'data-comment-section';
var SECTION_LEVEL_DATA_ATTR = 'data-comment-section-level';
var BLOCK_COMMENT_DATA_ATTR = 'data-comment-block';
var INLINE_COMMENT_DATA_ATTR = 'data-comment-inline';
/**
 * Management for a document that can be commented on by the end user
 * 
 * This is a pure Javascript component - as the document could exist
 * within an IFrame without any external Javascript support (e.g. React)
 */

var ReviewManager = /*#__PURE__*/function () {
  // Event handlers that API integration components can provide

  /**
   * Display name for any new comments or replies
   */

  /**
   * Default access control if any `Comment.canEdit/canDelete` are undefined.
   * 
   * If false, only comments with `Comment.author === defaultAuthor` will be editable.
   */

  /** 
   * Flat list of pre-existing comments to load on bind. 
   * 
   * Typically this will be set by some backend API.
   */

  /** The IFrame document to inject DOM/CSS into */
  // Custom elements to add to the document

  /** Fast hashmap between a target and context metadata */
  function ReviewManager() {
    (0, _classCallCheck2.default)(this, ReviewManager);
    (0, _defineProperty2.default)(this, "onAddComment", void 0);
    (0, _defineProperty2.default)(this, "onUpdateComment", void 0);
    (0, _defineProperty2.default)(this, "onRemoveComment", void 0);
    (0, _defineProperty2.default)(this, "onReady", void 0);
    (0, _defineProperty2.default)(this, "defaultAuthor", void 0);
    (0, _defineProperty2.default)(this, "canEditAnyComment", void 0);
    (0, _defineProperty2.default)(this, "initialComments", void 0);
    (0, _defineProperty2.default)(this, "document", void 0);
    (0, _defineProperty2.default)(this, "sidebar", void 0);
    (0, _defineProperty2.default)(this, "toc", void 0);
    (0, _defineProperty2.default)(this, "css", void 0);
    (0, _defineProperty2.default)(this, "sections", void 0);
    (0, _defineProperty2.default)(this, "commentElements", void 0);
    (0, _defineProperty2.default)(this, "contexts", void 0);
    (0, _defineProperty2.default)(this, "selection", void 0);
    (0, _defineProperty2.default)(this, "isPendingReflow", void 0);
    this.defaultAuthor = '(me)';
    this.canEditAnyComment = false;
    this.sections = new Map();
    this.commentElements = new Map();
    this.contexts = new Map();
    this.isPendingReflow = false; // TODO: I initialize to the current document instead of the iframe
    // just to make things easier on the linter. But, honestly, this 
    // manager should be instantiated once the iframe document is ready.

    this.document = document;
    this.internalOnChangeComment = this.internalOnChangeComment.bind(this);
    this.internalOnDeleteComment = this.internalOnDeleteComment.bind(this);
    this.internalOnReplyComment = this.internalOnReplyComment.bind(this);
    this.internalOnFocusComment = this.internalOnFocusComment.bind(this);
    this.internalOnBlurComment = this.internalOnBlurComment.bind(this);
  }
  /**
   * Retrieve an array of Sections in the document.
   * 
   * NOTE: This **does not have IE support** (internally uses `Array.from`).
   * This method is only used for data mocking in development at the moment
   * so it's a non issue.
   */


  (0, _createClass2.default)(ReviewManager, [{
    key: "getSections",
    value: function getSections() {
      return Array.from(this.sections.values());
    }
    /**
     * Bind this manager to a Document to inject DOM and event handlers.
     */

  }, {
    key: "bind",
    value: function bind(document) {
      if (this.sidebar) {
        throw new Error('Cannot bind() a DocumentManager multiple times');
      }

      this.document = document; // Reparent the entire body to add a wrapper.
      // This is ... not high performance ... but I need the body wrapped for
      // generating a fixed width page around the source document and I can't
      // guarantee that every incoming document will have DOM wrapped in a 
      // specific way. 
      // TODO: Any way around this?

      var wrapper = document.createElement('div');
      wrapper.classList.add('body-wrapper');

      while (document.body.childNodes.length > 0) {
        wrapper.appendChild(document.body.childNodes[0]);
      }

      document.body.appendChild(wrapper);
      this.css = new _CSSElement.default(document);
      this.sidebar = new _SidebarElement.default(document);
      this.selection = new _SelectionManager.default(document); // Generate a dynamic TOC within the document

      this.loadSections();
      this.toc = new _TableOfContentsElement.default(document, this.sections); // Bind events to the DOM

      this.bindBlockCommentTargetEvents();
      this.bindRangeCommentTargetEvents(); // Load any initial comments into the document

      if (this.initialComments) {
        this.loadComments(this.initialComments);
      }

      if (this.onReady) {
        this.onReady(this);
      }
    }
    /**
     * Scan through the document DOM for `data-comment-section` elements and aggregate.
     */

  }, {
    key: "loadSections",
    value: function loadSections() {
      var _this = this;

      this.sections.clear();
      var attr = "[".concat(SECTION_DATA_ATTR, "]");
      var elements = this.document.querySelectorAll(attr);
      elements.forEach(function (el) {
        var title = el.getAttribute(SECTION_DATA_ATTR);
        var level = parseInt(el.getAttribute(SECTION_LEVEL_DATA_ATTR) || '0');

        if (!el.id) {
          console.warn("Section element ".concat(title, " does not contain an \"id\" attribute. ") + 'One will be automatically generated for it');
          el.id = 'auto-section-' + title.replace(' ', '');
        }

        if (_this.sections.has(title)) {
          throw new Error("Duplicate sections titled \"".concat(title, "\" in document. ") + 'This will cause incorrect comment to DOM mapping.');
        }

        _this.sections.set(title, {
          el: el,
          title: title,
          level: level
        });
      });
    }
  }, {
    key: "syncComments",
    value: function syncComments(comments) {
      // TODO: Better variant of loadComments so we can do cool realtime backend syncing crap.
      // Here, we need to find ID matches, in-place replace the content 
      // of the Comment data, and then CommentElement.refresh().
      // Anything in the new set and not found - we add (just like loadComments)
      // Anything not in the new set and we still have - delete CommentElement.
      throw new Error('Not implemented');
    }
    /**
     * Load a batch of comments into the DOM
     */

  }, {
    key: "loadComments",
    value: function loadComments(comments) {
      var _this2 = this;

      var repliesToAdd = [];
      comments.forEach(function (comment) {
        _this2.validateComment(comment);

        var section = _this2.sections.get(comment.section);

        if (!section) {
          console.warn("Ignoring comment \"".concat(comment.id, "\" - missing section \"").concat(comment.section, "\""));
          return;
        } // If it's a reply - skip. Will process after all top level comments have been added


        if (comment.parentId) {
          repliesToAdd.push(comment);
          return;
        }

        var target = _this2.document.getElementById(comment.elementId);

        if (!target) {
          console.warn("Ignoring comment \"".concat(comment.id, "\" - missing element ID \"").concat(comment.elementId, "\""));
          return;
        } // If this is a range, we need to add an associated highlight
        // and use *that* as the context's target


        if (comment.startRange !== comment.endRange) {
          var _this2$selection;

          var highlight = {
            containerId: comment.elementId,
            start: comment.startRange,
            end: comment.endRange,
            context: '' // TODO: Recalculate? 

          };
          (_this2$selection = _this2.selection) === null || _this2$selection === void 0 ? void 0 : _this2$selection.add(highlight, target); // .el is updated with the new highlight element once added

          target = highlight.el;
        }

        var context = _this2.getOrCreateContext(target);

        _this2.addNewComment(comment, context);
      });
      repliesToAdd.forEach(function (reply) {
        var parentEl = _this2.commentElements.get(reply.parentId);

        if (!parentEl) {
          console.warn("Ignoring reply \"".concat(reply.id, "\" - missing parent \"").concat(reply.parentId, "\""));
          return;
        }

        var replyEl = new _CommentElement.default(_this2.document, reply, parentEl.context);
        parentEl.addReply(replyEl);

        _this2.bindUserEvents(replyEl);

        _this2.commentElements.set(reply.id, replyEl);
      });
      this.reflow();
    }
    /**
     * Look for the closest parent section for a given element
     */

  }, {
    key: "findClosestSection",
    value: function findClosestSection(el) {
      var attr = "[".concat(SECTION_DATA_ATTR, "]");
      var closest = el.closest(attr);

      if (!closest) {
        return null;
      }

      var title = closest.getAttribute(SECTION_DATA_ATTR);
      return this.sections.get(title) || null;
    }
  }, {
    key: "getOrCreateContext",
    value: function getOrCreateContext(target) {
      var context = this.contexts.get(target);

      if (!context) {
        context = new _CommentContext.default(target);
        this.contexts.set(target, context);
      }

      return context;
    }
    /**
     * Bind click events to all DOM elements that are tagged for supporting block comments
     */

  }, {
    key: "bindBlockCommentTargetEvents",
    value: function bindBlockCommentTargetEvents() {
      var _this3 = this;

      // Scrape the document and add hooks for adding comments
      var attr = "[".concat(BLOCK_COMMENT_DATA_ATTR, "]"); // TODO: What's faster - querySelectorAll @ document or per section?

      this.sections.forEach(function (section) {
        var _section$el;

        (_section$el = section.el) === null || _section$el === void 0 ? void 0 : _section$el.querySelectorAll(attr).forEach(function (el) {
          el.addEventListener('click', function (e) {
            // Do not override default behavior for anchors that are inside blocks 
            if (e.target.tagName === 'A') {
              return true;
            }

            _this3.addNewBlockComment(section, el);

            e.preventDefault();
            return false;
          });
        });
      });
    }
    /**
     * Bind selection events to all DOM elements that are tagged for supporting inline comments
     */

  }, {
    key: "bindRangeCommentTargetEvents",
    value: function bindRangeCommentTargetEvents() {
      var _this4 = this;

      this.document.addEventListener('keydown', function (e) {
        if (e.key === 'c') {
          var _this4$selection;

          var highlight = (_this4$selection = _this4.selection) === null || _this4$selection === void 0 ? void 0 : _this4$selection.highlightSelection();

          if (highlight) {
            _this4.addNewRangeComment(highlight);

            e.preventDefault();
            return false;
          }
        }
      }); // TODO: Floating "Add comment" button whenever something is 
      // highlighted and passes canCommentOnSelectedElements
    }
    /**
     * Bind event handlers on the comment element
     */

  }, {
    key: "bindUserEvents",
    value: function bindUserEvents(el) {
      el.onChange = this.internalOnChangeComment;
      el.onDelete = this.internalOnDeleteComment;
      el.onReply = this.internalOnReplyComment;
      el.onFocus = this.internalOnFocusComment;
      el.onBlur = this.internalOnBlurComment;
    }
    /**
     * Sync changes between a comment and its element and notify listeners
     */

  }, {
    key: "internalOnChangeComment",
    value: function internalOnChangeComment(el, content) {
      var comment = el.comment;
      comment.message = content;
      comment.updated = new Date(); // Re-render updated comment data

      el.refresh();
      this.reflow(el); // Fire to listeners passed in from the React app

      if (this.onUpdateComment) {
        this.onUpdateComment(comment);
      }
    }
    /**
     * Remove comment + element and notify listeners
     */

  }, {
    key: "internalOnDeleteComment",
    value: function internalOnDeleteComment(el) {
      var comment = el.comment;
      console.debug('internalOnDeleteComment', el); // Remove element and reflow

      el.remove();
      this.reflow();
      this.commentElements.delete(comment.id); // Note: onRemoveComment needs to also handle removal
      // of any child comments from the backend. 

      if (this.onRemoveComment) {
        this.onRemoveComment(comment);
      }
    }
    /**
     * Instantiate a new reply comment + element and notify listeners
     */

  }, {
    key: "internalOnReplyComment",
    value: function internalOnReplyComment(el) {
      var comment = el.comment;
      var reply = this.createReply(comment); // Create DOM nested under the parent comment

      var replyEl = new _CommentElement.default(this.document, reply, el.context);
      el.addReply(replyEl);
      this.bindUserEvents(replyEl); // Track and reflow after DOM has been created

      this.commentElements.set(reply.id, replyEl);
      this.reflow(el);
      replyEl.focus(); // Notify listeners

      if (this.onAddComment) {
        this.onAddComment(comment);
      }
    }
    /**
     * Event callback when a user hovers their cursor (or clicks into) a comment thread.
     * 
     * This will highlight the associated document context of that comment thread.
     */

  }, {
    key: "internalOnFocusComment",
    value: function internalOnFocusComment(el) {
      if (el.context.isHighlight) {
        var _this$selection;

        (_this$selection = this.selection) === null || _this$selection === void 0 ? void 0 : _this$selection.focus(el.context.getHighlight(), el.comment.color);
      } else {
        el.context.focus(el.comment.color);
      }
    }
    /**
     * Event callback when a user de-focuses a comment thread.
     * 
     * This will remove any extra highlighting from the associated document context
     */

  }, {
    key: "internalOnBlurComment",
    value: function internalOnBlurComment(el) {
      var _this$selection2;

      (_this$selection2 = this.selection) === null || _this$selection2 === void 0 ? void 0 : _this$selection2.blur();
      el.context.blur();
    }
    /**
     * Calculate a new unique ID for generated comments
     */

  }, {
    key: "getNewCommentId",
    value: function getNewCommentId() {
      var now = new Date();
      return now.getTime();
    }
    /**
     * Check if the user's current selection is valid and comment-able
     */
    // private canCommentOnSelectionRange(): boolean {
    //     const range = this.document.getSelection()?.getRangeAt(0);
    //     if (!range || range.collapsed) {
    //         return false;
    //     }
    //     const attr = `[${INLINE_COMMENT_DATA_ATTR}]`;
    //     // TODO: Check if parent has the right data attr.
    //     // TODO: Various inline stripping magic bullshit. 
    //     return false;
    // }

    /**
     * Ensure all the right fields of the comment are filled out, and adjust if not.
     */

  }, {
    key: "validateComment",
    value: function validateComment(comment) {
      // If the comment didn't specify access controls, create them
      // based on the ownership controls defined in this manager
      var hasRW = this.canEditAnyComment || comment.author === this.defaultAuthor;

      if (!comment.canEdit) {
        comment.canEdit = hasRW;
      }

      if (!comment.canDelete) {
        comment.canDelete = hasRW;
      }
    }
    /**
     * Factory for new Comment resources
     */

  }, {
    key: "createComment",
    value: function createComment(section, elementId) {
      var now = new Date();
      return {
        id: this.getNewCommentId(),
        parentId: undefined,
        author: this.defaultAuthor,
        message: '',
        created: now,
        updated: now,
        section: section,
        elementId: elementId,
        startRange: -1,
        endRange: -1,
        canEdit: true,
        canDelete: true,
        color: [0, 0, 255]
      };
    }
    /**
     * Factory for new Comment resources that are replies to other comments
     */

  }, {
    key: "createReply",
    value: function createReply(comment) {
      var reply = this.createComment(comment.section, comment.elementId);
      reply.parentId = comment.id;
      return reply;
    }
    /**
     * Insert a new block comment associated with the given element
     */

  }, {
    key: "addNewBlockComment",
    value: function addNewBlockComment(section, target) {
      var context = this.getOrCreateContext(target);
      var comment = this.createComment(section.title, target.id);
      this.addNewComment(comment, context);
    }
    /**
     * Add a new text range comment associated with the given Highlight
     */

  }, {
    key: "addNewRangeComment",
    value: function addNewRangeComment(highlight) {
      // context needs to point to the highlight el
      if (!highlight.el) {
        throw new Error('addNewRangeComment() requires Highlight to contain the wrapping element');
      }

      var section = this.findClosestSection(highlight.el);

      if (!section) {
        throw new Error('Could not find a matching section. This should not have been highlighted');
      }

      var context = this.getOrCreateContext(highlight);
      var comment = this.createComment(section.title, highlight.containerId);
      comment.startRange = highlight.start;
      comment.endRange = highlight.end;
      this.addNewComment(comment, context);
    }
  }, {
    key: "addNewComment",
    value: function addNewComment(comment, context) {
      var commentEl = new _CommentElement.default(this.document, comment, context);
      this.bestFitInsertComment(commentEl);
      this.bindUserEvents(commentEl);
      this.commentElements.set(comment.id, commentEl);
      this.reflow(commentEl);
      commentEl.focus();

      if (this.onAddComment) {
        this.onAddComment(comment);
      }
    }
    /**
     * Identify the best insert order for the comment in the sidebar DOM 
     * based on distance from the target element. 
     */

  }, {
    key: "bestFitInsertComment",
    value: function bestFitInsertComment(el) {
      if (!this.sidebar) {
        throw new Error('Tried to fit without a sidebar');
      } // We're just going to dump it in the sidebar without sorting.
      // reflow() will sort by context positions and other metadata.


      this.sidebar.container.appendChild(el.container); // const contextTop = el.context.rect.top;
      // let insertAfter: HTMLElement | undefined;
      // const children = this.sidebar.container.childNodes;
      // for (let i = 0; i < children.length; i++) {
      //     const comment = this.getCommentElementForNode(children[i]);
      //     if (comment) {
      //         const otherContextTop = comment.context.rect.top;
      //         console.debug('[bestFit] compare', otherContextTop, contextTop, comment);
      //         if (otherContextTop >= contextTop) {
      //             insertAfter = comment.container;
      //             break;
      //         }
      //     }
      //     // const node = children[i];
      //     // if (node instanceof HTMLElement) {
      //     //     const top = parseInt(node.style.top);
      //     //     if (top >= contextTop) {
      //     //         // If we should insert before this node in sidebar ordering,
      //     //         // also make sure we don't accidentally insert above a comment
      //     //         // that's pointing to a context that's higher in the DOM than 
      //     //         // our target. 
      //     //         const comment = this.getCommentElementForNode(node);
      //     //         const otherContextTop = comment?.context.rect.top || 0;
      //     //         if (otherContextTop > contextTop) {
      //     //             insertBefore = node;
      //     //             break;
      //     //         }
      //     //     }
      //     // }
      // }
      // console.debug('[bestFit] result', insertAfter);
      // // algorithm needs to keep comments together.
      // if (insertAfter) {
      //     // insertAfter.after(el.container);
      //     this.sidebar.container.insertBefore(el.container, insertAfter);
      // } else {
      //     this.sidebar.container.appendChild(el.container);
      // }
    }
  }, {
    key: "getCommentElementForNode",
    value: function getCommentElementForNode(node) {
      if (!(node instanceof HTMLElement)) {
        return undefined;
      }

      var parts = node.id.split('-');

      if (parts.length < 2 || parts[0] !== 'comment') {
        return undefined;
      }

      var id = parseInt(parts[1]);
      return this.commentElements.get(id);
    }
    /**
     * Realign comments based on current DOM dimensions
     * 
     * @param startingFrom  Realign comments below this comment. 
     *                      If not supplied, will realign every comment
     */

  }, {
    key: "reflow",
    value: function reflow(startingFrom) {
      var _document$defaultView,
          _this5 = this;

      if (this.isPendingReflow) {
        // Don't queue up another requestAnimationFrame() if we already have one.
        return;
      }

      this.isPendingReflow = true; // Wait a DOM paint before reflow - just in case this is called
      // immediately after adding DOM but before paint 

      (_document$defaultView = document.defaultView) === null || _document$defaultView === void 0 ? void 0 : _document$defaultView.requestAnimationFrame(function () {
        _this5.isPendingReflow = false; // If the element we're starting from hasn't changed height at all, 
        // just short circuit the update. This implies that nothing should really
        // move around - so we don't need to perform any heavy DOM manipulation.

        if (startingFrom) {
          if (startingFrom.container.clientHeight <= startingFrom.prevClientHeight) {
            console.debug('[reflow] skip - not increased height', startingFrom.container.clientHeight, startingFrom.prevClientHeight);
            return;
          }

          startingFrom.prevClientHeight = startingFrom.container.clientHeight;
        } // Sort comments based on context's DOM position and relative date


        var comments = Array.from(_this5.commentElements.values()); // TODO: Array.from polyfill?

        comments = comments.sort(function (a, b) {
          // Short circuit for replies - they need to be sent to the end of the list 
          // so they don't interfere with ordering on context.rect.top comparisons
          if (a.isReply) return 1;
          if (b.isReply) return -1; // Same context? Sort by date.

          if (a.context === b.context) {
            return a.comment.created.getTime() < b.comment.created.getTime() ? -1 : 1;
          } // Different context? Sort by context's position in the DOM


          return a.context.rect.top < b.context.rect.top ? -1 : 1;
        });
        console.debug('[reflow] Sorted', comments); // Then run through, updating top for each comment.
        // TODO: This can be optimized by only moving stuff after startingFrom (if defined). 
        // And by not moving comments under other comments that have not calculated a new position.
        // But I don't know all the edge cases where this may fail - so I'm just going to 
        // keep recalculating *everything* until there's a noticeable performance drop. 

        var prevBottom = 0;

        for (var i = 0; i < comments.length; i++) {
          var _comment$connector;

          var _comment = comments[i];
          if (_comment.isReply) continue;
          var top = Math.max(_comment.context.rect.top, prevBottom);
          var height = _comment.container.clientHeight;
          var topPx = top + 'px';
          _comment.container.style.top = topPx;
          _comment.prevClientHeight = height;
          prevBottom = top + height;
          (_comment$connector = _comment.connector) === null || _comment$connector === void 0 ? void 0 : _comment$connector.refresh();
        } // let node: HTMLElement | null = startingFrom.container;
        // let minTop = parseInt(node.style.top) + node.clientHeight;
        // node = node.nextElementSibling as HTMLElement;
        // while (node) {
        //     const top = parseInt(node.style.top);
        //     // If the next sibling doesn't need to shift down - we're done. 
        //     // There's no reason to reflow any other siblings.
        //     if (!node || top > minTop) {
        //         break;
        //     }
        //     // Otherwise, adjust top and recalculate for next sibling
        //     node.style.top = minTop + 'px';
        //     minTop = minTop + node.clientHeight;
        //     node = node.nextElementSibling as HTMLElement;
        // }
        // this.isPendingReflow = false;

      });
    }
  }]);
  return ReviewManager;
}();

exports.default = ReviewManager;