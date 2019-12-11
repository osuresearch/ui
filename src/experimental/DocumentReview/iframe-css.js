
/**
 * CSS to be injected into the DocumentReview iframe.
 *
 * The reason it's CSS-in-JS in this way is because we directly
 * apply this CSS as a <style> tag within the iframe document
 * rather than attempting to load an external stylesheet request.
 */
const iframeCSS = `
/* DocumentReview Commenting CSS */
body {
    margin-right: 30%;
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

.comment-info {
    color: #666;
    font-size: 12px;
    margin-bottom: 4px;
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
`;

export default iframeCSS;
