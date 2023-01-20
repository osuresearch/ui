import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { HamburgerButton as Component, HamburgerButtonProps } from './HamburgerButton';

export default RUIComponentMeta<HamburgerButtonProps>(
  'Components',
  Component
).withStyleSystemProps();

export const HamburgerButton = RUIComponentStory<HamburgerButtonProps>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
