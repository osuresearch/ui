import React, { useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Text } from '../Text';
import { ToggleField as Component, ToggleFieldProps } from './ToggleField';

export default RUIComponentMeta<ToggleFieldProps>('Internal', Component).withStyleSystemProps();

export const ToggleField = RUIComponentStory<ToggleFieldProps>((args) => <Component {...args} />, {
  label: 'Label',
  description: 'Description'
});
