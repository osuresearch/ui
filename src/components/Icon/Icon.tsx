import React, { forwardRef } from 'react';
import { Icon as Iconify, InlineIcon } from '@iconify/react/dist/offline';
import { cx } from '../../theme';

// Note that we use the offline version of iconify
// for apps that can't call out to a public CDN

import { loadAllIcons, all } from '../../icons';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box } from '../Box';
import { DefaultProps } from '../../types';
loadAllIcons();

export type IconProps = DefaultProps & {
  name: string; // TODO: keyof loaded icons somehow?
  size?: number;
};

export const _Icon = forwardRef<HTMLElement, IconProps & { component: any }>(
  ({ component = 'i', name, size = 16, ...props }, ref) => (
    <Box component={component} {...props}>
      <InlineIcon
        icon={name}
        className="m-auto"
        alignmentBaseline="middle"
        fontSize={size}
        inline
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
