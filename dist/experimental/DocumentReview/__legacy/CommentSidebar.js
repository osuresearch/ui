"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _CommentThread = _interopRequireDefault(require("./CommentThread"));

var _iframeCss = _interopRequireDefault(require("./iframe-css"));

/**
 * Reference point in the document that a comment is linked to
 */
var CommentAnchor =
/**
 * @param {string} section
 * @param {Range} range
 */
function CommentAnchor(node, section, range) {
  (0, _classCallCheck2.default)(this, CommentAnchor);
  // Need to be able to support:
  // some DOM range that isn't wrapped yet (from another source)
  // or a section anchor
  this.node = node;
  this.section = section;
  this.range = range;
};

var CommentContent =
/**
 * @param {string} username
 * @param {string} datetime
 * @param {string} content
 * @param {boolean} editable
 */
function CommentContent(username, datetime, content, editable) {
  (0, _classCallCheck2.default)(this, CommentContent);
  this.username = username;
  this.datetime = datetime;
  this.content = content;
  this.editable = editable;
  this.node = null;
};
/**
 * Management of positioning comments on the document sidebar
 */


var CommentSidebar = /*#__PURE__*/function () {
  function CommentSidebar(document, selectableBlockNodes, selectableTextNodes) {
    (0, _classCallCheck2.default)(this, CommentSidebar);
    this.document = document; // List of CommentThread objects on the page

    this.threads = [];
    this.reflow = this.reflow.bind(this); // DOM selectors that can be selected as a whole block

    this.selectableBlockNodes = selectableBlockNodes; // DOM selectors that can have text inline selectable

    this.selectableTextNodes = selectableTextNodes;
    this.injectCSS();
    this.injectDOM();
  }
  /**
   * Add required CSS for highlighting, commenting, etc
   */


  (0, _createClass2.default)(CommentSidebar, [{
    key: "injectCSS",
    value: function injectCSS() {
      // Core static CSS
      var css = _iframeCss.default; // Dynamic CSS based on whitelisted selectors

      this.selectableBlockNodes.forEach(function (selector) {
        css += "\n                ".concat(selector, ":hover {\n                    background: #fff2a8;\n                    cursor: pointer;\n                }\n            ");
      });
      this.selectableTextNodes.forEach(function (selector) {
        css += "\n                ".concat(selector, " {\n                    user-select: text;\n                }\n            ");
      });
      var style = this.document.createElement('style');
      style.innerText = css;
      this.document.body.appendChild(style);
    }
  }, {
    key: "injectDOM",
    value: function injectDOM() {
      var _this = this;

      // Add to Document.body, do things, etc.
      this.container = this.document.createElement('div');
      this.container.classList.add('comments-sidebar');
      this.document.body.appendChild(this.container); // Scrape the document and add hooks for adding comments

      this.document.querySelectorAll('[data-comment-section]').forEach(function (node) {
        var section = node.dataset['commentSection'];

        var button = _this.document.createElement('button');

        button.classList.add('add-comment');
        button.innerText = '📝';
        button.addEventListener('click', function (e) {
          _this.insertThread(e.target, section);

          e.preventDefault();
          return false;
        });
        node.appendChild(button);
      });
      this.document.querySelectorAll(this.selectableBlockNodes).forEach(function (node) {
        node.addEventListener('click', function (e) {
          _this.insertThread(e.target, 'TODO: Section?');

          e.preventDefault();
          return false;
        });
      }); // Shortcut for commenting on some highlighted text.
      // Eventually there will be a button, but this is for testing.

      this.document.addEventListener('keydown', function (e) {
        if (e.key === 'c') {
          if (_this.tryCommentHighlighted()) {
            e.preventDefault();
            return false;
          }
        }
      });
    }
    /**
     * Experiment in adding a comment for some highlighted text block
     */

  }, {
    key: "tryCommentHighlighted",
    value: function tryCommentHighlighted() {
      /*
      There's a LOT that can go wrong here, and edge cases to handle:
            - How to guard selectable text from unselectable
              (e.g should they be able to select actual questions in the document?)
          - Dealing with links? (e.g. filenames)
          - What if they select something that intersects (not wraps) an already
              selected section? Or even just arbitrary DOM. E.g.:
                <p>Some text here that <strong>is bolded</strong> for emphasis</p>
              and they select "Some text here that is"
            For dealing with nested DOM, it's apparently a hard problem with no proper API.
          See:
          https://wikimedium-server.firebaseapp.com/wiki/Stack_Overflow
          https://stackoverflow.com/questions/6328718/how-to-wrap-surround-highlighted-text-with-an-element
          https://stackoverflow.com/questions/1730967/how-to-wrap-with-html-tags-a-cross-boundary-dom-selection-range
          https://github.com/webmodules/wrap-range
      */
      // For the simple case, we'll just do a selection range.
      // if it throws an exception, it means other DOM is in there
      // and it won't work without special bullshit.
      try {
        var range = this.document.getSelection().getRangeAt(0);

        if (this.isValidSelectionRange(range)) {
          var highlighter = this.document.createElement('span');
          highlighter.classList.add('comment-highlight');
          range.surroundContents(highlighter);
          this.insertThread(highlighter, '');
          return true;
        }
      } catch (e) {
        console.warn('Cannot highlight selection', e);
      }

      return false;
    }
    /**
     * @param {Range} range
     */

  }, {
    key: "isValidSelectionRange",
    value: function isValidSelectionRange(range) {
      if (range.collapsed) return false; // Make sure it's not something in the sidebar

      if (this.isInSidebar(range.startContainer.parentElement)) {
        return false;
      } // TODO: Other conditions and such


      return true;
    }
    /**
     * @param {HTMLElement} el
     */

  }, {
    key: "isInSidebar",
    value: function isInSidebar(el) {
      do {
        if (el == this.container) {
          return true;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return false;
    }
    /**
     * @param {HTMLElement} node
     * @param {string} section
     */

  }, {
    key: "insertThread",
    value: function insertThread(node, section) {
      var _this2 = this;

      var instance = new _CommentThread.default(this.document, this.container, new CommentAnchor(node, section, null), new CommentContent('mcmanning.1', 'timestamp', '', true)); // Reflow all comments whenever one is being updated

      instance.onUpdateHandler = this.reflow;
      var idx = this.findBestInsertIndex(instance.getAnchorRect().top);
      this.threads.splice(idx, 0, instance); // Reflow and focus once we get a DOM paint and alignment

      this.document.defaultView.requestAnimationFrame(function () {
        _this2.reflow();

        instance.focus();
      });
    }
    /**
     * @param {integer} top
     */

  }, {
    key: "findBestInsertIndex",
    value: function findBestInsertIndex(top) {
      for (var i = 0; i < this.threads.length; i++) {
        if (this.threads[i].getAnchorRect().top > top) {
          return i;
        }
      }

      return this.threads.length;
    }
    /**
     * Callback for when the commented document reflows (width change)
     * to force all comment sections to recalculate their alignment
     */

  }, {
    key: "onResize",
    value: function onResize() {
      this.reflow();
    }
  }, {
    key: "reflow",
    value: function reflow() {
      this.minimizeDistances(); // Anything else? If not, I can nuke this method.
    }
    /**
     * Minimize vertical distances between comments and the commented content
     */

  }, {
    key: "minimizeDistances",
    value: function minimizeDistances() {
      var error = 99999; // LARGE overfitting. Will correct itself first run.

      var prevError = error + 1; // Construct a faster data structure to iterate through

      var sizes = [];

      for (var i = 0; i < this.threads.length; i++) {
        var section = this.threads[i];
        sizes.push({
          top: section.getAnchorRect().top,
          desiredTop: section.getAnchorRect().top,
          maxHeight: section.getHeight(),
          height: section.getHeight()
        });
      } // Brute force minimize the distances between document top
      // of each section given prior sections and the desired top
      // TODO: Less of a brute force approach. Shouldn't be too bad
      // since we're doing raw number crunching here instead of DOM
      // lookups - but would still be nice to optimize.


      var minimumTop = sizes[0].desiredTop;
      var offset = 0;
      var COLLAPSED_HEIGHT = 100;
      var PIXELS_PER_ITERATION = 20;
      var infTest = 0; // Just to play it safe in case I fuck up the algorithm

      while (prevError > error && infTest++ < 1) {
        // Shift up and recalculate error
        prevError = error;
        error = 0; // First comment is always at the topmost position

        sizes[0].top = minimumTop;
        sizes[0].height = sizes[0].maxHeight;

        for (var _i = 1; _i < sizes.length; _i++) {
          var prevHeight = sizes[_i - 1].maxHeight; // Test if the previous comment needs to be collapsed to improve error.
          // We do not allow the currently edited comment section to be collapsed

          /*if (sizes[i - 1].top + prevHeight > sizes[i].desiredTop
              && i !== this.selectedSectionIndex
          ) {
              sizes[i - 1].height = COLLAPSED_HEIGHT;
              prevHeight = COLLAPSED_HEIGHT;
          }*/
          // Fit as tightly under the previous comment as possible
          // taking in account breaks for desired tops.

          sizes[_i].top = Math.max(sizes[_i].desiredTop - offset, sizes[_i - 1].top + prevHeight);
          error += sizes[_i].top - sizes[_i].desiredTop;
        } // Shift topmost position up more in the document for
        // the next iteration of minimizing error
        // if (minimumTop > 0) {
        //     offset += PIXELS_PER_ITERATION;
        // }


        minimumTop = Math.max(0, minimumTop - offset); // console.log(`Minimum top set to ${minimumTop}`);
      } // Have updated positions after minimization, apply to the DOM


      for (var _i2 = 0; _i2 < sizes.length; _i2++) {
        // console.log(`${i} (${this.threads[i].name}) at ${sizes[i].top}px with height ${sizes[i].height}`);
        this.threads[_i2].setTop(sizes[_i2].top);

        this.threads[_i2].setCollapsed(sizes[_i2].height < sizes[_i2].maxHeight);
      }
    }
  }]);
  return CommentSidebar;
}();

var _default = CommentSidebar;
exports.default = _default;