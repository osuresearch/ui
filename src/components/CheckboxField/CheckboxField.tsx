import React, { useId } from 'react';

import { Checkbox, FormControlLabel } from '@mui/material';

import { FormField, FormFieldBase } from '../FormField';
import { NecessityIndicator } from '../NecessityIndicator';

export interface CheckboxFieldProps extends FormFieldBase<boolean> {
  /**
   * If true, the component appears indeterminate. This does not set the native
   * input element to indeterminate due to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the input.
   */
  indeterminate?: boolean;
}

export function CheckboxField(props: CheckboxFieldProps) {
  const {
    name,
    onChange,
    onBlur,
    value,
    defaultValue,
    label,
    indeterminate,
    disabled,
    readOnly,
    necessityIndicator,
  } = props;
  const id = useId();

  // TODO: Need to handle necessity indicator and whatnot here as well.
  // I'd rather provide a variant for FormControlLabel to wrap an element.

  const handleChange = (event: React.SyntheticEvent, checked: boolean) => {
    if (disabled || readOnly) return;

    onChange && onChange(checked);
  };

  return (
    <FormField
      {...props}
      id={id}
      noLabel
      // MUI checkboxes don't support readonly
      disabled={disabled || readOnly}
      renderInput={(inputProps) => (
        <FormControlLabel
          label={
            <>
              {label}
              {necessityIndicator && <NecessityIndicator />}
            </>
          }
          htmlFor={id}
          disabled={disabled || readOnly}
          onChange={handleChange}
          onBlur={onBlur}
          defaultChecked={defaultValue}
          checked={value}
          control={
            <Checkbox id={id} name={name} indeterminate={indeterminate} inputProps={inputProps} />
          }
        />
      )}
    />
  );
}
