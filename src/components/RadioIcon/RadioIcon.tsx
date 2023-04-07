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
 * @internal
 */
export const RadioIcon = ({ isSelected, isDisabled, ...props }: RadioIconProps) => (
  <Box
    miw={20}
    w={20}
    h={20}
    className={cx(
      'rui-border-2 rui-rounded-full',
      { 'rui-bg-light-tint rui-border-dark': !isSelected && !isDisabled },
      { 'rui-bg-light-tint rui-border-primary': isSelected && !isDisabled },
      { 'rui-border-dimmed rui-bg-light-shade': isDisabled }
    )}
    {...props}
  >
    {isSelected && (
      <Icon
        className="[&>svg]:rui-animate-pop"
        size={16}
        c={!isDisabled ? 'primary' : 'dark'}
        name="circleFill"
        block
      />
    )}
  </Box>
);
