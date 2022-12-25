import React from 'react';
import { ThemeColor } from '@osuresearch/ui/theme';
import { bc, bgc, tc, cx } from '../../theme/utils';
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
        'rui-border': true,
        'rui-rounded-full': true,
        'rui-inline-block': true,
        'rui-text-xs': true,
        'rui-font-bold': true,
        'rui-px-8': true,

        // Solid: solid bg + contrasting fg
        [bgc(c)]: variant === 'solid',
        [tc(c)]: variant === 'solid',
        [bc(c)]: variant === 'solid',

        // Outline: transparent bg, bc and fg are the theme
        [tc(c)]: variant === 'outline',

        // Dot: Gray. But there will be an added dot icon prefix
        'rui-border-gray ': variant === 'dot',
        'rui-text-gray-shade-40 rui-dark:text-gray': variant === 'dot'
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
