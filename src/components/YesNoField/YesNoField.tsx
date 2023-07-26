import React, { useId, useState } from 'react';

import { Stack, ToggleButton, ToggleButtonGroup, styled } from '@mui/material';

import { FormField, FormFieldBase } from '../FormField';

export type YesNoFieldProps = FormFieldBase<boolean>;

const YesNoButton = styled(ToggleButton)(({ theme }) => ({
  'width': 64,
  'fontSize': '1rem',
  '&.Mui-selected': {
    background: theme.palette.primary.main,
    color: '#fff',
  },
}));

function boolToYesNo(value?: boolean) {
  return typeof value === 'boolean' ? (value ? 'yes' : 'no') : undefined;
}

function yesNoToBool(value?: string) {
  return typeof value === 'undefined' ? undefined : value === 'yes';
}

export function YesNoField(props: YesNoFieldProps) {
  const { onChange, onBlur, defaultValue } = props;
  const id = useId();
  const [value, setValue] = useState(boolToYesNo(defaultValue));

  const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => {
    const result = yesNoToBool(value);
    setValue(value);
    onChange && onChange(result);
  };

  return (
    <FormField
      {...props}
      id={id}
      renderInput={(inputProps) => (
        <Stack spacing={2}>
          <ToggleButtonGroup
            aria-describedby={inputProps['aria-describedby']}
            size="small"
            onChange={handleChange}
            onBlur={onBlur}
            value={value}
            exclusive
          >
            <YesNoButton value="yes">Yes</YesNoButton>
            <YesNoButton value="no">No</YesNoButton>
          </ToggleButtonGroup>
        </Stack>
      )}
    />
  );
}
