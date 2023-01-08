import React, { useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Text } from '../Text';
import { CheckboxFieldProps, CheckboxField as Component } from './CheckboxField';

export default RUIComponentMeta<CheckboxFieldProps>('Forms', Component).withStyleSystemProps();

export const Overview = RUIComponentStory<CheckboxFieldProps>((args) => <Component {...args} />, {
  label: 'Yes I want to receive hourly promotional emails',
  description: 'Additional help text'
});

export const DefaultValue = RUIComponentStory<CheckboxFieldProps>(Overview, {
  label: 'Yes I want to receive hourly promotional emails',
  defaultSelected: true
});

export const ControlledValue = RUIComponentStory<CheckboxFieldProps>(
  (args) => {
    const [value, setValue] = useState(false);

    return (
      <>
        <Component isSelected={value} onChange={setValue} {...args} />
        <Text>{`You are ${value ? 'subscribed' : 'unsubscribed'}`}</Text>
      </>
    );
  },
  {
    label: 'Yes I want to receive hourly promotional emails'
  }
);

export const Required = RUIComponentStory<CheckboxFieldProps>(Overview, {
  label: 'Yes I want to receive hourly promotional emails',
  isRequired: true
});

export const ReadOnly = RUIComponentStory<CheckboxFieldProps>(Overview, {
  label: 'Yes I want to receive hourly promotional emails',
  defaultSelected: true,
  isReadOnly: true
});

export const Disabled = RUIComponentStory<CheckboxFieldProps>(Overview, {
  label: 'Yes I want to receive hourly promotional emails',
  defaultSelected: true,
  isDisabled: true
});

export const Indeterminate = RUIComponentStory<CheckboxFieldProps>(Overview, {
  label: 'Yes I want to receive hourly promotional emails',
  isIndeterminate: true
});

export const Error = RUIComponentStory<CheckboxFieldProps>(Overview, {
  label: 'Yes I want to receive hourly promotional emails',
  validationState: 'invalid',
  errorMessage: 'You must agree to receive hourly emails.'
});

export const WithRHF7 = RUIComponentStory<CheckboxFieldProps>(
  (args) => {
    const [value, setValue] = useState(false);

    return (
      <>
        <Component isSelected={value} onChange={setValue} {...args} />
        <Text>{`You are ${value ? 'subscribed' : 'unsubscribed'}`}</Text>
      </>
    );
  },
  {
    label: 'Subscribe'
  }
);

export const WithDiff = RUIComponentStory<CheckboxFieldProps>(Overview, {
  label: 'Yes I want to receive hourly promotional emails',
  showDiff: true,
  wasSelected: true
});
