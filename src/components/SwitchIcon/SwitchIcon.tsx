import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';

export type SwitchIconProps = DOMAttributes<FocusableElement> &
  StyleSystemProps & {
    isSelected?: boolean;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
    isFocusVisible?: boolean;
  };

/**
 * Controlled slot renderer for a switch.
 *
 * @internal
 */
export const SwitchIcon = ({
  isSelected,
  isFocusVisible,
  isDisabled,
  // Needs to be extracted to avoid being given to the native DOM element
  // Currently the generic <ToggleField> passes this down.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isIndeterminate,
  ...props
}: SwitchIconProps) => (
  <Box
    w={44}
    miw={44}
    h={24}
    className={cx(
      // Background container
      'rounded-full border-2 relative cursor-pointer',

      // TODO: I don't like this usage of class selectors for the inactive background.
      { 'border-outline-active bg-outline-active': !isSelected },
      { 'border-primary bg-primary': isSelected },
      { 'border-outline-disabled bg-outline-disabled': isDisabled },
      { 'ring focus-ring': isFocusVisible }
    )}
    {...props}
  >
    <Box
      w={18}
      h={18}
      bgc="input"
      className={cx(
        // Switch button
        'absolute top-1 left-[2px] rounded-full transition-all',
        { 'translate-x-full': isSelected }
      )}
    />
  </Box>
);
