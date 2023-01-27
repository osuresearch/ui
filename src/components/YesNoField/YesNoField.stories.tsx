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
  defaultValue: '1'
});

export const ControlledValue = RUIComponentStory<YesNoFieldProps>(
  (args) => {
    const [value, setValue] = useState('');

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
  defaultValue: '1',
  isReadOnly: true
}).withDescription(`
  Read only state is not supported natively by select, but our
  component supports an \`isReadOnly\` prop and custom render state
  for consistency with other form fields.
`);

export const Disabled = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  defaultValue: '1',
  isDisabled: true
});

export const Error = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  necessityIndicator: true,
  isRequired: true,
  validationState: 'invalid',
  errorMessage: 'Please specify an API to use.'
});
