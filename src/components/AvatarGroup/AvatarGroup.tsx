import React, { Children, forwardRef } from 'react';

import { useScreenSize } from '../../hooks/useScreenSize';
import { ResponsiveProp, StyleSystemProps } from '../../types';
import { cx } from '../../utils';
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
  ({ className, size = 38, children, ...props }, ref) => {
    const { resolve } = useScreenSize();
    const limit = resolve(props.limit) ?? 100;

    const overflow = Children.count(children) - limit;

    return (
      <Group ref={ref} gap={0} className={cx(
        '[&>*]:-m-xxs',
        className
      )} {...props}>
        {Children.map(children, (child, idx) => (
          <div className="relative" key={idx}>
            <div className="absolute -inset-[2px] bg-surface rounded-full" />
            {idx < limit && child}
          </div>
        ))}

        {overflow > 0 && (
          <div className="relative">
            <div className="absolute -inset-[2px] bg-surface rounded-full" />
            <Avatar
              size={size}
              alt={`and ${overflow} more`}
              label={`+${overflow}`}
            />
          </div>
        )}
      </Group>
    );
  }
);
