import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { RadioButtonIcon as Component, RadioButtonIconProps } from './RadioButtonIcon';

export default RUIComponentMeta<RadioButtonIconProps>('Internal', Component).withStyleSystemProps();

export const RadioButtonIcon = RUIComponentStory<RadioButtonIconProps>(
  (args) => <Component {...args} />,
  {
    isSelected: true
  }
);
