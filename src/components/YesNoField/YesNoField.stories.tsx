import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Text } from '../Text';
import { YesNoField, YesNoFieldProps } from './YesNoField';

export default RUIComponentMeta<YesNoFieldProps>('Forms', YesNoField).withStyleSystemProps();

export const Overview = RUIComponentStory<YesNoFieldProps>((args) => <YesNoField {...args} />, {
  label: 'Are there something or other?',
  description: 'Blah blah blah'
});

export const UncontrolledValue = RUIComponentStory(Overview, {
  label: 'Are there something or other?',
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
    label: 'Are there something or other?'
  }
);

export const Required = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  necessityIndicator: true,
  isRequired: true
});

export const ReadOnly = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  defaultValue: true,
  isReadOnly: true
});

export const Disabled = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  defaultValue: true,
  isDisabled: true
});

export const Error = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  necessityIndicator: true,
  isRequired: true,
  validationState: 'invalid',
  errorMessage: 'Please specify an API to use.'
});
