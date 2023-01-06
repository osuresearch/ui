import { Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Box } from '../Box';
import { Link, LinkProps } from './Link';

export default RUIComponentMeta<LinkProps>('Components', Link)
  .withStyleSystemProps()
  
  ;

export const Overview = RUIComponentStory<LinkProps>((args) => (
  <Link href="https://research.osu.edu" {...args}>
    research.osu.edu
  </Link>
));

export const White = RUIComponentStory<LinkProps>(
  (args) => (
    <Box bgc="primary" c="primary-contrast" p="lg">
      Here is an example of an{' '}
      <Link href="https://research.osu.edu" {...args}>
        inline link
      </Link>{' '}
      within a paragraph on a scarlet background.
    </Box>
  ),
  {
    variant: 'white'
  }
).withDescription('Use the white variant for links that will always be against a dark background');

export const Polymorphic = RUIComponentStory<LinkProps>((args) => (
  <Link as="button" onClick={(e) => alert('Clicked link button!')} {...args}>
    button rendered as a link
  </Link>
));
