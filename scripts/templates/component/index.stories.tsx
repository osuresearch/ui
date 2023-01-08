import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { __TEMPLATE__ as Component, __TEMPLATE__Props } from './__TEMPLATE__';

export default RUIComponentMeta<__TEMPLATE__Props>('__GROUP__', Component).withStyleSystemProps();

export const __TEMPLATE__ = RUIComponentStory<__TEMPLATE__Props>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
