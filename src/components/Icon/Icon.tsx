import { Icon as BaseIcon, IconProps as BaseIconProps } from '@osuresearch/iconography';
import React from 'react';
import { StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Box } from '../Box';

export type IconProps = StyleSystemProps &
  BaseIconProps & {
    /**
     * Use `display: block` for the icon container.
     */
    block?: boolean;

    /**
     * ARIA label for the icon. If omitted, the icon will have `role="presentation"`
     * and hidden from screen readers.
     */
    label?: string;
  };

/**
 * Icon documentation
 *
 * ## Accessibility
 * - If the icon has semantic meaning add a `label` to describe the icon
 *
 * <!-- @ruiPolymorphic -->
 */
export const Icon = polymorphicForwardRef<'i', IconProps>(
  ({ as, label, block, name, className, flip, rotate, style, size, svgProps, ...props }, ref) =>
  <Box
    as={as || 'i'}
    ref={ref}
    role={label ? 'img' : 'presentation'}
    aria-label={label}
    className={cx(
      {
        'rui-block rui-align-top': block,
        'rui-inline-block rui-align-middle': !block
      },
      className
    )}
    {...props}
  >
    <BaseIcon name={name} flip={flip} rotate={rotate} style={style} size={size} svgProps={svgProps} />
  </Box>
);
