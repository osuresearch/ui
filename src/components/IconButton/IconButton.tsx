import React from 'react';

import { useScreenSize } from '~/hooks/useScreenSize';
import { FontSize, ResponsiveProp, Spacing, StyleSystemProps, ThemeSize } from '~/types';
import { cx, polymorphicForwardRef, resolveResponsiveProp } from '~/utils';

import { Icon, IconProps } from '../Icon';
import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';

export type IconButtonProps = Omit<UnstyledButtonProps, 'children'> & {
  /**
   * Defines a string value that labels the current element.
   */
  label: string;

  variant?: 'default' | 'fade';

  size?: ResponsiveProp<string | number>;

  /** Name of the icon */
  name: string;

  /** Additional props to spread into the icon */
  iconProps?: Omit<IconProps, 'name'>;
};

/**
 * An icon that can be clicked as a button
 *
 * ## Polymorphic
 *  - You can use the `as` prop to change the root element for this component.
 *
 * ## Accessibility
 * - Required `label` prop sets the `aria-label` on the button
 */
export const IconButton = polymorphicForwardRef<'button', IconButtonProps>(
  ({ as, className, variant = 'default', name, label, size = 32, iconProps, ...props }, ref) => {
    const [screen] = useScreenSize();
    const rsize = resolveResponsiveProp(size, screen);

    // TODO: Icon needs to be based on font sizes, probably.
    // And the box needs to be based on the icon size. But
    // always square...
    // Also icon needs responsive sizing support, probably.

    return (
      <UnstyledButton
        as={as || 'button'}
        aria-label={label}
        ref={ref}
        w={size}
        h={size}
        c={!props.isDisabled ? 'light-contrast' : 'dark'}
        className={cx(
          'rui-inline-block',
          // Hover styles
          {
            'hover:rui-bg-light': !props.isDisabled && variant === 'default',
            'hover:rui-opacity-70': !props.isDisabled && variant === 'fade'
          },
          // Disabled styles
          {
            'rui-bg-light': props.isDisabled && variant === 'default'
          },
          className
        )}
        {...props}
      >
        <Icon name={name} {...iconProps} />
      </UnstyledButton>
    );
  }
);
