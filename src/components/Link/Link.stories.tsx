import React from 'react';
import { Story } from '@storybook/react';
import { Link, LinkProps, Paper } from '@osuresearch/ui';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<LinkProps>('Components', Link)
  .withStyleSystemProps()
  .withBadge('stable');

const Template: Story<LinkProps> = (args) => <Link {...args}>research.osu.edu</Link>;

export const Default = RUIComponentStory(Template, {
  href: 'https://research.osu.edu',
  variant: 'default'
});

export const White = RUIComponentStory<LinkProps>(
  (args) => (
    <Paper c="black" p="lg">
      <Link {...args}>research.osu.edu</Link>
    </Paper>
  ),
  {
    href: 'https://research.osu.edu',
    variant: 'white'
  }
).withDescription('Use the white variant for links that will always be against a dark background');
