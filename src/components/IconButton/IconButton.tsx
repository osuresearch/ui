import React, { forwardRef } from 'react';

import { ResponsiveProp, Spacing, StyleSystemProps } from '~/types';

import { Icon } from '../Icon';

export type IconButtonProps = StyleSystemProps & {
  label: string;

  /** Name of the icon */
  name: string;

  /** Minimum size of the button */
  size?: ResponsiveProp<Spacing>;

  /** Size of the icon within the button. If omitted, the icon font size will match `size` */
  iconSize?: number;
};

/**
 * An icon that can be clicked as a button
 *
 * ## Accessibility
 * - Required `label` prop sets the `aria-label` on the button
 * - Minimum touch target of 44px meets Success Criterion [2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size)
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ name, label, iconSize = 32, size = 'xxl', ...props }, ref) => (
    <Icon
      as="button"
      className="focus:rui-ring hover:rui-bg-light-shade"
      w={size}
      h={size}
      name={name}
      ref={ref}
      aria-label={label}
      size={iconSize}
      c="light-contrast"
      {...props}
    />
  )
);
