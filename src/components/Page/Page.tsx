import React, { useEffect } from 'react';

export interface PageProps {
  /** The title of the page - this will update `document.title` and be announced to screen reader users when this component is mounted */
  title: string;

  /** Optional className on the page container */
  className?: string;

  /** Optional id on the page container */
  id?: string;

  /**
   * The element that will receive focus when the page is mounted (optional).
   */
  focusRef?: React.RefObject<HTMLElement>;

  children?: React.ReactNode;
}

/**
 * Page container for Single Page Applications.
 *
 * Includes necessary accessibility enhancements for proper screen reader and keyboard functionality.
 *
 * Every page in the app MUST be wrapped in this component unless it contains only one (1) route, which is rare.
 *
 * ## Focus Management
 *
 * By default, when the `<Page>` component mounts, it will move the keyboard focus to a hidden container with
 * the `<Page>` title and helper text for screen reader users. Keyboard users can then navigate the page
 * starting at the top as if they were navigating a new page on a multipage website.
 *
 * In some use cases, the default behavior will result in a poorer user experience. For example,
 * the ideal user experience for a multipage form is for the focus to move directly to the new content
 * after the user presses the next or previous button.
 *
 * To achieve this behavior, the `<Page>` component accepts an optional `focusRef` prop.
 *
 * ## Implementation Options
 *
 * The preferred method is to use `<Page>` as the container of a component:
 * ```
 * function Workspace() {
 *  return (
 *    <Page
 *      title="Workspace - My App | Office of Research"
 *      id="workspace"
 *      className="one-column-page"
 *    >
 *      Workspace content...
 *    </Page>
 *  );
 * }
 * ```
 *
 * If you are retrofitting an older application using React Router, the simplest way to implement
 * this component is to wrap each Route element in App.tsx with a `<Page>`:
 * ```
 *  <main id="content">
 *    <Routes>
 *      <Route path="/" element={
 *        <Page title="My App | Office of Research">
 *          <Workspace />
 *        </Page>
 *      } />
 *      <Route element={
 *        <Page title="Page Not Found - My App | Office of Research">
 *          <NotFound />
 *        </Page>
 *      } />
 *    </Routes>
 * </main>
 * ```
 */
export function Page({ title, className, id, focusRef, children }: PageProps) {
  useEffect(() => {
    let moveFocusTimer = 0;

    if (focusRef?.current) {
      // Force a tab index if one isn't specified
      if (!focusRef.current.tabIndex) {
        focusRef.current.tabIndex = -1;
      }

      // Move focus to ref
      // This needs to be in a short timeout due to a bug in the VoiceOver screen reader
      moveFocusTimer = window.setTimeout(() => {
        focusRef?.current?.focus();
      }, 250);
    } else {
      // Move focus to the very beginning of the  document body, which will
      // emulate the native browser behavior as closely as possible
      const a11yPageRoot = document.getElementById('a11y-page-root');

      const updateAndFocus = (root: HTMLElement) => {
        root.innerText = `${title}, Start of web content`;
        root.focus();
      };

      if (!a11yPageRoot) {
        // Element does not exist, so create it
        const newA11yPageRoot = document.createElement('div');

        newA11yPageRoot.id = 'a11y-page-root';

        // Make it focusable by screen readers
        newA11yPageRoot.tabIndex = -1;

        // Make it visible only to screen readers
        // This is the same style rules as sr-only
        newA11yPageRoot.style.position = 'absolute';
        newA11yPageRoot.style.width = '1px';
        newA11yPageRoot.style.height = '1px';
        newA11yPageRoot.style.border = '0';
        newA11yPageRoot.style.margin = '-1px';
        newA11yPageRoot.style.overflow = 'hidden';

        // Add root to body
        document.body.insertAdjacentElement('afterbegin', newA11yPageRoot);

        updateAndFocus(newA11yPageRoot);
      } else {
        updateAndFocus(a11yPageRoot);
      }
    }

    return () => clearTimeout(moveFocusTimer);
  }, []);

  // Set/update the document title every time it changes
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
}
