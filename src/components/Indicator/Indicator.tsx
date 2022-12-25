import { Box, DefaultProps, ThemeSize } from '@osuresearch/ui';
import { bgc, Color, cx, hw, bc as _bc } from '@osuresearch/ui/theme';
import React from 'react';

export type IndicatorProps = {
  size?: ThemeSize;

  c?: Color;

  /** Apply a ripple effect. Useful for notifications */
  ping?: boolean;
};

/**
 * A dot that can be used as an indicator to grab the user's attention
 */
export function Indicator({ size = 'sm', c = 'primary', ping, ...props }: IndicatorProps) {
  return (
    <Box className="rui-relative rui-inline-flex rui-align-middle" {...props}>
      <Box mt="-xxs" mr="-xxs" className={cx('rui-flex rui-absolute')} w={size} h={size}>
        {ping && (
          <Box
            bgc={c}
            h={size}
            w={size}
            className={cx(
              // Surrounding animation
              'rui-animate-ping rui-absolute rui-inline-flex rui-rounded-full rui-opacity-75'
            )}
          />
        )}
        <Box
          bgc={c}
          h={size}
          w={size}
          className={cx(
            // Solid dot
            'rui-relative rui-inline-flex rui-rounded-full',

            // Border
            'rui-border-2',
            'rui-border-light-tint'
          )}
        />
      </Box>
    </Box>
  );
}
