import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes, forwardRef, useRef } from 'react';
import { AriaTextFieldProps, mergeProps, useFocusRing, useTextField } from 'react-aria';

import { useStyleSystemProps } from '~/hooks/useStyleSystemProps';
import { AriaNecessityIndicator, StyleSystemProps } from '~/types';
import { cx, mergeRefs } from '~/utils';

import { Box } from '../Box';
import { FocusRing } from '../FocusRing';
import { Icon } from '../Icon';
import { InputField, InputFieldProps } from '../InputField';
import { makeMissingSlot } from '../MissingSlot';
import { NecessityIndicator } from '../NecessityIndicator';
import { Stack } from '../Stack';
import { Text } from '../Text';

type InputSlotProps = React.InputHTMLAttributes<HTMLTextAreaElement> &
  DOMAttributes<FocusableElement>;

export type TextAreaFieldProps = StyleSystemProps &
  AriaTextFieldProps &
  AriaNecessityIndicator & {
    rows?: number;
  };

const TextAreaSlot = forwardRef<HTMLTextAreaElement, InputSlotProps>((props, ref) => (
  <FocusRing isTextInput={true}>
    <Box
      as="textarea"
      p="xs"
      bgc="light-tint"
      c="light-contrast"
      w="100%"
      className={cx(
        'rui-border-2 rui-border-light-shade',
        'focus:rui-border-dark-shade',
        { 'rui-border-dimmed rui-bg-light-shade': props.disabled },
        { 'rui-border-error': props['aria-invalid'] }
      )}
      {...props}
      ref={ref}
    />
  </FocusRing>
));

/**
 * Multiple lines of text input
 *
 * <!-- @ruiAtomic Text -->
 */
export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ rows, ...props }, ref) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
      useTextField<'textarea'>(props, inputRef);

    return (
      <InputField
        {...props}
        inputSlot={TextAreaSlot}
        labelProps={labelProps}
        inputProps={mergeProps(inputProps, { rows })}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        ref={mergeRefs(inputRef, ref)}
      />
    );
  }
);
