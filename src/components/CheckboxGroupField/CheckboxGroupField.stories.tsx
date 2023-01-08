import React, { useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import {
  CheckboxGroupField,
  CheckboxGroupFieldProps,
  CBItem as CheckboxItem
} from './CheckboxGroupField';

export default RUIComponentMeta<CheckboxGroupFieldProps>(
  'Forms',
  CheckboxGroupField
).withStyleSystemProps();

export const Overview = RUIComponentStory<CheckboxGroupFieldProps>(
  (args) => (
    <CheckboxGroupField label="Favorite sports" {...args}>
      <CheckboxItem
        value="soccer"
        label="Soccer"
        description="Each checkbox item may have its own description"
      />
      <CheckboxItem value="baseball" label="Baseball" />
      <CheckboxItem value="basketball" label="Basketball" />
    </CheckboxGroupField>
  ),
  {
    description: 'This is description content for the entire set'
  }
);

export const DefaultValue = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  defaultValue: ['soccer', 'baseball']
});

export const ControlledValue = RUIComponentStory<CheckboxGroupFieldProps>((args) => {
  const [value, setValue] = useState(['soccer', 'baseball']);

  return (
    <CheckboxGroupField value={value} onChange={setValue} {...args}>
      <CheckboxItem value="soccer" label="Soccer" />
      <CheckboxItem value="baseball" label="Baseball" />
      <CheckboxItem value="basketball" label="Basketball" />
    </CheckboxGroupField>
  );
});

export const Required = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  isRequired: true,
  necessityIndicator: true
});

export const ReadOnly = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  defaultValue: ['soccer', 'baseball'],
  isReadOnly: true
});

export const Disabled = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  defaultValue: ['soccer', 'baseball'],
  isDisabled: true
});

export const DisabledItem = RUIComponentStory<CheckboxGroupFieldProps>((args) => (
  <CheckboxGroupField label="Favorite sports" {...args}>
    <CheckboxItem value="soccer" label="Soccer" />
    <CheckboxItem value="baseball" label="Baseball" isDisabled />
    <CheckboxItem value="basketball" label="Basketball" />
  </CheckboxGroupField>
));

export const Error = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  validationState: 'invalid',
  errorMessage: 'Select at least one sport.'
});
