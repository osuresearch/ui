import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { LinkProps } from '../Link';
import { ExternalLink } from './ExternalLink';

export default RUIComponentMeta<LinkProps>('Buttons', ExternalLink).withStyleSystemProps();

export const Overview = RUIComponentStory<LinkProps>((args) => (
  <ExternalLink href="https://research.osu.edu" {...args}>
    research.osu.edu
  </ExternalLink>
));

// export const White = RUIComponentStory<LinkProps>(
//   (args) => (
//     <Box bgc="primary" c="primary-contrast" p="lg">
//       Here is an example of an{' '}
//       <ExternalLink href="https://research.osu.edu" {...args}>
//         inline ExternalLink
//       </ExternalLink>{' '}
//       within a paragraph on a scarlet background.
//     </Box>
//   ),
//   {
//     variant: 'white'
//   }
// ).withDescription(
//   'Use the white variant for external links that will always be against a dark background'
// );

export const Polymorphic = RUIComponentStory<LinkProps>((args) => (
  <ExternalLink as="button" onClick={() => alert('Clicked ExternalLink button!')} {...args}>
    button rendered as a ExternalLink
  </ExternalLink>
));
