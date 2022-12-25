import React, { forwardRef } from 'react';

import { Icon } from '@osuresearch/ui';
import { DefaultProps } from '@osuresearch/ui/types';

export type IconButtonProps = DefaultProps & {
  label: string;

  /** Name of the icon */
  name: string;

  /** Minimum size of the button */
  size?: number;

  /** Size of the icon within the button. If omitted, the icon font size will match `size` */
  iconSize?: number;
};

/**
 * An icon that can be clicked as a button
 *
 * ### Accessibility
 * - Required `label` prop sets the `aria-label` on the button
 * - Minimum touch target of 44px meets Success Criterion [2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size)
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ name, label, iconSize, size = 44, ...props }, ref) => (
    <Icon
      className="focus:rui-ring"
      miw={size}
      mih={size}
      name={name}
      component="button"
      ref={ref}
      aria-label={label}
      size={iconSize ?? size}
      {...props}
    />
  )
);
