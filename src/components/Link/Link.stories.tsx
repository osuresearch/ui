import { Box, Link, LinkProps } from '@osuresearch/ui';
import { Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<LinkProps>('Components', Link)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

const Template: Story<LinkProps> = (args) => <Link {...args}>research.osu.edu</Link>;

export const Default = RUIComponentStory(Template, {
  href: 'https://research.osu.edu',
  variant: 'default'
});

export const White = RUIComponentStory<LinkProps>(
  (args) => (
    <Box bgc="primary" c="primary-contrast" p="lg">
      Here is an example of an <Link {...args}>inline link</Link> within a paragraph on a scarlet
      background.
    </Box>
  ),
  {
    href: 'https://research.osu.edu',
    variant: 'white'
  }
).withDescription('Use the white variant for links that will always be against a dark background');
