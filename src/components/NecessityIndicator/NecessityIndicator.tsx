import React, { forwardRef } from 'react';

import { Icon } from '../Icon';

export type NecessityIndicatorProps = Record<string, never>;

// NOTE: Naming convention comes from React Spectrum
// due to their 'isRequired' prop already hinting that
// this is the variable name.

/**
 * Icon attached to form field labels to indicate that the field is required.
 *
 * The name comes from [React Aria](https://react-spectrum.adobe.com/react-spectrum/Form.html#required-and-necessity-indicator)
 * which universally uses the `necessityIndicator` prop on field components.
 *
 * ## Accessibility
 * - This is a visual-only component that sets `aria-hidden`.
 * - This must be combined with the `required` prop on the relevant `<input>`
 *  to signal to screen readers that a field is required.
 *
 * @internal
 */
export const NecessityIndicator = forwardRef<HTMLDivElement, NecessityIndicatorProps>(
  (props, ref) => (
    <Icon
      label="(required)"
      ref={ref}
      size={10}
      ml="xs"
      mb="xs"
      name="asterisk"
      c={{
        light: 'error',
        dark: 'dark'
      }}
      {...props}
    />
  )
);
