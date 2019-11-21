
import React from 'react';
import PropTypes from 'prop-types';

import CommentThread from './CommentThread';
import CommentSidebar from './CommentSidebar';

import './index.scss';

class DocumentReview extends React.Component {
    constructor(props) {
        super(props);

        this.iframe = React.createRef();
        this.onFrameDocumentLoad = this.onFrameDocumentLoad.bind(this);
        this.onLoadComments = this.onLoadComments.bind(this);
        this.onSubmitReply = this.onSubmitReply.bind(this);
        this.error = this.error.bind(this);

        this.state = {
            comments: null,
            isDocumentReady: false
        };

        // Mapping between section IDs and CommentSection classes
        this.sections = {};
    }

    componentDidMount() {
        this.iframe.current.addEventListener('load', this.onFrameDocumentLoad);
        this.fetchComments();
    }

    /**
     * Ask the API for an updated list of comments to render
     */
    fetchComments() {
        if (typeof(this.props.comments) !== 'function') {
            throw new Error('Expected `comments` prop to be a function');
        }

        const promise = this.props.comments();

        if (!(promise instanceof Promise)) {
            throw new Error('Expected `comments` prop function to return a Promise');
        }

        promise.then(this.onLoadComments).catch(this.error);
    }

    /**
     * Apply comments in state to the loaded document
     */
    applyCommentsToDocument() {
        const { comments, isDocumentReady } = this.state;

        if (comments === null || !isDocumentReady) {
            throw new Error('applyCommentsToDocument() called too early');
        }

        comments.forEach((resource) => {
            const attr = resource.attributes;
            const section = this.sections[attr.section];

            if (!section) {
                console.warn(
                    `Cannot load comment ${resource.id}: Section "${attr.section}" ` +
                    'does not exist in the current document'
                );
                return;
            }

            section.addComment(resource.id, attr.author, attr.date, attr.message);
        });
    }

    /**
     * Add comments to state
     */
    onLoadComments(json) {
        this.setState({
            comments: json.data
        }, () => {
            if (this.state.isDocumentReady) {
                this.applyCommentsToDocument();
            }
        });
    }

    error(e) {
        console.error(e);

        // do stuff.
    }

    /**
     * Event callback for when the embedded IFrame finishes loading a document.
     * Will inject comment blocks / controls into every commentable section.
     */
    onFrameDocumentLoad() {
        const frameDoc = this.iframe.current.contentDocument;

        this.sidebar = new CommentSidebar(
            this.iframe.current.contentDocument,
            this.props.blockNodes,
            this.props.textNodes
        );

        // Scrape the document and inject comment blocks. Since we're working within
        // an iframe here and there's minimal JS to deal with, we'll just be
        // dropping down to the pure Javascript API and ignore React.
        /*frameDoc.querySelectorAll('[data-comment-section]').forEach((node) => {
            const section = node.dataset['commentSection'];
            this.sections[section] = new CommentSection(
                section,
                frameDoc,
                node,
                this.onSubmitReply
            );
        });*/

        // Try to load in the comments, assuming we're both
        // document ready + comment data ready.
        this.setState({
            isDocumentReady: true
        }, () => {
            if (this.state.comments !== null) {
                this.applyCommentsToDocument();
            }
        });
    }

    /**
     * Handler for when the user submits a new comment/reply
     *
     * @param {CommentSection} section
     * @param {string} message
     */
    onSubmitReply(section, message) {
        // TODO: POST to the server
    }

    render() {
        return (
            <div className="document-review">
                <iframe ref={this.iframe} src={this.props.document} />
            </div>
        );
    }
}

DocumentReview.propTypes = {
    /**
     * Function that returns a `Promise` that resolves
     * to comment API data already JSON decoded.
     */
    comments: PropTypes.func.isRequired,

    /**
     * Endpoint to reviewable document HTML
     */
    document: PropTypes.string.isRequired,

    /**
     * DOM node selectors that support commenting on the full element.
     *
     * When the user mouses over these nodes, they will be highlighted
     * and allow the user to click to enter a new comment chain.
     */
    blockNodes: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * DOM node selectors that support commenting on text ranges.
     *
     * When the user selects a range of text within these nodes,
     * they can add a new comment chain tied to that specific range.
     */
    textNodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DocumentReview.defaultProps = {
    comments: null,
    document: null,
    blockNodes: ['h1', 'h2', 'h3'],
    textNodes: ['p']
};

export default DocumentReview;
