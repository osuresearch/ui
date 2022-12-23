import React from 'react';
import { Ring, RingProps } from './Ring';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<RingProps>('Utilities', Ring)
  .withStyleSystemProps()
  .withBadge('experimental');

export const Overview = RUIComponentStory<RingProps>((args) => (
  <Ring {...args}>Component template created through newComponent.mjs</Ring>
));
