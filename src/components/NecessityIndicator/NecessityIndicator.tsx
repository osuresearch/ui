import React from 'react';

import { theme } from '../../theme';
import { Icon } from '../Icon';

/**
 * Icon attached to form field labels to indicate that the field is required.
 *
 * <!-- @ruiInternal -->
 */
export function NecessityIndicator() {
  return (
    <Icon
      size={10}
      ml={1}
      aria-label="This field is required"
      name="asterisk"
      svgProps={{ color: theme.palette.primary.main }}
    />
  );
}
