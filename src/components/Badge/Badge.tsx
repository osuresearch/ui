import React from 'react';

import { Color, bc } from '~/theme';
import { StyleSystemProps } from '~/types';
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
 * ## Accessibility
 * - Check contrast of your badge against light and dark themes.
 *  Some variants and colors may work with one but not the other.
 *
 * <!-- @ruiPolymorphic -->
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
        }[variant] as Color
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
        {variant === 'indicator' && <Indicator size={12} mt="-sm" pr="sm" c={c} />}
        {children}
        {/* <CloseButton size={14} p="xxs" /> */}
      </Group>
    </Box>
  )
);
