import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { CheckboxIconProps, CheckboxIcon as Component } from './CheckboxIcon';

export default RUIComponentMeta<CheckboxIconProps>('Utilities', Component)
  .withStyleSystemProps()
  ;

export const CheckboxIcon = RUIComponentStory<CheckboxIconProps>(
  (args) => <Component {...args} />,
  {
    isSelected: true
  }
);
