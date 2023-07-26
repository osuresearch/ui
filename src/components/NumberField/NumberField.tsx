import React, { useId } from 'react';
import { FormField, FormFieldBase } from '../FormField';
import { OutlinedInput } from '@mui/material';

export interface NumberFieldProps extends FormFieldBase<number> {
  min?: number;
  max?: number;
  step?: number;
}

export function NumberField(props: NumberFieldProps) {
  const { name, onChange, onBlur, value, defaultValue, min, max, step } = props;
  const id = useId();

  // TODO: Min/max support. Native uncontrolled doesn't support it.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(Number.parseFloat(e.currentTarget.value));
  };

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
          onChange={handleChange}
          onBlur={onBlur}
          type="number"
          inputProps={{
            min,
            max,
            step,
            ...inputProps
          }}
        />
      )}
    />
  );
}
