import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Text } from '../Text';
import { YesNoField, YesNoFieldProps } from './YesNoField';

export default {
  title: 'Forms / YesNoField',
  ...RUIComponentMeta(YesNoField).withStyleSystemProps()
};

export const Overview = RUIComponentStory<YesNoFieldProps>((args) => <YesNoField {...args} />, {
  label: 'Do you agree to the terms and conditions?',
  description: 'Blah blah blah'
});

export const UncontrolledValue = RUIComponentStory(Overview, {
  label: 'Do you agree to the terms and conditions?',
  defaultValue: true
});

export const ControlledValue = RUIComponentStory<YesNoFieldProps>(
  (args) => {
    const [value, setValue] = useState<boolean | undefined>(false);

    return (
      <>
        <YesNoField value={value} onChange={setValue} {...args} />
        <Text>{`Your answer is: ${value}`}</Text>
      </>
    );
  },
  {
    label: 'Do you agree to the terms and conditions?'
  }
);

export const Required = RUIComponentStory(Overview, {
  label: 'Do you agree to the terms and conditions?',
  necessityIndicator: true,
  isRequired: true
});

export const ReadOnly = RUIComponentStory(Overview, {
  label: 'Do you agree to the terms and conditions?',
  defaultValue: true,
  isReadOnly: true
});

export const Disabled = RUIComponentStory(Overview, {
  label: 'Do you agree to the terms and conditions?',
  defaultValue: true,
  isDisabled: true
});

export const Error = RUIComponentStory(Overview, {
  label: 'Do you agree to the terms and conditions?',
  necessityIndicator: true,
  isRequired: true,
  validationState: 'invalid',
  errorMessage: 'Please state whether you agree.'
});
