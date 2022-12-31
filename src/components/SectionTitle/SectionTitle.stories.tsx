import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { SectionTitle as Component, SectionTitleProps } from './SectionTitle';

export default RUIComponentMeta<SectionTitleProps>('Components', Component)
  .withBadge('atom')
  .withBadge('stable');

export const SectionTitle = RUIComponentStory<SectionTitleProps>((args) => (
  <Component {...args}>This is a Section Heading</Component>
));
