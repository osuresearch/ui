import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes, forwardRef, useRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';

import { cx, mergeRefs } from '../../utils';
import { Box } from '../Box';
import { FocusRing } from '../FocusRing';
import { FormField, FormFieldBase } from '../FormField';

type InputSlotProps = React.InputHTMLAttributes<HTMLTextAreaElement> &
  DOMAttributes<FocusableElement> & {
    rows?: number;
  };

export type TextAreaFieldProps = FormFieldBase<string> &
  AriaTextFieldProps & {
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
        'rui-overflow-x-hidden', // Fix for Firefox rendering an extra row (#26)
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
      <FormField
        labelProps={labelProps}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        {...props}
      >
        <div className="rui-relative rui-w-full">
          <TextAreaSlot
            ref={mergeRefs(inputRef, ref)}
            rows={rows}
            {...inputProps}
          />
        </div>
      </FormField>
    );
  }
);
