
import React, { useRef, useState, useEffect } from 'react';

import { Comment } from './types';
import ReviewManager from './ReviewManager';

import './index.scss';

type Props = {
    /** Reviewable document source. This is full HTML DOM as a string */
    src: string;

    /** Array of initial comments to load once the IFrame has been mounted */
    comments: Comment[];

    /** Callback on when the user adds a new comment */
    onAddComment(comment: Comment): void;

    /** Callback on when the user modifies an existing comment */
    onUpdateComment(comment: Comment): void;

    /** Callback on when the user removes an existing comment */
    onRemoveComment(comment: Comment): void;

    /** Callback when the ReviewManager has finished binding to a Document */
    onReady(manager: ReviewManager): void;

    /** Username to use for new comments, and to determine if an existing comment is editable */
    defaultAuthor: string;
    
    /** Does the user have the power to update any comments */
    canEditAnyComment: boolean;

    id?: string;
    className?: string;
}

/*
Requirements blob:

- A "section" element containing one or more commentable elements (at any depth) requires:
    1. An `id` attribute which - obviously - must be unique across the entire document
    2. A `data-comment-section="Human Readable Name"` attribute
- Every element you want to support block comments (as in the entire element and
    all children can be clicked on and comments added, as a single block) requires:
    1. An `id` attribute
    2. A `data-comment-block="true"` attribute
- Every element you want to support inline comments (as in the user can highlight a segment
    of text within the element and link a comment to only that text segment) requires:
    1. An `id` attribute
    2. A `data-comment-inline="true"` attribute
    3. To contain no child elements and only text (e.g. no <strong>, <em>, etc)
*/

const DocumentReview: React.FC<Props> = ({
    src,
    comments,
    onAddComment,
    onUpdateComment,
    onRemoveComment,
    onReady,
    defaultAuthor,
    canEditAnyComment,
    id,
    className = ''
}) => {
    const iframe = useRef<HTMLIFrameElement>(null);

    // The majority of work for this component is just passing props 
    // through to the manager that works within the IFrame and outside of React.
    // This component does not support mutation of most props
    // TODO: Might have to though - how would that work?
    const [manager, ] = useState<ReviewManager>(() => {
        const manager = new ReviewManager();
        manager.initialComments = comments;
        manager.onAddComment = onAddComment;
        manager.onUpdateComment = onUpdateComment;
        manager.onRemoveComment = onRemoveComment;
        manager.onReady = onReady;
        manager.defaultAuthor = defaultAuthor;
        manager.canEditAnyComment = canEditAnyComment;
        return manager;
    });

    // TODO: Neato realtime sync with a backend via constant calls to the endpoints
    // and passing the new comment data back into manager.syncComments()

    // Once the iframe has loaded, hook the manager into it to start working outside of React. 
    useEffect(() => {
        if (!iframe.current) {
            return;
        }
    
        const iframeDocument = iframe.current.contentDocument || iframe.current.contentWindow?.document;
        if (!iframeDocument) {
            throw new Error('Could not obtain reference to iframe content document');
        }

        iframeDocument.write(src);
        iframeDocument.close();
        manager.bind(iframeDocument);
    }, [src, manager, iframe]);
    
    return (
        <div id={id} className={`document-review ${className}`}>
            <iframe ref={iframe} frameBorder="0" />
        </div>
    );
}

export default DocumentReview;
