import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes } from 'react';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

import { Box } from '../Box';
import { Icon } from '../Icon';

export type RadioIconProps = DOMAttributes<FocusableElement> &
  StyleSystemProps & {
    isSelected?: boolean;
    isDisabled?: boolean;
    isFocusVisible?: boolean;
  };

/**
 * Controlled slot renderer for a radio.
 *
 * ## Disclaimer
 *
 * In most cases, you should not use this component in your application.
 * This is a controlled component that is solely responsible for rendering states.
 */
export const RadioIcon = ({
  isSelected,
  isFocusVisible, // TODO: Unused. Might not need anymore due to new <FocusRing>
  isDisabled,
  ...props
}: RadioIconProps) => (
  <Box
    className={cx(
      'rui-border-2 rui-rounded-full',
      'rui-w-[20px] rui-h-[20px]',
      { 'rui-bg-light-tint rui-border-dark': !isSelected },
      { 'rui-bg-primary rui-border-primary': isSelected },
      { 'rui-border-dimmed rui-bg-light-shade': isDisabled }
    )}
    {...props}
  >
    {isSelected && (
      <Icon className="[&>svg]:rui-animate-pop" size={16} c="white" name="circleFill" block />
    )}
  </Box>
);
