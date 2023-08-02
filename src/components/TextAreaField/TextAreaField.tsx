import React, { useId } from 'react';

import { OutlinedInput } from '@mui/material';

import { FormField, FormFieldBase } from '../FormField';

export type TextAreaFieldProps = FormFieldBase<string>;

export function TextAreaField(props: TextAreaFieldProps) {
  const { name, onChange, onBlur, value, defaultValue } = props;
  const id = useId();

  return (
    <FormField
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
          multiline
          rows={4}
          sx={{ padding: 0 }}
          fullWidth
          inputProps={{
            ...inputProps,
            sx: {
              resize: 'vertical',
            },
          }}
        />
      )}
    />
  );
}
