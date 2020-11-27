import React from 'react';
import { Comment } from './types';
import ReviewManager from './ReviewManager';
import './index.scss';
declare type Props = {
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
};
declare const DocumentReview: React.FC<Props>;
export default DocumentReview;
//# sourceMappingURL=index.d.ts.map