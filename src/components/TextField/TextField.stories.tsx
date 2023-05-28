import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'Forms / TextField',
  ...RUIComponentMeta(TextField).withStyleSystemProps()
};

export const Overview = RUIComponentStory<TextFieldProps>((args) => <TextField {...args} />, {
  label: 'Email',
  description: 'Enter an email for us to spam you with daily offers.'
});

export const UncontrolledValue = RUIComponentStory<TextFieldProps>(Overview, {
  label: 'Email',
  defaultValue: 'chase@example.com'
});

export const ControlledValue = RUIComponentStory<TextFieldProps>(
  (args) => {
    const [value, setValue] = useState<string | undefined>('');

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

export const WithAriaLabel = RUIComponentStory<TextFieldProps>(Overview, {
  'aria-label': 'Email',
  value: 'chase@example.com',
});

export const WithIcon = RUIComponentStory(Overview, {
  renderLeft: <Icon c="neutral" name="github" size={24} p="xs" />,
  leftWidth: 42,
  ['aria-label']: 'Enter your GitHub information',
  placeholder: 'Your GitHub username',
  maw: 300
});

// TODO: Don't like the style hack for the buttons. Maybe it can be
// a variant / setting? Or the content container is guaranteed within border?
export const WithButton = RUIComponentStory(Overview, {
  renderLeft: <Icon c="neutral-subtle" name="search" size={18} p="sm" />,
  leftWidth: 42,
  renderRight: <Button h="100%">Search</Button>,
  rightWidth: 80,
  placeholder: 'buckeye.1'
}).withDescription(`
  Left and right slots are inset within the input border to prevent
  content from overlapping focus and error state borders.

  Buttons may use \`h="100%"\` to fill the height of slot.
`);
