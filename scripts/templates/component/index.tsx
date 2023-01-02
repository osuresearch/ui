import React, { forwardRef } from 'react';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

import { Box } from '../Box';

export type __TEMPLATE__Props = StyleSystemProps & {
  /* Your props */

  children?: React.ReactNode;
};

/**
 * __TEMPLATE__ documentation
 *
 * ## Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const __TEMPLATE__ = forwardRef<HTMLDivElement, __TEMPLATE__Props>(
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
