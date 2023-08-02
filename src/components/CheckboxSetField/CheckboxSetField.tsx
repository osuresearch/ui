import { CollectionBase } from '@react-types/shared';

import React, { useId } from 'react';

import { useListState } from 'react-stately';

import { Checkbox, FormControlLabel, FormGroup, FormHelperText } from '@mui/material';

import { FormField, FormFieldBase } from '../FormField';

export interface CheckboxSetFieldProps
  extends FormFieldBase<string[]>,
    CollectionBase<CheckboxItem> {
  /** Content to render when there are no options available */
  placeholder?: React.ReactNode;
}

export interface CheckboxItem {
  name: string;
  label: string;
  description?: string;
}

export function CheckboxSetField(props: CheckboxSetFieldProps) {
  const { name, onChange, onBlur, value, defaultValue, disabled, readOnly } = props;
  const id = useId();
  const state = useListState({
    ...props,
    defaultSelectedKeys: defaultValue,
    selectedKeys: value,
    selectionBehavior: 'toggle',
    selectionMode: 'multiple',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keys = new Set(state.selectionManager.selectedKeys);
    if (event.target.checked) {
      keys.add(event.target.name);
    } else {
      keys.delete(event.target.name);
    }

    state.selectionManager.setSelectedKeys(keys);

    onChange && onChange(Array.from(keys).map((k) => k as string));
  };

  return (
    <FormField
      {...props}
      id={id}
      isFieldset
      disabled={disabled || readOnly}
      renderInput={(inputProps) => (
        <FormGroup
          sx={{ marginLeft: '6px' }}
          aria-labelledby={`${id}-label`}
          defaultValue={defaultValue}
          onBlur={onBlur}
        >
          {Array.from(state.collection).map((item) => (
            <>
              <FormControlLabel
                name={name}
                control={
                  <Checkbox
                    name={item.key as string}
                    checked={state.selectionManager.isSelected(item.key)}
                    onChange={handleChange}
                    inputProps={inputProps}
                  />
                }
                label={item.rendered}
              />
              {item.props.description && (
                <FormHelperText sx={{ marginLeft: '24px' }}>
                  {item.props.description}
                </FormHelperText>
              )}
            </>
          ))}
        </FormGroup>
      )}
    />
  );
}
