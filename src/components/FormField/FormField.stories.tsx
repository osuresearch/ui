import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { FormField as Component, FormFieldProps } from './FormField';

export default RUIComponentMeta<FormFieldProps>('Forms', Component).withStyleSystemProps();

export const FormField = RUIComponentStory<FormFieldProps>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
