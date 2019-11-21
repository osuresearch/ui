
import CommentThread from './CommentThread';
import iframeCSS from './iframe-css';

/**
 * Reference point in the document that a comment is linked to
 */
class CommentAnchor {
    constructor(range) {
        // Need to be able to support:
        // some DOM range that isn't wrapped yet (from another source)
        // or a section anchor
    }
}

/**
 * Management of positioning comments on the document sidebar
 */
class CommentSidebar {
    constructor(document, selectableBlockNodes, selectableTextNodes) {
        this.document = document;

        // List of CommentThread objects on the page
        this.threads = [];

        this.reflow = this.reflow.bind(this);

        // DOM selectors that can be selected as a whole block
        this.selectableBlockNodes = selectableBlockNodes;

        // DOM selectors that can have text inline selectable
        this.selectableTextNodes = selectableTextNodes;

        this.injectCSS();
        this.injectDOM();
    }

    /**
     * Add required CSS for highlighting, commenting, etc
     */
    injectCSS() {
        // Core static CSS
        let css = iframeCSS;

        // Dynamic CSS based on whitelisted selectors
        this.selectableBlockNodes.forEach((selector) => {
            css += `
                ${selector}:hover {
                    background: #fff2a8;
                    cursor: pointer;
                }
            `;
        });

        this.selectableTextNodes.forEach((selector) => {
            css += `
                ${selector} {
                    user-select: text;
                }
            `
        });

        const style = this.document.createElement('style');
        style.innerText = css;
        this.document.body.appendChild(style);
    }

    injectDOM() {
        // Add to Document.body, do things, etc.
        this.container = this.document.createElement('div');
        this.container.classList.add('comments-sidebar');
        this.document.body.appendChild(this.container);

        // Scrape the document and add hooks for adding comments
        this.document.querySelectorAll('[data-comment-section]').forEach((node) => {
            const section = node.dataset['commentSection'];

            const button = this.document.createElement('button');
            button.classList.add('add-comment');
            button.innerText = '📝';

            button.addEventListener('click', (e) => {
                this.insertComment(e.target, section);
                e.preventDefault();
                return false;
            });

            node.appendChild(button);
        });

        this.document.querySelectorAll(this.selectableBlockNodes).forEach((node) => {
            node.addEventListener('click', (e) => {
                this.insertComment(e.target, 'TODO: Section?');
                e.preventDefault();
                return false;
            });
        });

        // Shortcut for commenting on some highlighted text.
        // Eventually there will be a button, but this is for testing.
        this.document.addEventListener('keydown', (e) => {
            if (e.key === 'c') {
                if (this.tryCommentHighlighted()) {
                    e.preventDefault();
                    return false;
                }
            }
        });
    }

    /**
     * Experiment in adding a comment for some highlighted text block
     */
    tryCommentHighlighted() {
        /*
        There's a LOT that can go wrong here, and edge cases to handle:

            - How to guard selectable text from unselectable
                (e.g should they be able to select actual questions in the document?)
            - Dealing with links? (e.g. filenames)
            - What if they select something that intersects (not wraps) an already
                selected section? Or even just arbitrary DOM. E.g.:

                <p>Some text here that <strong>is bolded</strong> for emphasis</p>
                and they select "Some text here that is"

            For dealing with nested DOM, it's apparently a hard problem with no proper API.
            See:
            https://wikimedium-server.firebaseapp.com/wiki/Stack_Overflow
            https://stackoverflow.com/questions/6328718/how-to-wrap-surround-highlighted-text-with-an-element
            https://stackoverflow.com/questions/1730967/how-to-wrap-with-html-tags-a-cross-boundary-dom-selection-range
            https://github.com/webmodules/wrap-range
        */

        // For the simple case, we'll just do a selection range.
        // if it throws an exception, it means other DOM is in there
        // and it won't work without special bullshit.

        try {
            const range = this.document.getSelection().getRangeAt(0);

            if (this.isValidSelectionRange(range)) {
                const highlighter = this.document.createElement('span');
                highlighter.classList.add('comment-highlight');
                range.surroundContents(highlighter);
                this.insertComment(highlighter, '');
                return true;
            }
        } catch (e) {
            console.warn('Cannot highlight selection', e);
        }

        return false;
    }

    /**
     * @param {Range} range
     */
    isValidSelectionRange(range) {
        if (range.collapsed) return false;

        // Make sure it's not something in the sidebar
        if (this.isInSidebar(range.startContainer.parentElement)) {
            return false;
        }

        // TODO: Other conditions and such
        return true;
    }

    /**
     * @param {HTMLElement} el
     */
    isInSidebar(el) {
        do {
            if (el == this.container) {
                return true;
            }

            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);

        return false;
    }

    /**
     * @param {HTMLElement} node
     * @param {string} section
     */
    insertComment(node, section) {
        const instance = new CommentThread(
            section,
            this.document,
            node,
            this.container,
            null
        );

        // Reflow all comments whenever one is being updated
        instance.onUpdateHandler = this.reflow;

        const idx = this.findBestInsertIndex(instance.getAnchorRect().top);
        this.threads.splice(idx, 0, instance);

        // Reflow and focus once we get a DOM paint and alignment
        this.document.defaultView.requestAnimationFrame(() => {
            this.reflow();
            instance.focus();
        });
    }

    /**
     * @param {integer} top
     */
    findBestInsertIndex(top) {
        for (let i = 0; i < this.threads.length; i++) {
            if (this.threads[i].getAnchorRect().top > top) {
                return i;
            }
        }

        return this.threads.length;
    }

    /**
     * Callback for when the commented document reflows (width change)
     * to force all comment sections to recalculate their alignment
     */
    onResize() {
        this.reflow();
    }

    reflow() {
        this.minimizeDistances();
        // Anything else? If not, I can nuke this method.
    }

    /**
     * Minimize vertical distances between comments and the commented content
     */
    minimizeDistances() {
        let error = 99999; // LARGE overfitting. Will correct itself first run.
        let prevError = error + 1;

        // Construct a faster data structure to iterate through
        let sizes = [];
        for (let i = 0; i < this.threads.length; i++) {
            const section = this.threads[i];
            sizes.push({
                top: section.getAnchorRect().top,
                desiredTop: section.getAnchorRect().top,
                maxHeight: section.getHeight(),
                height: section.getHeight()
            });
        }

        // Brute force minimize the distances between document top
        // of each section given prior sections and the desired top

        // TODO: Less of a brute force approach. Shouldn't be too bad
        // since we're doing raw number crunching here instead of DOM
        // lookups - but would still be nice to optimize.
        let minimumTop = sizes[0].desiredTop;
        let offset = 0;

        const COLLAPSED_HEIGHT = 100;
        const PIXELS_PER_ITERATION = 20;

        let infTest = 0; // Just to play it safe in case I fuck up the algorithm
        while (prevError > error && infTest++ < 1) {
            // Shift up and recalculate error
            prevError = error;
            error = 0;

            // First comment is always at the topmost position
            sizes[0].top = minimumTop;
            sizes[0].height = sizes[0].maxHeight;

            for (let i = 1; i < sizes.length; i++) {
                let prevHeight = sizes[i - 1].maxHeight;

                // Test if the previous comment needs to be collapsed to improve error.
                // We do not allow the currently edited comment section to be collapsed
                /*if (sizes[i - 1].top + prevHeight > sizes[i].desiredTop
                    && i !== this.selectedSectionIndex
                ) {
                    sizes[i - 1].height = COLLAPSED_HEIGHT;
                    prevHeight = COLLAPSED_HEIGHT;
                }*/

                // Fit as tightly under the previous comment as possible
                // taking in account breaks for desired tops.
                sizes[i].top = Math.max(
                    sizes[i].desiredTop - offset,
                    sizes[i - 1].top + prevHeight
                );

                error += sizes[i].top - sizes[i].desiredTop;
            }

            // Shift topmost position up more in the document for
            // the next iteration of minimizing error
            // if (minimumTop > 0) {
            //     offset += PIXELS_PER_ITERATION;
            // }

            minimumTop = Math.max(0, minimumTop - offset);
            // console.log(`Minimum top set to ${minimumTop}`);
        }

        // Have updated positions after minimization, apply to the DOM
        for (let i = 0; i < sizes.length; i++) {
            // console.log(`${i} (${this.threads[i].name}) at ${sizes[i].top}px with height ${sizes[i].height}`);
            this.threads[i].setTop(sizes[i].top);
            this.threads[i].setCollapsed(sizes[i].height < sizes[i].maxHeight);
        }
    }
}

export default CommentSidebar;
