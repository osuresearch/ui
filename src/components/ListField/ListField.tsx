import React, { forwardRef } from 'react';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

import { Box } from '../Box';

export type ListFieldProps = StyleSystemProps & {
  /* Your props */

  children?: React.ReactNode;
};

/**
 *
 * ## 🛑 Disclaimer
 * In most cases, you should not use this component in your application.
 * This is a base for other specialized fields to implement.
 *
 */
export const ListField = forwardRef<HTMLDivElement, ListFieldProps>(
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
