import React, { forwardRef } from 'react';

import { Color, bc } from '~/theme';
import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';
import { polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';
import { Group } from '../Group';
import { Indicator } from '../Indicator';

export type BadgeProps = StyleSystemProps & {
  variant?: 'solid' | 'indicator';

  children?: React.ReactNode;
};

export const Badge = polymorphicForwardRef<'div', BadgeProps>(
  ({ as, c = 'info', variant = 'solid', children, ...props }, ref) => (
    <Box
      as={as || 'div'}
      // Solid variant uses c as the background color.
      // Outline/dot use c as the border and
      bgc={variant === 'solid' ? `${c}-tint` : undefined}
      c={variant === 'solid' ? `${c}-contrast` : 'light-contrast'}
      fs="sm"
      fw="semibold"
      h="lg"
      // align="top"
      className={cx('rui-border rui-rounded-full rui-inline-block', {
        [bc(c as Color)]: variant === 'solid'
      })}
      {...props}
    >
      <Group align="center" px="sm">
        {variant === 'indicator' && <Indicator size="sm" mt="-sm" mr="xxs" c={c} />}
        {children}
      </Group>
    </Box>
  )
);
