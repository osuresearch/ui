import React, { forwardRef } from 'react';
import { Icon as Iconify } from '@iconify/react/dist/offline';
import { cx } from '../../styles';

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

export const _Icon = forwardRef<HTMLElement, IconProps>(
  ({ className, name, size = 16, ...props }, ref) => (
    <Box component="i" className={cx('inline-block', className)} {...props}>
      <Iconify icon={name} fontSize={size} onLoad={() => console.log('loaded', name)} />
    </Box>
  )
);

/**
 * Icon documentation
 */
export const Icon = createPolymorphicComponent<'span', IconProps>(_Icon);
