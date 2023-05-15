import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';
import { Icon } from '../Icon';

export type RadioIconProps = DOMAttributes<FocusableElement> &
  StyleSystemProps & {
    isSelected?: boolean;
    isDisabled?: boolean;
  };

/**
 * Controlled slot renderer for a radio.
 *
 * <!-- @ruiInternal -->
 * @internal
 */
export const RadioIcon = ({ isSelected, isDisabled, ...props }: RadioIconProps) => (
  <Box
    miw={20}
    w={20}
    h={20}
    className={cx(
      'border-2 rounded-full',
      { 'bg-light-tint border-dark': !isSelected && !isDisabled },
      { 'bg-light-tint border-primary': isSelected && !isDisabled },
      { 'border-dimmed bg-light-shade': isDisabled }
    )}
    {...props}
  >
    {isSelected && (
      <Icon
        className="[&>svg]:animate-pop"
        size={16}
        c={!isDisabled ? 'primary' : 'dark'}
        name="circleFill"
        block
      />
    )}
  </Box>
);
