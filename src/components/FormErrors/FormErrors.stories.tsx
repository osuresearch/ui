import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { FormErrors as Component, FormErrorsProps } from './FormErrors';

export default RUIComponentMeta<FormErrorsProps>('Forms', Component).withStyleSystemProps();

export const FormErrors = RUIComponentStory<FormErrorsProps>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
