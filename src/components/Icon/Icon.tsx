import { Icon as Iconify } from '@iconify/react/dist/offline';
import React from 'react';

// Note that we use the offline version of iconify
// for apps that can't call out to a public CDN
import { loadAllIcons } from '~/icons';
import { StyleSystemProps } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';

loadAllIcons();

export type IconProps = StyleSystemProps & {
  name: string; // TODO: keyof loaded icons somehow?
  rotate?: 0 | 90 | 180 | 270;
  flip?: 'horizontal' | 'vertical';
  size?: string | number;
  block?: boolean;
};

/**
 * Icon documentation
 *
 * ## Accessibility
 *
 * TODO: Notes about purpose / meaning / understandability / etc
 */
export const Icon = polymorphicForwardRef<'i', IconProps>(
  ({ as, className, name, block, flip, rotate = 0, size = 16, ...props }, ref) => (
    <Box
      as={as || 'i'}
      ref={ref}
      className={cx({ 'rui-inline-block': !block }, 'rui-align-middle', className)}
      {...props}
    >
      <Iconify
        icon={name}
        // Note this `any` cast is because they include the SVGAttribute.rotate
        // that overrides their own rotate attribute that's supposed to
        // support a string for degrees.
        rotate={`${rotate}deg` as any}
        flip={flip}
        className="rui-m-auto"
        alignmentBaseline="middle"
        fontSize={size}
      />
    </Box>
  )
);
