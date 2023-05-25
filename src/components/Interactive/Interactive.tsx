import React from 'react';

import { StyleSystemProps } from '../../types';
import { polymorphicForwardRef } from '../../utils';
import { cx } from '../../utils';
import { FocusRing } from '../FocusRing';
import { Box } from '../Box';

export type InteractiveProps = StyleSystemProps & {
  children?: React.ReactNode;
  isTextInput?: boolean;
};

/**
 * An interactive component with hover, focused, disabled, error, etc states.
 *
 * <!-- @ruiInternal -->
 * <!-- @ruiPolymorphic -->
 */
export const Interactive = polymorphicForwardRef<'div', InteractiveProps>(
  ({ as, className, children, isTextInput, ...props }, ref) => (
  <FocusRing isTextInput={isTextInput}>
    <Box
      as={as ?? 'div'}
      p="xs"
      bgc="input"
      c="neutral"
      w="100%"
      className={cx(
        className,
        'border-2 border-outline',
        'focus:border-outline-active focus:bg-input-active',
        'focus-within:border-outline-active focus-within:bg-input-active',
        { 'border-outline-disabled bg-input-disabled cursor-not-allowed': props.disabled },
        { 'border-outline-error bg-input-error': props['aria-invalid'] }
      )}
      {...props}
      ref={ref}
    >{children}</Box>
  </FocusRing>
));
