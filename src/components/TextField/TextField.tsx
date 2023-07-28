import React, { useId } from 'react';

import { OutlinedInput } from '@mui/material';

import { FormField, FormFieldBase } from '../FormField';

export type TextFieldProps = FormFieldBase<string> & {
  // type: React.HTMLAttributes<HTMLInputElement>['type']
  type: HTMLInputElement['type'];

  /** If true, the input element is focused during the first mount. */
  autoFocus?: boolean;
};

export function TextField(props: TextFieldProps) {
  const { name, onChange, onBlur, type, autoFocus, value, defaultValue } = props;
  const id = useId();

  return (
    <FormField
      fullWidth
      {...props}
      id={id}
      renderInput={(inputProps) => (
        <OutlinedInput
          id={id}
          name={name}
          defaultValue={defaultValue}
          value={value}
          onChange={(e) => onChange && onChange(e.currentTarget.value)}
          onBlur={onBlur}
          type={type}
          autoFocus={autoFocus}
          inputProps={inputProps}
        />
      )}
    />
  );
}
