import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Text } from '../Text';
import { InputField as Component, InputFieldProps } from './InputField';

export default RUIComponentMeta<InputFieldProps>('Internal', Component).withStyleSystemProps();

export const InputField = RUIComponentStory<InputFieldProps>(
  (args) => (
    <Component {...args}>
      <Text>Input slot</Text>
    </Component>
  ),
  {
    label: 'Label',
    description: 'Description'
  }
);
