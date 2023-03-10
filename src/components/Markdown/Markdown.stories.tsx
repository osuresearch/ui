import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Markdown as Component, MarkdownProps } from './Markdown';

export default RUIComponentMeta<MarkdownProps>('Components', Component).withStyleSystemProps();

export const Markdown = RUIComponentStory<MarkdownProps>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
