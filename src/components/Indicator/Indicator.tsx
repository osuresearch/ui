import { ThemeSize } from '@osuresearch/ui';
import { bgc, Color, cx, hw, bc as _bc } from '@osuresearch/ui/theme';
import React from 'react';

export type IndicatorProps = {
  size?: ThemeSize;
  c?: Color;
  bc?: Color;

  /** Apply a ripple effect. Useful for notifications */
  ping?: boolean;
};

/**
 * A dot that can be used as an indicator to grab the user's attention
 */
export function Indicator({ size = 'lg', c = 'blue', bc = 'white', ping }: IndicatorProps) {
  return (
    <span className="relative inline-flex align-middle">
      <span className={cx('flex absolute -mt-4 -mr-4', hw(size))}>
        {ping && (
          <span
            className={cx(
              'animate-ping absolute inline-flex rounded-full opacity-75',
              'h-full w-full',
              bgc(c)
            )}
          />
        )}
        <span
          className={cx(
            // Solid dot
            'relative inline-flex rounded-full',
            hw(size),
            bgc(c),

            // Border
            'border-2',
            _bc(bc)
          )}
        />
      </span>
    </span>
  );
}
