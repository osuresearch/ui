import React, { forwardRef } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';

export type ListFieldProps = StyleSystemProps & {
  /* Your props */

  children?: React.ReactNode;
};

/**
 *
 * <img class="rui-diagram" src="./ListField.svg" alt="Component diagram" />
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
