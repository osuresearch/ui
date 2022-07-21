import React, { useEffect } from 'react';

type Props = {
    /** The title of the page - this will update `document.title` and be announced to screen reader users when this component is mounted */
    title: string;

    /** Optional className on the page container */
    className?: string;

    /** Optional id on the page container */
    id?: string;

    /** 
     * The element that will receive focus 
     * when the page is mounted (optional).
     * 
     * By default, this component will 
     * emulate native browser page change 
     * behavior by moving focus to the top
     * of the document body. 
     * 
     * However, there are use cases where 
     * it may be more appropriate to move 
     * the focus to an element instead, such
     * as an H1 or form input.
     * 
     * IMPORTANT: This ref MUST have a 
     * tabIndex to be focusable. Unless the
     * ref element is supposed to be in the
     * tab order (i.e. a form element, 
     * link, or button), set the tabIndex to
     * `-1`.
     */
    focusRef?: React.RefObject<HTMLElement>;
}

/** 
 * Page container for Single Page 
 * Applications.
 * 
 * Includes necessary accessibility 
 * enhancements for proper screen reader
 * and keyboard functionality.
 * 
 * Every page in the app MUST be wrapped
 * in this component unless it contains
 * only one (1) route, which is rare.
 * 
 */
const Page: React.FC<Props> = ({
    title,
    className,
    id,
    focusRef,
    children
}) => {
    useEffect(() => {
        /** Update the document title on page mount */
        document.title = title;

        let moveFocusTimer = 0;

        if (focusRef?.current) {
            // Move focus to ref
            // This needs to be in a short timeout due to a bug in the VoiceOver screen reader
            moveFocusTimer = window.setTimeout(() => {
                focusRef?.current?.focus();
            }, 250);
        } else {
            /**
             * Move focus to the very 
             * beginning of the 
             * document body, which will 
             * emulate the native browser 
             * behavior as closely as 
             * possible
             */
            const a11yPageRoot = document.getElementById('a11y-page-root');

            const updateAndFocus = (root: HTMLElement) => {
                // Update the inner text of the root
                root.innerText = `${title}, Start of web content`;
                // Move focus to root
                root.focus();
            }

            if (!a11yPageRoot) {
                // Element does not exist, so create it
                const newA11yPageRoot = document.createElement("div");

                newA11yPageRoot.id = 'a11y-page-root';
                // Make it focusable by screen readers
                newA11yPageRoot.tabIndex = -1;
                // Make it visible only to screen readers
                newA11yPageRoot.classList.add('sr-only');

                // Add root to body
                document.body.insertAdjacentElement('afterbegin', newA11yPageRoot);

                // Update the root text and move focus to it
                updateAndFocus(newA11yPageRoot);
            } else {
                // Update the root text and move focus to it
                updateAndFocus(a11yPageRoot);
            }
        }

        // Clear timeout on component unmount
        return () => clearTimeout(moveFocusTimer);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={className} id={id}>
            {children}
        </div>
    )
}

export default Page;
