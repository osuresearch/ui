import { Icon as Iconify } from '@iconify/react/dist/offline';
import React, { forwardRef } from 'react';

// Note that we use the offline version of iconify
// for apps that can't call out to a public CDN
import { loadAllIcons } from '../../icons';
import { cx } from '../../theme/utils';
import { DefaultProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box } from '../Box';

loadAllIcons();

export type IconProps = DefaultProps & {
  name: string; // TODO: keyof loaded icons somehow?
  rotate?: 0 | 90 | 180 | 270;
  flip?: 'horizontal' | 'vertical';
  size?: number;
  inline?: boolean;
};

export const _Icon = forwardRef<HTMLElement, IconProps & { component: any }>(
  ({ className, component = 'i', name, inline, flip, rotate = 0, size = 16, ...props }, ref) => (
    <Box
      component={component}
      className={cx(
        {
          'rui-inline-block': inline
        },
        className
      )}
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

/**
 * Icon documentation
 *
 * ## Accessibility
 *
 * TODO: Notes about purpose / meaning / understandability / etc
 */
export const Icon = createPolymorphicComponent<'span', IconProps>(_Icon);
