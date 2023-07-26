import React, { useId } from 'react';

import { Checkbox, FormControlLabel } from '@mui/material';

import { FormField, FormFieldBase } from '../FormField';

export interface CheckboxFieldProps extends FormFieldBase<boolean> {
  /**
   * If true, the component appears indeterminate. This does not set the native
   * input element to indeterminate due to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the input.
   */
  indeterminate?: boolean;
}

export function CheckboxField(props: CheckboxFieldProps) {
  const { name, onChange, onBlur, value, defaultValue, label, indeterminate } = props;
  const id = useId();

  // TODO: Need to handle necessity indicator and whatnot here as well.
  // I'd rather provide a variant for FormControlLabel to wrap an element.

  return (
    <FormField
      {...props}
      id={id}
      noLabel
      renderInput={(inputProps) => (
        <FormControlLabel
          label={label}
          htmlFor={id}
          control={
            <Checkbox
              id={id}
              name={name}
              defaultChecked={defaultValue}
              checked={value}
              indeterminate={indeterminate}
              onChange={(e, checked) => onChange && onChange(checked)}
              onBlur={onBlur}
              inputProps={inputProps}
            />
          }
        />
      )}
    />
  );
}
