import React, { forwardRef } from 'react';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

import { Box } from '../Box';

export type UnderlayProps = React.ComponentProps<'div'> & {
  blur?: boolean;
};

/**
 * The UNDERLAYER
 */
export function Underlay({ blur, ...props }: UnderlayProps) {
  return (
    <div
      className={cx(
        'rui-fixed rui-inset-0 rui-z-40',
        { 'rui-opacity-50 rui-bg-light-tint': !blur },
        { 'rui-backdrop-blur-sm': blur }
      )}
      {...props}
    />
  );
}
