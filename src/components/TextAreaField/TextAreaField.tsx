import React, { useId } from 'react';
import { FormField, FormFieldBase } from '../FormField';
import { OutlinedInput } from '@mui/material';

export type TextAreaFieldProps = FormFieldBase<string>

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
          fullWidth
          inputProps={{
            ...inputProps,
            sx: {
              resize: 'vertical'
            }
          }}
        />
      )}
    />
  );
}
