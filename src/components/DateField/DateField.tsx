import dayjs from 'dayjs';

import React, { useId } from 'react';

import { DateValidationError, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types';

import { FormField, FormFieldBase } from '../FormField';

export type DateFieldProps = FormFieldBase<string>;

export function DateField(props: DateFieldProps) {
  const { name, onChange, onBlur, value, defaultValue } = props;
  const id = useId();

  const handleChange = (
    value: string | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {};

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormField
        {...props}
        id={id}
        renderInput={(inputProps) => (
          // TODO: Doesn't support passing down input props
          <MobileDatePicker defaultValue={defaultValue} value={value} onChange={handleChange} />
        )}
      />
    </LocalizationProvider>
  );
}
