import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { NecessityIndicator as Component, NecessityIndicatorProps } from './NecessityIndicator';

export default RUIComponentMeta<NecessityIndicatorProps>('Utilities', Component)
  .withStyleSystemProps()
  .withBadge('experimental');

export const NecessityIndicator = RUIComponentStory<NecessityIndicatorProps>((args) => (
  <Component {...args} />
));
