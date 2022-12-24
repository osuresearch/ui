import React from 'react';
import { Story } from '@storybook/react';

import { Text, TextProps } from './Text';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<TextProps>('Components', Text)
  .withStyleSystemProps()
  .withBadge('stable');

const Template: Story<TextProps> = (args) => (
  <Text {...args}>The quick brown fox jumped over the lazy dog.</Text>
);

export const Overview = RUIComponentStory(Template);

export const HelpText = RUIComponentStory(Template, {
  c: 'dark',
  fs: 'sm'
}).withDescription(`
  Additional help text is typically shown smaller and slightly
  lighter than the base color to de-emphasize the content
`);
