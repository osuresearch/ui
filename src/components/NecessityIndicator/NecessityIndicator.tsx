import React, { forwardRef } from 'react';

import { Icon } from '../Icon';

export type NecessityIndicatorProps = Record<string, never>;

// NOTE: Naming convention comes from React Spectrum
// due to their 'isRequired' prop already hinting that
// this is the variable name.

/**
 * Icon attached to form field labels to indicate that the field is required.
 *
 * This may be used in form fields that are logically required but cannot
 * be flagged as such using native form attributes e.g. those that are
 * required but validated serverside.
 *
 * The name comes from [React Aria](https://react-spectrum.adobe.com/react-spectrum/Form.html#required-and-necessity-indicator)
 * which universally uses the `necessityIndicator` prop on field components.
 *
 * ## Accessibility
 * - The `aria-label` on the icon is automatically set to `(required)`
 *
 * @internal
 */
export const NecessityIndicator = forwardRef<HTMLDivElement, NecessityIndicatorProps>(
  (props, ref) => (
    <Icon
      aria-label="(required)"
      ref={ref}
      size={10}
      ml="xs"
      mb="xs"
      name="asterisk"
      c={{
        light: 'critical',
        dark: 'white'
      }}
      {...props}
    />
  )
);
