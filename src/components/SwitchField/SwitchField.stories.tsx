import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Text } from '../Text';
import { SwitchField as Component, SwitchFieldProps } from './SwitchField';

export default {
  title: 'Forms / SwitchField',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const Overview = RUIComponentStory<SwitchFieldProps>((args) => <Component {...args} />, {
  label: 'Yes I want to receive hourly promotional emails',
  description: 'Additional help text'
});

export const UncontrolledValue = RUIComponentStory<SwitchFieldProps>(Overview, {
  label: 'Yes I want to receive hourly promotional emails',
  defaultValue: true
});

export const ControlledValue = RUIComponentStory<SwitchFieldProps>(
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
    label: 'Yes I want to receive hourly promotional emails'
  }
);

export const ReadOnly = RUIComponentStory(Overview, {
  label: 'Yes I want to receive hourly promotional emails',
  defaultValue: true,
  isReadOnly: true
});

export const Disabled = RUIComponentStory(Overview, {
  label: 'Yes I want to receive hourly promotional emails',
  defaultValue: true,
  isDisabled: true
});
