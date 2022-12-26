import { Box } from '@osuresearch/ui';
import React, { forwardRef } from 'react';

import { cx } from '@osuresearch/ui/theme/utils';
import { PositiveSpacing } from '@osuresearch/ui/types';

export type DividerProps = {
  gap?: PositiveSpacing;
  orientation?: 'horizontal' | 'vertical';
};

/**
 * Horizontal or vertical line
 *
 * ### Accessibility
 * - Uses `role="separator"`
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ gap = 'sm', orientation = 'horizontal' }, ref) => (
    <Box
      ref={ref}
      my={orientation === 'horizontal' ? gap : 0}
      mx={orientation === 'vertical' ? gap : 0}
      className={cx({
        'rui-border rui-border-light-shade': orientation === 'horizontal',
        'rui-border rui-border-light-shade rui-self-stretch rui-h-auto': orientation === 'vertical'
      })}
      role="separator"
    />
  )
);
