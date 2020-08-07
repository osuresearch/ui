export default DocumentReview;
declare class DocumentReview extends React.Component<any, any, any> {
    constructor(props: any);
    iframe: React.RefObject<any>;
    /**
     * Event callback for when the embedded IFrame finishes loading a document.
     * Will inject comment blocks / controls into every commentable section.
     */
    onFrameDocumentLoad(): void;
    /**
     * Add comments to state
     */
    onLoadComments(json: any): void;
    /**
     * Handler for when the user submits a new comment/reply
     *
     * @param {CommentSection} section
     * @param {string} message
     */
    onSubmitReply(section: any, message: string): void;
    error(e: any): void;
    sections: {};
    /**
     * Ask the API for an updated list of comments to render
     */
    fetchComments(): void;
    /**
     * Apply comments in state to the loaded document
     */
    applyCommentsToDocument(): void;
    sidebar: CommentSidebar | undefined;
}
declare namespace DocumentReview {
    export namespace propTypes {
        export const className: PropTypes.Validator<string>;
        export const comments: PropTypes.Validator<(...args: any[]) => any>;
        export const document: PropTypes.Validator<string>;
        export const blockNodes: PropTypes.Validator<(string | null | undefined)[]>;
        export const textNodes: PropTypes.Validator<(string | null | undefined)[]>;
    }
    export namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const comments_1: null;
        export { comments_1 as comments };
        const document_1: null;
        export { document_1 as document };
        const blockNodes_1: string[];
        export { blockNodes_1 as blockNodes };
        const textNodes_1: string[];
        export { textNodes_1 as textNodes };
    }
}
import React from "react";
import CommentSidebar from "./CommentSidebar";
import PropTypes from "prop-types";
//# sourceMappingURL=index.old.d.ts.map