import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { ToggleButton, ToggleButtonProps } from './ToggleButton';

export default RUIComponentMeta<ToggleButtonProps>(
  'Components',
  ToggleButton
).withStyleSystemProps();

export const Overview = RUIComponentStory<ToggleButtonProps>((args) => (
  <ToggleButton {...args}>Toggle</ToggleButton>
));

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true
});
