
/**
 * Manager for a thread of comments within a document. This performs the heavy
 * lifting of manipulating content within an iframe document inside DocumentReview.
 *
 * This is *not* a React component. This is a direct DOM manager.
 *
 * TODO: Cache solution for position lookups so we stop querying the DOM. (Same goes for anchors)
 * The lookups should only invalidate if the container frame dimensions change.
 */
class CommentThread {
    /**
     * @param {Document} document Document that comment DOM exists within
     * @param {HTMLElement} parent Containing element that threads are associated with
     * @param {CommentAnchor} anchor Document anchor for this thread
     * @param {CommentContent} comment Top level comment for this section
     */
    constructor(document, parent, anchor, comment) {
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
    injectDOM() {
        // Add a container for all comments and our new comment form
        const container = this.document.createElement('div');
        container.classList.add('comment-section');

        const { username, datetime, content, editable } = this.topLevelComment;

        // Header
        const header = this.document.createElement('div');
        header.classList.add('comment-header');
        header.innerHTML = `${username}
            <span class="comment-info">
                ${datetime}
                <button class="comment-delete">Delete</button>
            </span>
        `;
        container.appendChild(header);

        // DOM element for the top level comment
        const comment = this.document.createElement('div');
        comment.classList.add('comment-editable');
        comment.innerText = ''; // TODO: Prefill text
        comment.contentEditable = true;
        comment.addEventListener('input', this.onCommentChange);

        container.appendChild(comment);
        this.topLevelComment.node = comment;

        // TODO: Replies and such

        // Add reply button
        // const reply = this.document.createElement('button');
        // reply.classList.add('comment-reply-button');
        // reply.innerText = 'Reply';
        // // TODO: Click event and such
        // container.appendChild(reply);

        this.container = container;
        this.parent.appendChild(container);
    }

    onCommentChange(e) {
        console.log('onCommentChange', e);

        // TODO: Debounce

        if (this.onUpdateHandler) {
            this.onUpdateHandler();
        }
    }

    /**
     * Convert newlines to <br> elements
     *
     * Author: https://stackoverflow.com/a/7467863
     */
    nl2br(str) {
        if (typeof str === 'undefined' || str === null) return '';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br/>$2');
    }

    /**
     * Return Document position of the anchored element
     */
    getAnchorRect() {
        const clientRect = this.anchor.node.getBoundingClientRect();
        const window = this.document.defaultView;
        const left = clientRect.left + window.scrollX;
        const top = clientRect.top + window.scrollY;

        return {
            left,
            top,
            right: left + clientRect.width,
            bottom: top + clientRect.height
        };
    }

    /**
     * Focus the user to the comment entry box
     */
    focus() {
        this.topLevelComment.node.focus();
    }

    /**
     * Set the absolute top position of this comment section in the document
     *
     * @param {integer} top
     */
    setTop(top) {
        this.container.style.top = `${top}px`;

        // TODO: Impl.
        this.updateSVGEdge();
    }

    /**
     * Should this comment section be displayed as a collapsed section
     *
     * @param {boolean} collapsed
     */
    setCollapsed(collapsed) {
        // TODO: Impl. Pretty much just a class change
    }

    /**
     * Reposition the SVG dashed line between this comment section and the anchor
     */
    updateSVGEdge() {
        if (!this.svg) {
            const svg = this.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const lineFromAnchor = this.document.createElementNS('http://www.w3.org/2000/svg', 'line');
            const lineToComment = this.document.createElementNS('http://www.w3.org/2000/svg', 'line');
            svg.classList.add('comment-svg');

            lineToComment.setAttribute('stroke-dasharray', '5, 5');
            lineToComment.setAttribute('stroke-dasharray', '5, 5');
            svg.appendChild(lineFromAnchor);
            svg.appendChild(lineToComment);
            this.document.body.appendChild(svg);

            // Monitor focus events on the parent.
            // IDEALLY, svg would just be a child of the container. But dealing with
            // positioning absolutely on the document is a PITA when factoring in a moving
            // container. So I just attach it straight to <body> instead and use events.
            this.container.addEventListener('mouseenter', () => svg.classList.add('is-focused'));
            this.container.addEventListener('mouseleave', () => svg.classList.remove('is-focused'));

            this.svg = svg;
            this.lineFromAnchor = lineFromAnchor;
            this.lineToComment = lineToComment;
        }

        const anchorRect = this.getAnchorRect();
        const commentRect = this.container.getBoundingClientRect();
        const bodyRect = this.document.body.getBoundingClientRect();
        const window = this.document.defaultView;

        const anchorPt = {
            // For elements that are full width of the page (e.g. blocks)
            // we won't have a proper overline. So we correct this by offsetting
            // to the right slightly.
            x: Math.max(anchorRect.left, anchorRect.right - 50),
            y: anchorRect.top - (bodyRect.top + window.scrollY)
        };

        // Bend at the right edge of the body window
        const bendPt = {
            x: bodyRect.right,
            y: anchorPt.y
        };

        // And connect to the comment box itself.
        const commentPt = {
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

    getHeight() {
        // TODO: Handle collapsed heights
        return this.container.getBoundingClientRect().height;
    }
}

export default CommentThread;
