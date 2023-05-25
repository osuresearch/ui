import React, { forwardRef } from 'react';

import { PositiveSpacing } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';

export type DividerProps = {
  /**
   * Amount of space between the divider and content
   */
  gap?: PositiveSpacing;

  /**
   * Divider orientation.
   *
   * This will only work when the container is setup with the
   * appropriate row or column flex layout.
   *
   * Use vertical dividers within `Groups` and horizontal
   * dividers within `Stacks`.
   */
  orientation?: 'horizontal' | 'vertical';
};

/**
 * Horizontal or vertical line to visually divide content
 *
 * ## Accessibility
 * - Uses `role="separator"` for both horizontal and vertical dividers
 * - Uses semantic `hr` element for horizontal dividers
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ gap = 'sm', orientation = 'horizontal' }, ref) => (
    <Box
      as={orientation === 'horizontal' ? 'hr' : 'div'}
      ref={ref}
      my={orientation === 'horizontal' ? gap : 0}
      mx={orientation === 'vertical' ? gap : 0}
      w={orientation === 'horizontal' ? '100%' : undefined}
      // h={orientation === 'vertical' ? '100%' : '0px'}
      maw={orientation === 'vertical' ? '0px' : undefined}
      mah={orientation === 'horizontal' ? '0px' : undefined}
      className={cx({
        'border border-light-shade': orientation === 'horizontal',
        'border border-light-shade self-stretch h-auto': orientation === 'vertical'
      })}
      role="separator"
    />
  )
);
