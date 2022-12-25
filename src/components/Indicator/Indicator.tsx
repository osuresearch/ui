import { Box, DefaultProps, ThemeSize } from '@osuresearch/ui';
import { bgc, Color, cx, hw, bc as _bc } from '@osuresearch/ui/theme';
import React from 'react';

export type IndicatorProps = DefaultProps & {
  size?: ThemeSize;

  /** Apply a ripple effect. Useful for notifications */
  ping?: boolean;
};

/**
 * A dot that can be used as an indicator to grab the user's attention
 */
export function Indicator({ size = 'sm', c = 'primary', ping, ...props }: IndicatorProps) {
  return (
    <Box className="relative inline-flex align-middle" {...props}>
      <Box className={cx('flex absolute -mt-4 -mr-4', hw(size))}>
        {ping && (
          <Box
            bgc={c}
            h="full"
            w="full"
            className={cx('animate-ping absolute inline-flex rounded-full opacity-75')}
          />
        )}
        <Box
          bgc={c}
          h={size}
          w={size}
          className={cx(
            // Solid dot
            'relative inline-flex rounded-full',

            // Border
            'border-2',
            'border-light'
          )}
        />
      </Box>
    </Box>
  );
}
