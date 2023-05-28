import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { __TEMPLATE__ as Component, __TEMPLATE__Props } from './__TEMPLATE__';

export default {
  title: '__GROUP__ / __TEMPLATE__',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const __TEMPLATE__ = RUIComponentStory<__TEMPLATE__Props>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
