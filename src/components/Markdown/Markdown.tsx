import React, { forwardRef } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';

export type MarkdownProps = StyleSystemProps & {
  /* Your props */

  children?: React.ReactNode;
};

/**
 * Markdown documentation
 *
 * ## Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const Markdown = forwardRef<HTMLDivElement, MarkdownProps>(
  ({ className, children, ...styleSystemProps }, ref) => (
    <Box
      as="div"
      ref={ref}
      className={cx(
        // Your custom styles
        className
      )}
      {...styleSystemProps}
    >
      {children}
    </Box>
  )
);
