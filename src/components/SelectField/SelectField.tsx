import React, { useId } from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { FormField, FormFieldBase } from '../FormField';
import { CollectionBase } from '@react-types/shared';
import { useListState } from 'react-stately';

export interface SelectFieldProps extends FormFieldBase<string>, CollectionBase<SelectItem> {}

export interface SelectItem {
  name: string;
  label: string;
  description?: string;
}

export function SelectField(props: SelectFieldProps) {
  const { onChange, onBlur, value, defaultValue } = props;
  const id = useId();
  const state = useListState({
    ...props,
    defaultSelectedKeys: defaultValue ? [defaultValue] : undefined,
    selectedKeys: value ? [value] : undefined,
    selectionBehavior: 'toggle',
    selectionMode: 'single'
  });

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;

    state.selectionManager.setSelectedKeys(new Set(value));
    onChange && onChange(value);
  };

  return (
    <FormField
      {...props}
      id={id}
      renderInput={(inputProps) => (
        <Select
          variant="outlined"
          id={id}
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          inputProps={inputProps}
        >
          {Array.from(state.collection).map((item) => (
            <MenuItem key={item.key} value={item.key}>
              {item.rendered}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
}
