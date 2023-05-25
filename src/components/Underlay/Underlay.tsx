import React from 'react';

import { cx } from '../../utils';

export type UnderlayProps = React.ComponentProps<'div'> & {
  variant?: 'default' | 'tint' | 'blur' | 'paranoid';
};

/**
 * The underlay is used by modal and callout components to
 * block interactions outside of their content containers.
 *
 * @internal
 */
export function Underlay({ variant = 'default', ...props }: UnderlayProps) {
  return (
    <div
      className={cx(
        'fixed inset-0 z-40',
        { 'opacity-50 bg-surface': variant === 'tint' },
        { 'backdrop-blur-sm': variant === 'blur' },
        { 'backdrop-blur-xl': variant === 'paranoid' }
      )}
      {...props}
    />
  );
}
