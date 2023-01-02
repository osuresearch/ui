import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes } from 'react';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

import { Box } from '../Box';
import { Icon } from '../Icon';

export type CheckboxIconProps = DOMAttributes<FocusableElement> &
  StyleSystemProps & {
    isSelected?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    isFocusVisible?: boolean;
  };

/**
 * Controlled slot renderer for a checkbox.
 *
 * ## Disclaimer
 *
 * In most cases, you should not use this component in your application.
 * This is a controlled component that is solely responsible for rendering states.
 */
export const CheckboxIcon = ({
  isSelected,
  isIndeterminate,
  isFocusVisible,
  isDisabled,
  ...props
}: CheckboxIconProps) => (
  <Box
    className={cx(
      'rui-border-2',
      'rui-w-[20px] rui-h-[20px]',
      { 'rui-bg-light-tint rui-border-dark': !isSelected && !isIndeterminate },
      { 'rui-bg-primary rui-border-primary': isSelected || isIndeterminate },
      { 'rui-border-dimmed rui-bg-light-shade': isDisabled },
      { 'rui-ring rui-ring-pink': isFocusVisible }
    )}
    {...props}
  >
    {(isSelected || isIndeterminate) && (
      <Icon
        className="[&>svg]:rui-animate-pop"
        size={14}
        c="white"
        pt="xxs"
        name={isIndeterminate ? 'dash' : 'check'}
        block
      />
    )}
  </Box>
);
