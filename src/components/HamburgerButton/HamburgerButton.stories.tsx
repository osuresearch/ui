import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { HamburgerButton as Component, HamburgerButtonProps } from './HamburgerButton';

export default {
  title: 'Buttons / HamburgerButton',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const HamburgerButton = RUIComponentStory<HamburgerButtonProps>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
