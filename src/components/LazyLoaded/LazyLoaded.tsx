import React, { useEffect, useRef, useState } from 'react';

import { VisuallyHidden } from '../VisuallyHidden';

export interface LazyLoadedProps {
  /**
   * The loading state
   */
  loading: boolean;

  /**
   * Placeholder to display while content is loading.
   * Common patterns for this are spinners and skeletons.
   */
  placeholder: React.ReactNode;

  /**
   * Message announced to screen reader users if they navigate to this component. (optional)
   *
   * Defaults to `"Content loading"`
   */
  loadingMessage?: string;

  /**
   * Message announced to users once the content is loaded if their screen
   * reader is still focused on this component.
   *
   * Only some screen readers will announce this text
   *
   * Defaults to `"Content load complete"`
   */
  loadedMessage?: string;

  children: React.ReactNode;
}

/**
 * Wrapper component for lazy loaded content.
 *
 * Handles the conditional display of placeholder content and hooks into the
 * ARIA accessibility API for good screen reader UX.
 */
export function LazyLoaded(props: LazyLoadedProps) {
  const {
    loading,
    placeholder,
    loadingMessage = 'Content loading',
    loadedMessage = 'Content load complete',
    children,
  } = props;

  const message = loading ? loadingMessage : loadedMessage;

  const loader = useRef<HTMLDivElement>(null);

  const [loaderActive, setLoaderActive] = useState(true);

  useEffect(() => {
    if (loading) {
      setLoaderActive(true);
    }
  }, [loading]);

  useEffect(() => {
    let inactivateLoaderTimer = 0;

    // Wait 1 second to remove the loader container from the DOM
    // to ensure that the loaded message is read
    if (!loading) {
      inactivateLoaderTimer = window.setTimeout(() => {
        setLoaderActive(false);
      }, 1000);
    }

    return () => window.clearTimeout(inactivateLoaderTimer);
  }, [loading]);

  const [ariaLive, setAriaLive] = useState<'off' | 'polite' | 'assertive'>('off');

  useEffect(() => {
    if (loader.current) {
      // Change aria-live status to polite if screen reader user is focused on loader.
      // This will ensure that the user is notified once the loading is complete, but
      // only if they are engaging with the loader.
      if (document.activeElement === loader.current) {
        setAriaLive('polite');
      } else {
        setAriaLive('off');
      }
    }
  }, [loading]);

  return (
    <>
      {loaderActive && (
        <div
          ref={loader}
          // Needs a negative tab index to be recognized as the document.activeElement
          tabIndex={-1}
          className="lazy-loader"
          role="status"
          aria-live={ariaLive}
          aria-label={message}
        >
          <VisuallyHidden>
            {
              loading && message
              // This is kind of stupid, but the screen reader will not announce
              // the initial message from the aria-label unless it is a child, but
              // will read the finished message twice if it is not removed
            }
          </VisuallyHidden>

          {loading && placeholder}
        </div>
      )}

      {!loading && children}
    </>
  );
}
