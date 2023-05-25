import React, { forwardRef, useRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';

import { mergeRefs } from '../../utils';
import { FormField, FormFieldBase } from '../FormField';
import { Interactive } from '../Interactive';

export type TextAreaFieldProps = FormFieldBase<string> &
  AriaTextFieldProps & {
    rows?: number;
  };

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
        <Interactive as="textarea"
          isTextInput
          ref={mergeRefs(inputRef, ref)}
          rows={rows}
          {...inputProps}
        />
      </FormField>
    );
  }
);
