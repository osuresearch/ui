import React from 'react';
import { SectionTitle as Component, SectionTitleProps } from '@osuresearch/ui';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<SectionTitleProps>('Components', Component)
  .withBadge('atom')
  .withBadge('stable');

export const SectionTitle = RUIComponentStory<SectionTitleProps>((args) => (
  <Component {...args}>This is a Section Heading</Component>
));
