import { CollectionBase } from '@react-types/shared';

import React, { useId } from 'react';

import { useListState } from 'react-stately';

import { Checkbox, Chip, ListItemText, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import { FormField, FormFieldBase } from '../FormField';

export interface MultipleSelectFieldProps
  extends FormFieldBase<string[]>,
    CollectionBase<MultipleSelectItem> {}

export interface MultipleSelectItem {
  name: string;
  label: string;
  description?: string;
}

export function MultipleSelectField(props: MultipleSelectFieldProps) {
  const { name, onChange, onBlur, value, defaultValue, disabled, readOnly } = props;
  const id = useId();
  const state = useListState({
    ...props,
    defaultSelectedKeys: defaultValue,
    selectedKeys: value,
    selectionBehavior: 'toggle',
    selectionMode: 'multiple',
  });

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    // Autofill will use a stringified value
    const value =
      typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value;

    state.selectionManager.setSelectedKeys(value);
    onChange && onChange(value);
  };

  const selected = Array.from(state.selectionManager.selectedKeys) as string[];

  return (
    <FormField
      {...props}
      id={id}
      renderInput={(inputProps) => (
        <Select<string[]>
          variant="outlined"
          id={id}
          name={name}
          multiple
          value={selected}
          onChange={handleChange}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
          inputProps={inputProps}
          renderValue={(keys) =>
            keys.map((k) => {
              const item = state.collection.getItem(k);
              if (!item) return null;
              return <Chip key={item.key} label={item.rendered} />;
            })
          }
        >
          {Array.from(state.collection).map((item) => (
            <MenuItem key={item.key} value={item.key}>
              <Checkbox checked={selected.includes(item.key as string)} />
              <ListItemText primary={item.rendered} />
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
}
