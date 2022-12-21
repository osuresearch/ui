import React from 'react';
import { ThemeColor } from '../../types';
import { contrast } from '../../utils/theme';
import { bc, bg, tc, cx } from '../../styles';
import { Indicator } from '../Indicator';

export type BadgeProps = {
  c?: ThemeColor;

  variant?: 'solid' | 'outline' | 'dot';

  children?: React.ReactNode;
};

/**
 * Display badge, pill or tag
 */
export function Badge({ c = 'gray', variant = 'solid', children }: BadgeProps) {
  return (
    <div
      className={cx({
        'border': true,
        'rounded-full': true,
        'inline-block': true,
        'text-xs': true,
        'font-bold': true,
        'px-8': true,

        // Solid: solid bg + contrasting fg
        [bg(c)]: variant === 'solid',
        [tc(contrast(c))]: variant === 'solid',
        [bc(c)]: variant === 'solid',

        // Outline: transparent bg, bc and fg are the theme
        [tc(c)]: variant === 'outline',

        // Dot: Gray. But there will be an added dot icon prefix
        'border-gray ': variant === 'dot',
        'text-gray-shade-40 dark:text-gray': variant === 'dot'
      })}
    >
      {variant === 'dot' && (
        <span className="pr-md">
          <Indicator size="sm" c={c} bc={c} />
        </span>
      )}
      {children}
    </div>
  );
}
