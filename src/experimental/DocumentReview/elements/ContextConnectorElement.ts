import CommentElement from "./CommentElement";
import CommentContext from "../CommentContext";
import { Color } from "../types";
import { colorToCss, getDocumentRect } from "../utility";

/**
 * Simple SVG line that connects a comment to its context
 */
export default class ContextConnectorElement {
    private document: Document;
    private comment: CommentElement;
    private context: CommentContext;

    private svg: SVGSVGElement;
    private lineFromContext: SVGLineElement;
    private lineToComment: SVGLineElement;

    constructor(document: Document, comment: CommentElement, context: CommentContext, color: Color) {
        this.document = document;
        this.comment = comment;
        this.context = context;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('comment-context-connection');
        
        const lineFromContext = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        // lineFromContext.setAttribute('stroke-dasharray', '5, 5');
        lineFromContext.style.stroke = colorToCss(color);
        svg.appendChild(lineFromContext);
        
        const lineToComment = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        lineToComment.setAttribute('stroke-dasharray', '5, 5');
        lineToComment.style.stroke = colorToCss(color);
        svg.appendChild(lineToComment);

        // HAS To be a child of the comment because:
        // 1. if it's a child of `body` - when the TOC changes horizontal size
        //  this doesn't animate alongside it - thus being misaligned (and animating
        //  via JS that would be a significant performance loss - so no)
        // 2. if this is a child of the context element, then any element with 
        //  `position: relative` will screw up document-relative absolute positioning.
        //  So also out.
        // 3. CommentElement is the only thing we can control, DOM-wise. And it has
        //  the benefit of being horizontally fixed against the context. Any vertical
        //  movement will happen after a reflow - which ends up refreshing the edge as well.
        comment.container.prepend(svg);
        // document.body.appendChild(svg);
        // context.el.prepend(svg);
        
        this.svg = svg;
        this.lineFromContext = lineFromContext;
        this.lineToComment = lineToComment;

        this.refresh();
    }

    /** Remove this element from the DOM */
    public remove() {
        this.svg.remove();
    }

    /**
     * Recalculate alignment between comment & context
     */
    public refresh() {        
        // const contextRect = this.context.rect;

        // TODO: Load from a cached location
        const contextRect = this.context.rect;
        const commentRect = getDocumentRect(this.comment.container);

        const height = (commentRect.top - contextRect.top + 10);
        const width = (commentRect.left - contextRect.left);

        // The svg matches the top of the context - but relative to the comment
        // since it's a child of the comment's container
        this.svg.style.top = (contextRect.top - commentRect.top) + 'px';
        this.svg.style.left = (-width) + 'px';

        // Dimensions of the SVG need to encapsulate the lines (+ a bit of padding when
        // things are perfectly lined up - so we have enough pixels for drawing edges)

        this.svg.style.height = height + 'px';
        this.svg.style.width = width + 'px';
        
        // Anchor point between the comment and the context (bends the svg arm)
        const anchorLeft = contextRect.width;
        const anchorTop = 0;

        // This doesn't start at `left: 0` because if the context is an inline element
        // that wraps in the document (e.g. text range) the top left point of the containing 
        // rect may not be within the highlighted block. The safest bet is placing this 
        // on the right edge with roughly the width of a couple letters.
        const left = contextRect.width - 20;

        this.lineFromContext.setAttribute('x1', left + 'px');
        this.lineFromContext.setAttribute('y1', '0');
        this.lineFromContext.setAttribute('x2', anchorLeft + '');
        this.lineFromContext.setAttribute('y2', anchorTop + '');

        this.lineToComment.setAttribute('x1', anchorLeft + '');
        this.lineToComment.setAttribute('y1', anchorTop + '');
        this.lineToComment.setAttribute('x2', (commentRect.left - contextRect.left) + '');
        this.lineToComment.setAttribute('y2', (commentRect.top - contextRect.top) + '');
    }
}
