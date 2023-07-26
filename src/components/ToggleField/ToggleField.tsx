import React, { useId } from 'react';
import { FormField, FormFieldBase } from '../FormField';
import { Switch, FormControlLabel, styled, SwitchProps } from '@mui/material';

export type ToggleFieldProps = FormFieldBase<boolean>

const BUXSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" {...props} />
))(({ theme }) => ({
  'width': 45,
  'height': 24,
  'padding': 0,
  'margin': '8px 12px',
  '& .MuiSwitch-switchBase': {
    'padding': 0,
    'margin': 2,
    '&.Mui-checked': {
      'transform': 'translateX(21px)',
      'color': '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#ba0c2f' : '#ba0c2f',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? '#fff' : '#fff'
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      color: '#cfd4d8'
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20
  },
  '& .MuiSwitch-track': {
    borderRadius: 24 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#212325' : '#39393D',
    opacity: 1
    // transition: theme.transitions.create(['background-color'], {
    //   duration: 500,
    // }),
  }
}));

export function ToggleField(props: ToggleFieldProps) {
  const { name, onChange, onBlur, value, defaultValue, label, disabled, readOnly } = props;
  const id = useId();

  return (
    <FormField
      {...props}
      id={id}
      noLabel
      renderInput={(inputProps) => (
        <FormControlLabel
          label={label}
          htmlFor={id}
          disabled={disabled || readOnly}
          control={
            <BUXSwitch
              id={id}
              name={name}
              defaultChecked={defaultValue}
              checked={value}
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
