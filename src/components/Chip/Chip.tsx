import { PressEvent } from '@react-types/shared';
import React from 'react';

import { bc } from '~/theme';
import { Color, StyleSystemProps } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';
import { Button } from '../Button';
import { CloseButton } from '../CloseButton';
import { Group } from '../Group';

export type ChipProps = StyleSystemProps & {
  variant?: 'solid' | 'outline' | 'indicator';

  children?: React.ReactNode;

  isRemovable: boolean;

  /** Handler that is called when the press is released over the remove button. */
  onRemove?: (e: PressEvent) => void;
};

/**
 * Display chip, pill or tag
 *
 * ## Accessibility
 * - Check contrast of your chip against light and dark themes.
 *  Some variants and colors may work with one but not the other.
 *
 * <!-- @ruiPolymorphic -->
 */
export const Chip = polymorphicForwardRef<'div', ChipProps>(
  ({ as, c = 'light', variant = 'solid', isRemovable, onRemove, children, ...props }, ref) => (
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
      <Group align="center" justify="center" px="xxs" gap="xxs" mr="xs">
        {variant === 'indicator' && <Box className="rui-rounded-full" w={12} h={12} bgc={c} />}

        {children}

        {isRemovable && (
          <CloseButton p={0} iconProps={{ p: 'xxs' }} mr="-xs" label="Remove" onPress={onRemove} />
        )}
      </Group>
    </Box>
  )
);
