import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Text } from '../Text';
import { CheckboxFieldProps, CheckboxField as Component } from './CheckboxField';

export default RUIComponentMeta<CheckboxFieldProps>('Forms', Component).withStyleSystemProps();

export const Overview = RUIComponentStory<CheckboxFieldProps>((args) => <Component {...args} />, {
  name: 'checkbox-overview',
  label: 'Yes I want to receive hourly promotional emails',
  description: 'Additional help text'
});

export const UncontrolledValue = RUIComponentStory<CheckboxFieldProps>(Overview, {
  name: 'promos',
  label: 'Yes I want to receive hourly promotional emails',
  defaultValue: true
});

export const ControlledValue = RUIComponentStory<CheckboxFieldProps>(
  (args) => {
    const [value, setValue] = useState<boolean | undefined>(false);

    return (
      <>
        <Component value={value} onChange={setValue} {...args} />
        <Text>{`You are ${value ? 'subscribed' : 'unsubscribed'}`}</Text>
      </>
    );
  },
  {
    name: 'promos',
    label: 'Yes I want to receive hourly promotional emails'
  }
);

export const Required = RUIComponentStory<CheckboxFieldProps>(Overview, {
  name: 'promos',
  label: 'Yes I want to receive hourly promotional emails',
  isRequired: true
});

export const ReadOnly = RUIComponentStory<CheckboxFieldProps>(Overview, {
  name: 'promos',
  label: 'Yes I want to receive hourly promotional emails',
  defaultValue: true,
  isReadOnly: true
});

export const Disabled = RUIComponentStory<CheckboxFieldProps>(Overview, {
  name: 'promos',
  label: 'Yes I want to receive hourly promotional emails',
  defaultValue: true,
  isDisabled: true
});

export const Indeterminate = RUIComponentStory<CheckboxFieldProps>(Overview, {
  name: 'promos',
  label: 'Yes I want to receive hourly promotional emails',
  isIndeterminate: true
});

export const Error = RUIComponentStory<CheckboxFieldProps>(Overview, {
  name: 'promos',
  label: 'Yes I want to receive hourly promotional emails',
  validationState: 'invalid',
  errorMessage: 'You must agree to receive hourly emails.'
});
