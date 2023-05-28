import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { ToggleButton, ToggleButtonProps } from './ToggleButton';

export default {
  title: 'Buttons / ToggleButton',
  ...RUIComponentMeta(ToggleButton).withStyleSystemProps()
};

export const Overview = RUIComponentStory<ToggleButtonProps>((args) => (
  <ToggleButton {...args}>Toggle</ToggleButton>
));

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true
});
