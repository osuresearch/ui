
/**
 * CSS to be injected into the DocumentReview iframe.
 *
 * The reason it's CSS-in-JS in this way is because we directly
 * apply this CSS as a <style> tag within the iframe document
 * rather than attempting to load an external stylesheet request.
 */
// TODO: This is just a mess of me constantly re-pasting from chrome. Clean up.
const iframeCSS = `
/* DocumentReview Commenting CSS */
body {
    /* Add a right margin for the commenting.
        We do this to the full body so that we don't
        need to worry about complex DOM structures
        and work entirely outside of it */
    margin-right: 300px;
    position: relative;
}

.comments-sidebar {
    position: absolute;
    border-left: 1px solid #DDD;
    top: 0;
    right: -300px;
    width: 200px;
    height: 100%;
}

.comment-section {
    position: absolute;
    border: 1px solid rgba(255, 0, 0, 0.5);
}

.comment-svg {
    position: absolute;
    top: 0;
    left: 0;

    /* Width needs to overflow out of the body to also expand
        to the comment sidebar */
    width: calc(100% + 300px);
    height: 100%;

    /* Ignore events on the line - it's just visual */
    pointer-events: none;
    z-index: -1;
}

.comment-svg line {
    stroke: rgba(255, 0, 0, 0.5);
    stroke-width: 1;
}

/* Swap to a solid line when focused */
.comment-svg.is-focused line {
    stroke-dasharray: none;
}

.comment-highlight {
    background: rgba(255, 0, 0, 0.2);
    border-left: 1px solid rgba(255, 0, 0, 0.5);
    border-right: 1px solid rgba(255, 0, 0, 0.5);
}

.comments {
    font-size: 14px;
    font-weight: normal;

    display: inline-block;

    float: right;
    margin-right: -40%;
    width: 40%;

    margin-left: 8px;
    margin-bottom: 16px;
}

.comment {
    background: #d4e1e2;
    border-color: #bed2d3;

    padding: 8px;
    margin-top: 8px;
}

.comment:nth-of-type(odd) {
    border: 1px solid #d4e1e2;
    background: #e9f0f0;
}

.comment-header {
    color: #666;
}

.comment-textarea {
    display: block;
    width: 100%;
    border: 1px solid red;
    resize: vertical;
    padding: 8px;
    margin-bottom: 8px;
}

.comment-submit {
    float: right;
    border: 0;
    background: none;
    cursor: pointer;
    color: #3283c8;
    margin: 0;
    padding: 0;
}

.comments-add {
    border: 0;
    background: none;
    cursor: pointer;
    color: #3283c8;
    margin: 0;
    padding: 0;
    margin-top: 4px;
}

.comments-add:before {
    content: '\\0270E';
    font-size: 18px;
    vertical-align: middle;
    padding-right: 4px;
}

/* Flow control of the document for long comment sections */
.comment-section {
    clear: both;
}

/* Visibility states of individual components */
.comments form {
    display: none;
}

.comments.has-reply-visible form {
    display: block;
}

.comments.has-reply-visible .comments-add {
    display: none;
}


.comment-section {
    width: 100%;
    box-sizing: border-box;

    padding: 4px;
    font-size: 12px;
  }

  .comment-info {
    white-space: nowrap;
    float: right;
  }

  .comment-delete,
  .comment-reply-button {
    font-size: 10px;
    border: 0;
    color: blue;
    background: none;
    margin: 0;
    padding: 0;
  }

  .comment-reply-button {
    float: right;
  }


.comment-editable {
    padding: 4px 0;
    min-height: 12px;
}

/* Hide extra controls until the comment box is focused by the user */
.comment-info,
.comment-reply-button {
  display: none;
}

.comment-section:hover .comment-info,
.comment-section:hover .comment-reply-button,
.comment-section.is-focused .comment-info,
.comment-section.is-focused .comment-reply-button  {
  display: inline;
}

.comment-section {
  border: 0;
  border-left: 1px solid red;
}

.comment-section:hover,
.comment-section.is-focused {
  border: 1px solid red;
}

.add-comment {
    font-size: 16px;
    border: 0;
    background: 0;
    padding: 0;
    margin: 5px;
    cursor: pointer;
}

`;

export default iframeCSS;
