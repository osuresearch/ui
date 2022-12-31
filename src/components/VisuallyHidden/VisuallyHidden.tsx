import React, { forwardRef } from 'react';

export type VisuallyHiddenProps = {
  children?: React.ReactNode;
};

/**
 * Screen reader only content container
 *
 * ## Accessibility
 * - Content within this component are only visible to screen readers
 */
export const VisuallyHidden = forwardRef<HTMLDivElement, VisuallyHiddenProps>(
  ({ children }, ref) => (
    <div ref={ref} className="rui-sr-only">
      {children}
    </div>
  )
);
