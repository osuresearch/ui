import React, { Children, forwardRef } from 'react';

import { useScreenSize } from '~/hooks/useScreenSize';
import { ResponsiveProp, StyleSystemProps } from '~/types';
import { cx, resolveColorProp, resolveResponsiveProp } from '~/utils';

import { Avatar } from '../Avatar';
import { Group } from '../Group';

export type AvatarGroupProps = StyleSystemProps & {
  /** `<Avatar>` components to group together */
  children?: React.ReactNode;

  /**
   * Size for the placeholder to aggregate other avatars
   */
  size?: number;

  /** Maximum number of avatars to display */
  limit?: ResponsiveProp<number>;
};

/**
 * Grouping of avatars with logic to handle overflow
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, size = 38, limit = 100, children, ...props }, ref) => {
    const screen = useScreenSize();
    const overflow = Children.count(children) - resolveResponsiveProp(limit, screen);

    return (
      <Group ref={ref} gap={0} className={cx('[&>*]:-rui-m-xxs', className)} {...props}>
        {Children.map(children, (child, idx) => (
          <React.Fragment key={idx}>{idx < limit && child}</React.Fragment>
        ))}

        {overflow > 0 && (
          <Avatar
            size={size}
            alt={`and ${overflow} more`}
            label={`+${overflow}`}
            colors={['dimmed-tint']}
          />
        )}
      </Group>
    );
  }
);
