import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { RadioIconProps, RadioIcon as Component } from './RadioIcon';

export default RUIComponentMeta<RadioIconProps>('Internal', Component).withStyleSystemProps();

export const RadioIcon = RUIComponentStory<RadioIconProps>(
  (args) => <Component {...args} />,
  {
    isSelected: true
  }
);
