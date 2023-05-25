import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Box } from '../Box';
import { Link, LinkProps } from './Link';

export default RUIComponentMeta<LinkProps>('Buttons', Link).withStyleSystemProps();

export const Overview = RUIComponentStory<LinkProps>((args) => (
  <Link href="https://research.osu.edu" {...args}>
    research.osu.edu
  </Link>
));

export const Subtle = RUIComponentStory<LinkProps>(
  (args) => (
    <Box bgc="primary" c="primary-inverse" p="lg">
      Here is an example of an{' '}
      <Link href="https://research.osu.edu" {...args}>
        subtle link
      </Link>{' '}
      within a paragraph on a primary background.
    </Box>
  ),
  {
    variant: 'subtle'
  }
).withDescription('Use the subtle variant for links that will be against an accented background');

export const Polymorphic = RUIComponentStory<LinkProps>((args) => (
  <Link as="button" onClick={() => alert('Clicked link button!')} {...args}>
    button rendered as a link
  </Link>
));
