import { DateValue, parseDate, parseDateTime } from '@internationalized/date';
import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { forwardRef, useRef, useState } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { DateField, DateFieldProps } from './DateField';

export default RUIComponentMeta<DateFieldProps>('Forms', DateField).withStyleSystemProps();

export const Overview = RUIComponentStory<DateFieldProps>((args) => <DateField {...args} />, {
  label: 'Date',
  description: 'Enter your date of birth'
});

export const UncontrolledValue = RUIComponentStory<DateFieldProps>(
  (args) => <DateField {...args} defaultValue={parseDate('1989-08-14')} />,
  {
    label: 'Date'
  }
);

export const ControlledValue = RUIComponentStory<DateFieldProps>(
  (args) => {
    const [value, setValue] = useState<DateValue>(parseDate('1989-08-14'));

    return (
      <>
        <DateField value={value} onChange={setValue} {...args} />
        <Text>{`Your date is: ${value}`}</Text>
      </>
    );
  },
  {
    label: 'Date'
  }
);

export const Required = RUIComponentStory(UncontrolledValue, {
  label: 'Date',
  necessityIndicator: true,
  isRequired: true
});

export const ReadOnly = RUIComponentStory(UncontrolledValue, {
  label: 'Date',
  isReadOnly: true
});

export const Disabled = RUIComponentStory(UncontrolledValue, {
  label: 'Date',
  isDisabled: true
});

export const Error = RUIComponentStory(Overview, {
  label: 'Date',
  validationState: 'invalid',
  errorMessage: 'Please enter a valid date.'
});
