import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { CodeProps, Code as Component } from './Code';

export default {
  title: 'Components / Code',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const Code = RUIComponentStory<CodeProps>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
