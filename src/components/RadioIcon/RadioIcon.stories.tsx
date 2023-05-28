import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { RadioIconProps, RadioIcon as Component } from './RadioIcon';

export default {
  title: 'Internal / RadioIcon',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const RadioIcon = RUIComponentStory<RadioIconProps>(
  (args) => <Component {...args} />,
  {
    isSelected: true
  }
);
