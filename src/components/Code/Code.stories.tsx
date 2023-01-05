import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { CodeProps, Code as Component } from './Code';

export default RUIComponentMeta<CodeProps>('Components', Component)
  .withStyleSystemProps()
  .withBadge('experimental');

export const Code = RUIComponentStory<CodeProps>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
