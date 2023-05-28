import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Text } from '../Text';
import { FormField as Component, FormFieldProps } from './FormField';

export default {
  title: 'Internal / FormField',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const FormField = RUIComponentStory<FormFieldProps<string>>((args) => (
  <Component {...args}>
    <Text>No example available</Text>
  </Component>
));
