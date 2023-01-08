import React from 'react';

import { cx } from '~/utils';

export type UnderlayProps = React.ComponentProps<'div'> & {
  variant?: 'default' | 'tint' | 'blur' | 'paranoid';
};

/**
 * The UNDERLAYER
 *
 * ## 🛑 Internal use only
 * The underlay is used by modal and callout components to
 * block interactions outside of their content containers.
 *
 * @internal
 */
export function Underlay({ variant = 'default', ...props }: UnderlayProps) {
  return (
    <div
      className={cx(
        'rui-fixed rui-inset-0 rui-z-40',
        { 'rui-opacity-50 rui-bg-light-tint': variant === 'tint' },
        { 'rui-backdrop-blur-sm': variant === 'blur' },
        { 'rui-backdrop-blur-xl': variant === 'paranoid' }
      )}
      {...props}
    />
  );
}
