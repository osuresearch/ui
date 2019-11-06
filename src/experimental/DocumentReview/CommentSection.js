
/**
 * Manager for a section of comments within a document. This performs the heavy
 * lifting of manipulating content within an iframe document inside DocumentReview.
 *
 * This is *not* a React component. This is a direct DOM manager.
 */
class CommentSection {
    /**
     * @param {string} name Unique identifier for the section
     * @param {Document} document Document that comment DOM exists within
     * @param {HTMLElement} container Containing element that comments are associated with
     */
    constructor(name, document, container, onReplyHandler) {
        this.name = name;
        this.document = document;
        this.container = container;
        this.onReplyHandler = onReplyHandler;

        // Mapping between unique comment IDs and DOM elements
        this.comments = {};

        this.onClickNewComment = this.onClickNewComment.bind(this);
        this.onSubmitReply = this.onSubmitReply.bind(this);

        this.injectDOM();
    }

    /**
     * Inject DOM and event handlers required for this comment section into the document.
     *
     * This is a non-React system, since we're operating on a static HTML document
     * that's contained within an IFrame.
     */
    injectDOM() {
        // Create a button to add new comments to the section
        // const newCommentIcon = this.document.createElement('button');
        // newCommentIcon.classList.add('comments-add-reply');
        // newCommentIcon.innerText = 'New Comment';
        // newCommentIcon.addEventListener('click', this.onClickNewComment);

        this.container.classList.add('comment-section');

        // Add a container for all comments and our new comment form
        const comments = this.document.createElement('div');
        comments.classList.add('comments');

        const commentsContainer = this.document.createElement('div');
        commentsContainer.classList.add('comments-container');

        const newCommentButton = this.document.createElement('button');
        newCommentButton.classList.add('comments-add');
        newCommentButton.innerText = 'Add Comment';
        newCommentButton.addEventListener('click', this.onClickNewComment);

        // Add a field for inserting new replies / comments
        const reply = this.document.createElement('form');
        reply.innerHTML = `
            <textarea class="comment-textarea" placeholder="Add Comment"></textarea>
            <button class="comment-submit" type="submit">Submit</button>
        `;

        reply.addEventListener('submit', this.onSubmitReply);

        comments.appendChild(commentsContainer);
        comments.appendChild(newCommentButton);
        comments.appendChild(reply);

        // this.container.prepend(newCommentIcon);
        this.container.appendChild(comments);

        // this.newCommentIcon = newCommentIcon;
        this.block = comments;
        this.reply = reply;

        this.commentsContainer = commentsContainer;
    }

    /**
     * Insert a new comment into this section
     */
    addComment(id, author, date, message) {
        // if (id in this.comments) {
        //     return;
        // }

        // TODO: Deal with new comments separately somehow
        // since they won't have an ID. Maybe hash props instead?

        const comment = this.document.createElement('div');
        comment.classList.add('comment');

        const prettyDate = window.moment(date).fromNow();

        comment.innerHTML = `
            <div class="comment-info">${prettyDate} - ${author}</div>
            <div class="comment-content">${this.nl2br(message)}</div>
        `;

        this.commentsContainer.appendChild(comment);
        this.comments[id] = comment;

        this.block.classList.add('has-comments');
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

    onClickNewComment(e) {
        const textarea = this.reply.getElementsByTagName('textarea')[0];
        this.block.classList.add('has-reply-visible');
        // this.newCommentIcon.classList.add('has-reply-visible');

        // Wait for next repaint before focusing the comment box.
        // Because it could've been hidden before this was clicked,
        // and we can't focus() a hidden element.
        window.setTimeout(() => textarea.focus(), 100);

        e.preventDefault();
        return false;
    }

    /**
     * @param {Event} e
     */
    onSubmitReply(e) {
        const textarea = this.reply.getElementsByTagName('textarea')[0];
        const message = textarea.value;

        // Add immediately to the comment list
        this.addComment(null, '(You)', Date.now(), message);

        // Call listening delegate
        this.onReplyHandler(this, message);

        this.block.classList.remove('has-reply-visible');
        this.reply.reset();

        e.preventDefault();
        return false;
    }
}

export default CommentSection;
