import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { OhioStateFooter, OhioStateFooterProps } from './OhioStateFooter';

export default RUIComponentMeta<OhioStateFooterProps>('Ohio State', OhioStateFooter);

export const Overview = RUIComponentStory<OhioStateFooterProps>(
  (args) => <OhioStateFooter {...args} />,
  {
    unit: 'Office of Learning Relations Excellence',
    address1: '100 Building Name',
    address2: '1 Oval Mall',
    address3: 'Columbus, OH 43210',
    contactWebsite: 'https://www.osu.edu',

    accessibilityEmail: 'accessibility@osu.edu',
    accessibilityPhone: '614-292-1760',

    twitter: 'https://twitter.com/osuresearch',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com'
  }
);

export const OfficeOfResearch = RUIComponentStory(Overview, {
  unit: 'Office of Research',
  address1: '208 Bricker Hall',
  address2: '190 North Oval Mall',
  address3: 'Columbus, OH 43210',

  contactWebsite: 'https://research.osu.edu',
  contactPhone: '614-292-1582',

  accessibilityEmail: 'oraccessibility@osu.edu',

  twitter: 'https://twitter.com/osuresearch'
}).withDescription(`
  This example provides the default values for the Office of Research.

  Applications for units that we directly support, such as the Office of
  Responsible Research Practices, may provide contact information for that
  unit within the footer.

  Social links may be omitted for business applications.
`);
