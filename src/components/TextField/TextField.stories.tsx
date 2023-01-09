import React, { forwardRef, useRef, useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Text } from '../Text';
import { TextField, TextFieldProps } from './TextField';

export default RUIComponentMeta<TextFieldProps>('Forms', TextField).withStyleSystemProps();

export const Overview = RUIComponentStory<TextFieldProps>((args) => <TextField {...args} />, {
  label: 'Email',
  description: 'Enter an email for us to spam you with daily offers.'
});

export const DefaultValue = RUIComponentStory<TextFieldProps>(Overview, {
  label: 'Email',
  defaultValue: 'chase@example.com'
});

export const ControlledValue = RUIComponentStory<TextFieldProps>(
  (args) => {
    const [value, setValue] = useState('');

    return (
      <>
        <TextField value={value} onChange={setValue} {...args} />
        <Text>{`Your email is: ${value}`}</Text>
      </>
    );
  },
  {
    label: 'Email'
  }
);

export const Required = RUIComponentStory<TextFieldProps>(Overview, {
  label: 'Email',
  necessityIndicator: true,
  isRequired: true
});

export const ReadOnly = RUIComponentStory<TextFieldProps>(Overview, {
  label: 'Email',
  value: 'chase@example.com',
  isReadOnly: true
});

export const Disabled = RUIComponentStory<TextFieldProps>(Overview, {
  label: 'Email',
  value: 'chase@example.com',
  isDisabled: true
});

export const Error = RUIComponentStory<TextFieldProps>(Overview, {
  label: 'Email',
  validationState: 'invalid',
  errorMessage: 'Please enter a valid email address.'
});

export const WithRHF7 = RUIComponentStory<TextFieldProps>(
  (args) => {
    const [value, setValue] = useState('Foo bar');

    return (
      <>
        <TextField value={value} onChange={setValue} {...args} />
        <Text>{`You entered: ${value}`}</Text>
      </>
    );
  },
  {
    name: 'rhf7-input',
    label: 'Subscribe'
  }
);
