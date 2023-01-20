import React, { forwardRef, useRef, useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Text } from '../Text';
import { TextAreaField, TextAreaFieldProps } from './TextAreaField';

export default RUIComponentMeta<TextAreaFieldProps>('Forms', TextAreaField).withStyleSystemProps();

export const Overview = RUIComponentStory<TextAreaFieldProps>(
  (args) => <TextAreaField {...args} />,
  {
    label: 'Email',
    description: 'Enter an email for us to contact you about your order.'
  }
);

export const DefaultValue = RUIComponentStory<TextAreaFieldProps>(Overview, {
  label: 'Email',
  defaultValue: 'chase@example.com'
});

export const ControlledValue = RUIComponentStory<TextAreaFieldProps>(
  (args) => {
    const [value, setValue] = useState('');

    return (
      <>
        <TextAreaField value={value} onChange={setValue} {...args} />
        <Text>{`Your email is: ${value}`}</Text>
      </>
    );
  },
  {
    label: 'Email'
  }
);

export const Required = RUIComponentStory<TextAreaFieldProps>(Overview, {
  label: 'Email',
  necessityIndicator: true,
  isRequired: true
});

export const ReadOnly = RUIComponentStory<TextAreaFieldProps>(Overview, {
  label: 'Email',
  value: 'chase@example.com',
  isReadOnly: true
});

export const Disabled = RUIComponentStory<TextAreaFieldProps>(Overview, {
  label: 'Email',
  value: 'chase@example.com',
  isDisabled: true
});

export const Error = RUIComponentStory<TextAreaFieldProps>(Overview, {
  label: 'Email',
  validationState: 'invalid',
  errorMessage: 'Please enter a valid email address.'
});

export const WithAddedRows = RUIComponentStory<TextAreaFieldProps>(Overview, {
  label: 'Email',
  rows: 5
});
