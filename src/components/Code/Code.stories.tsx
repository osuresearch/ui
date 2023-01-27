import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { CodeProps, Code as Component } from './Code';

export default RUIComponentMeta<CodeProps>('Components', Component).withStyleSystemProps();

export const Code = RUIComponentStory<CodeProps>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
