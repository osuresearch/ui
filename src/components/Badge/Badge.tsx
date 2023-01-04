import React, { forwardRef } from 'react';

import { Color, bc } from '~/theme';
import { ColorProp, StyleSystemProps } from '~/types';
import { cx } from '~/utils';
import { polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';
import { Group } from '../Group';
import { Indicator } from '../Indicator';

export type BadgeProps = StyleSystemProps & {
  variant?: 'solid' | 'outline' | 'indicator';

  children?: React.ReactNode;
};

/**
 * Display badge, pill or tag
 *
 * ## Polymorphic
 * - You can use the `as` prop to change the root element for this component.
 *
 * ## Accessibility
 * - Check contrast of your badge against light and dark themes.
 *  Some variants and colors may work with one but not the other.
 */
export const Badge = polymorphicForwardRef<'div', BadgeProps>(
  ({ as, c = 'light', variant = 'solid', children, ...props }, ref) => (
    <Box
      as={as || 'div'}
      bgc={variant === 'solid' ? c : undefined}
      c={
        {
          solid: `${c}-contrast`,
          outline: c,
          indicator: 'light-contrast'
        }[variant] as ColorProp
      }
      fs="xs"
      fw="semibold"
      className={cx('rui-border rui-rounded-full rui-inline-block', {
        [bc(c as Color)]: variant !== 'indicator',
        'rui-border-dimmed': variant === 'indicator' || c === 'dimmed'
      })}
      {...props}
    >
      <Group align="center" justify="center" px="xs" gap="xxs">
        {variant === 'indicator' && <Indicator size={12} mt="-sm" c={c} />}
        {children}
      </Group>
    </Box>
  )
);
