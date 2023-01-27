import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { UnstyledToggle, UnstyledToggleProps } from './UnstyledToggle';

export default RUIComponentMeta<UnstyledToggleProps>(
  'Unstyled',
  UnstyledToggle
).withStyleSystemProps();

export const Overview = RUIComponentStory<UnstyledToggleProps>((args) => (
  <UnstyledToggle {...args}>Toggle</UnstyledToggle>
));

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true
});

export const OnPress = RUIComponentStory(Overview, {
  onPress: (e) => alert('Clicked!'),
  onChange: (e) => alert(e)
}).withDescription(
  'This is similar to the standard `onClick` event, but normalized to support all interaction methods (mouse, keyboard, and touch) equally.'
);

export const Polymorphic = RUIComponentStory((args) => (
  <UnstyledToggle as="span">Polymorphic toggle</UnstyledToggle>
));
