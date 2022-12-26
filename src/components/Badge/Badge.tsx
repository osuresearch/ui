import React, { forwardRef } from 'react';
import { Group, DefaultProps, Indicator, Box } from '@osuresearch/ui';
import { createPolymorphicComponent } from '@osuresearch/ui/utils';
import { cx, bc, Color } from '@osuresearch/ui/theme';

export type BadgeProps = DefaultProps & {
  variant?: 'solid' | 'indicator';

  children?: React.ReactNode;
};

const _Badge = forwardRef<HTMLDivElement, BadgeProps & { component: any }>(
  ({ component = 'div', c = 'info', variant = 'solid', children, ...props }, ref) => (
    <Box
      component={component}
      // Solid variant uses c as the background color.
      // Outline/dot use c as the border and
      bgc={variant === 'solid' ? `${c}-tint` : undefined}
      c={variant === 'solid' ? `${c}-contrast` : 'light-contrast'}
      fs="sm"
      fw="semibold"
      h="lg"
      align="top"
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

export const Badge = createPolymorphicComponent<'div', BadgeProps>(_Badge);
