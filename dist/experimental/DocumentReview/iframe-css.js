"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * CSS to be injected into the DocumentReview iframe.
 *
 * The reason it's CSS-in-JS in this way is because we directly
 * apply this CSS as a <style> tag within the iframe document
 * rather than attempting to load an external stylesheet request.
 */
var iframeCSS = "\n/* DocumentReview Commenting CSS */\nbody {\n    margin-right: 30%;\n}\n\n.comments {\n    font-size: 14px;\n    font-weight: normal;\n\n    display: inline-block;\n\n    float: right;\n    margin-right: -40%;\n    width: 40%;\n\n    margin-left: 8px;\n    margin-bottom: 16px;\n}\n\n.comment {\n    background: #d4e1e2;\n    border-color: #bed2d3;\n\n    padding: 8px;\n    margin-top: 8px;\n}\n\n.comment:nth-of-type(odd) {\n    border: 1px solid #d4e1e2;\n    background: #e9f0f0;\n}\n\n.comment-info {\n    color: #666;\n    font-size: 12px;\n    margin-bottom: 4px;\n}\n\n.comment-textarea {\n    display: block;\n    width: 100%;\n    border: 1px solid red;\n    resize: vertical;\n    padding: 8px;\n    margin-bottom: 8px;\n}\n\n.comment-submit {\n    float: right;\n    border: 0;\n    background: none;\n    cursor: pointer;\n    color: #3283c8;\n    margin: 0;\n    padding: 0;\n}\n\n.comments-add {\n    border: 0;\n    background: none;\n    cursor: pointer;\n    color: #3283c8;\n    margin: 0;\n    padding: 0;\n    margin-top: 4px;\n}\n\n.comments-add:before {\n    content: '\\0270E';\n    font-size: 18px;\n    vertical-align: middle;\n    padding-right: 4px;\n}\n\n/* Flow control of the document for long comment sections */\n.comment-section {\n    clear: both;\n}\n\n/* Visibility states of individual components */\n.comments form {\n    display: none;\n}\n\n.comments.has-reply-visible form {\n    display: block;\n}\n\n.comments.has-reply-visible .comments-add {\n    display: none;\n}\n";
var _default = iframeCSS;
exports.default = _default;