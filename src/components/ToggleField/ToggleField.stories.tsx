import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { ToggleField as Component, ToggleFieldProps } from './ToggleField';

export default RUIComponentMeta<ToggleFieldProps>('Internal', Component).withStyleSystemProps();

export const ToggleField = RUIComponentStory<ToggleFieldProps>((args) => <Component {...args} />, {
  label: 'Label',
  description: 'Description'
});
