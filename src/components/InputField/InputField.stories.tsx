import React, { forwardRef, useRef, useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Text } from '../Text';
import { InputField as Component, InputFieldProps } from './InputField';

export default RUIComponentMeta<InputFieldProps>('Forms', Component)
  .withStyleSystemProps()
  .withBadge('experimental');

export const Overview = RUIComponentStory<InputFieldProps>((args) => <Component {...args} />, {
  label: 'Email',
  description: 'Enter an email for us to contact you about your order.'
});

export const DefaultValue = RUIComponentStory<InputFieldProps>(Overview, {
  label: 'Email',
  defaultValue: 'chase@example.com'
});

export const ControlledValue = RUIComponentStory<InputFieldProps>(
  (args) => {
    const [value, setValue] = useState('');

    return (
      <>
        <Component value={value} onChange={setValue} {...args} />
        <Text>{`Your email is: ${value}`}</Text>
      </>
    );
  },
  {
    label: 'Email'
  }
);

export const Required = RUIComponentStory<InputFieldProps>(Overview, {
  label: 'Email',
  isRequired: true
});

export const ReadOnly = RUIComponentStory<InputFieldProps>(Overview, {
  label: 'Email',
  value: 'chase@example.com',
  isReadOnly: true
});

export const Disabled = RUIComponentStory<InputFieldProps>(Overview, {
  label: 'Email',
  value: 'chase@example.com',
  isDisabled: true
});

export const Error = RUIComponentStory<InputFieldProps>(Overview, {
  label: 'Email',
  validationState: 'invalid',
  errorMessage: 'Please enter a valid email address.'
});

export const WithRHF7 = RUIComponentStory<InputFieldProps>(
  (args) => {
    const [value, setValue] = useState('Foo bar');

    return (
      <>
        <Component value={value} onChange={setValue} {...args} />
        <Text>{`You entered: ${value}`}</Text>
      </>
    );
  },
  {
    name: 'rhf7-input',
    label: 'Subscribe'
  }
);

// Super simple example of a custom component that we can use as a slot
const PasswordField = forwardRef<HTMLInputElement>((props, ref) => (
  <input {...props} ref={ref} type="password" />
));

export const WithInputSlot = RUIComponentStory<InputFieldProps>(
  (args) => {
    const [value, setValue] = useState('');

    return (
      <>
        <Component inputSlot={PasswordField} value={value} onChange={setValue} {...args} />

        <Text>{`Your password is: ${value}`}</Text>
      </>
    );
  },
  {
    label: 'Password'
  }
);

// TODO: Impl diff slot

export const WithDiffSlot = RUIComponentStory<InputFieldProps>(Overview, {
  label: 'Email',
  showDiff: true,
  previousValue: 'chase@example.com'
});
