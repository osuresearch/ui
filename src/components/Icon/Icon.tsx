import { Icon as BaseIcon, IconProps as BaseIconProps } from '@osuresearch/iconography';
import React from 'react';

import { useStyleSystemProps } from '../../hooks/useStyleSystemProps';
import { StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Box } from '../Box';

export type IconProps = StyleSystemProps &
  BaseIconProps & {
    /**
     * Use `display: block` for the icon container.
     */
    block?: boolean;
  };

/**
 * Icon documentation
 *
 * ## Accessibility
 * - If the icon has semantic meaning add an `aria-label` to describe the icon
 *
 * <!-- @ruiPolymorphic -->
 */
export const Icon = polymorphicForwardRef<'i', IconProps>(
  ({ as, name, block, className, style, ...props }, ref) => {
    const [styleSystemProps, iconProps] = useStyleSystemProps(props);
    return (
      <Box
        as={as || 'i'}
        ref={ref}
        role="img"
        style={style}
        className={cx(
          {
            'block align-top': block,
            'inline-block align-middle': !block
          },
          className
        )}
        {...styleSystemProps}
      >
        <BaseIcon name={name} {...iconProps} />
      </Box>
    );
  }
);
