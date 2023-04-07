import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';

export type SwitchIconProps = DOMAttributes<FocusableElement> &
  StyleSystemProps & {
    isSelected?: boolean;
    isDisabled?: boolean;
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
  ...props
}: SwitchIconProps) => (
  <Box
    w={44}
    miw={44}
    h={24}
    bgc={isSelected ? 'primary' : 'dark-shade'}
    className={cx(
      // Background container
      'rui-rounded-full rui-border-2 rui-relative',
      { 'rui-border-dark-shade': !isSelected },
      { 'rui-border-primary': isSelected },
      { 'rui-border-dimmed rui-bg-dimmed': isDisabled },
      { 'rui-ring rui-focus-ring': isFocusVisible }
    )}
    {...props}
  >
    <Box
      w={18}
      h={18}
      bgc="light-tint"
      className={cx(
        // Switch button
        'rui-absolute rui-top-1 rui-left-[2px] rui-rounded-full rui-transition-all',
        { 'rui-translate-x-full': isSelected }
      )}
    />
  </Box>
);
