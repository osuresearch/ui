import { CollectionBase } from '@react-types/shared';

import React, { Fragment, useId } from 'react';

import { useListState } from 'react-stately';

import { FormControlLabel, FormGroup, FormHelperText, Radio, RadioGroup } from '@mui/material';

import { FormField, FormFieldBase } from '../FormField';

export interface RadioSetFieldProps extends FormFieldBase<string>, CollectionBase<RadioItem> {
  /** Content to render when there are no options available */
  placeholder?: React.ReactNode;
}

export interface RadioItem {
  name: string;
  label: string;
  description?: string;
}

export function RadioSetField(props: RadioSetFieldProps) {
  const { name, onChange, onBlur, value, defaultValue, disabled, readOnly } = props;
  const id = useId();
  const state = useListState({
    ...props,
    defaultSelectedKeys: defaultValue ? [defaultValue] : undefined,
    selectedKeys: value ? [value] : undefined,
    selectionBehavior: 'toggle',
    selectionMode: 'single',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly || state.selectionManager.isDisabled(event.target.name)) {
      return;
    }

    state.selectionManager.select(event.target.name);
    onChange && onChange(event.target.name);
  };

  return (
    <FormField
      {...props}
      id={id}
      isFieldset
      renderInput={(inputProps) => (
        <RadioGroup aria-labelledby={`${id}-label`} defaultValue={defaultValue} onBlur={onBlur}>
          {Array.from(state.collection).map((item) => (
            <Fragment key={item.key}>
              <FormControlLabel
                name={name}
                disabled={disabled || readOnly}
                control={
                  <Radio
                    name={item.key as string}
                    checked={state.selectionManager.isSelected(item.key)}
                    onChange={handleChange}
                    disabled={disabled || readOnly || state.selectionManager.isDisabled(item.key)}
                    inputProps={inputProps}
                  />
                }
                label={item.rendered}
              />
              {item.props.description && <FormHelperText>{item.props.description}</FormHelperText>}
            </Fragment>
          ))}
        </RadioGroup>
      )}
    />
  );
}
