import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
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
 * <!-- @ruiInternal -->
 * @internal
 */
export const CheckboxIcon = ({
  isSelected,
  isIndeterminate,
  isFocusVisible,
  isDisabled,
  className,
  ...props
}: CheckboxIconProps) => (
  <Box
    miw={20}
    w={20}
    h={20}
    className={cx(
      'border-2',

      // TODO: I don't like this usage of class selectors abusing active.
      { 'bg-surface border-outline-active': !isSelected && !isIndeterminate && !isDisabled },
      { 'bg-primary border-primary': (isSelected || isIndeterminate) && !isDisabled },
      { 'border-outline-disabled bg-input-disabled': isDisabled },
      { 'ring focus-ring': isFocusVisible },
      className,
    )}
    {...props}
  >
    {(isSelected || isIndeterminate) && (
      <Icon
        className="[&>svg]:animate-pop"
        size={16}
        c="white"
        name={isIndeterminate ? 'dash' : 'check'}
        block
      />
    )}
  </Box>
);
