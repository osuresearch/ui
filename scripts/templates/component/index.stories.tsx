import { __TEMPLATE__ as Component, __TEMPLATE__Props } from '@osuresearch/ui';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<__TEMPLATE__Props>('__GROUP__', Component)
  .withStyleSystemProps()
  .withBadge('experimental');

export const __TEMPLATE__ = RUIComponentStory<__TEMPLATE__Props>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
