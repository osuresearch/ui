import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { CheckboxIconProps, CheckboxIcon as Component } from './CheckboxIcon';

export default RUIComponentMeta<CheckboxIconProps>('Internal', Component).withStyleSystemProps();

export const CheckboxIcon = RUIComponentStory<CheckboxIconProps>(
  (args) => <Component {...args} />,
  {
    isSelected: true
  }
);
