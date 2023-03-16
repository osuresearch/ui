import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';

// TODO: This is replicated for anything that is an `inputSlot` for ToggleField.
// e.g CheckboxIcon and RadioIcon.
export type RadioButtonIconProps = DOMAttributes<FocusableElement> &
  StyleSystemProps & {
    isSelected?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    isFocusVisible?: boolean;
  };

/**
 * Controlled slot renderer for a radio option rendered as a toggle button
 *
 * ## 🛑 Disclaimer
 *
 * In most cases, you should not use this component in your application.
 * This is a controlled component that is solely responsible for rendering states.
 */
export const RadioButtonIcon = ({
  isSelected,
  isIndeterminate,
  isFocusVisible,
  isDisabled,
  ...props
}: RadioButtonIconProps) => (
  <Box
    miw={20}
    w={20}
    h={20}
    className={cx(
      'rui-border-2',
      { 'rui-bg-light-tint rui-border-dark': !isSelected && !isIndeterminate && !isDisabled },
      { 'rui-bg-primary rui-border-primary': isSelected || isIndeterminate },
      { 'rui-border-dimmed rui-bg-light-shade': isDisabled },
      { 'rui-ring rui-focus-ring': isFocusVisible }
    )}
    {...props}
  >
    <Button as="div">hi</Button>
    {(isSelected || isIndeterminate) && (
      <Icon
        className="[&>svg]:rui-animate-pop"
        size={16}
        c={!isDisabled ? 'white' : 'dark'}
        name={isIndeterminate ? 'dash' : 'check'}
        block
      />
    )}
  </Box>
);
