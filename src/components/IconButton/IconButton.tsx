import React from 'react';

import { useScreenSize } from '../../hooks/useScreenSize';
import { ResponsiveProp } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Icon, IconProps } from '../Icon';
import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';

export type IconButtonProps = Omit<UnstyledButtonProps, 'children'> & {
  /**
   * Defines a string value that labels the current element.
   */
  label: string;

  variant?: 'default' | 'fade';

  /**
   * Size of the icon within the button, in pixels.
   *
   * The total size of the button will be this size * button padding.
   * Default padding is `xxs (2px)`
   */
  size?: ResponsiveProp<number>;

  /** Name of the icon */
  name: string;

  /** Additional props to spread into the icon */
  iconProps?: Omit<IconProps, 'name'>;
};

/**
 * An icon that can be clicked as a button
 *
 * ## Accessibility
 * - Required `label` prop sets the `aria-label` on the button
 * - Buttons must have a minimum touch target of 44px to meet Success Criterion [2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size).
 *
 *
 * <!-- @ruiPolymorphic -->
 */
export const IconButton = polymorphicForwardRef<'button', IconButtonProps>(
  ({ as, className, variant = 'default', name, label, size = 38, iconProps, ...props }, ref) => {
    const { resolve } = useScreenSize();
    const iconSize = resolve(size);

    // TODO: Icon needs to be based on font sizes, probably.
    // And the box needs to be based on the icon size. But
    // always square...
    // Also icon needs responsive sizing support, probably.

    return (
      <UnstyledButton
        as={as || 'button'}
        aria-label={label}
        ref={ref}
        p="xxs"
        c={!props.isDisabled ? 'light-contrast' : 'dark'}
        className={cx(
          'rui-inline-block',
          // Default variant
          {
            'data-[active=true]:rui-bg-light-shade': variant === 'default'
          },
          // Hover variant
          {
            'hover:rui-bg-light': !props.isDisabled && variant === 'default',
            'hover:rui-opacity-70': !props.isDisabled && variant === 'fade'
          },
          // Disabled
          {
            'rui-bg-light': props.isDisabled && variant === 'default'
          },
          className
        )}
        {...props}
      >
        <Icon size={iconSize} name={name} {...iconProps} block />
      </UnstyledButton>
    );
  }
);
