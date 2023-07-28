import { Meta, StoryObj } from '@storybook/react';

import { OhioStateFooter } from './OhioStateFooter';

const meta = {
  title: 'Ohio State/OhioStateFooter',
  component: OhioStateFooter,
  argTypes: {},
} satisfies Meta<typeof OhioStateFooter>;

export default meta;
type Story = StoryObj<typeof OhioStateFooter>;

export const Example = {
  args: {
    unit: 'Office of Learning Relations Excellence',
    address1: '100 Building Name',
    address2: '1 Oval Mall',
    address3: 'Columbus, OH 43210',
    contactWebsite: 'https://www.osu.edu',

    accessibilityEmail: 'accessibility@osu.edu',
    accessibilityPhone: '614-292-1760',

    twitter: 'https://twitter.com/ohiostate',
    facebook: 'https://facebook.com/osu',
    instagram: 'https://instagram.com/theohiostateuniversity',
    youtube: 'https://www.youtube.com/user/OhioStateUniversity',
  },
} satisfies Story;

export const OfficeOfResearch = {
  args: {
    unit: 'Office of Research',
    address1: '208 Bricker Hall',
    address2: '190 North Oval Mall',
    address3: 'Columbus, OH 43210',

    contactWebsite: 'https://research.osu.edu',
    contactPhone: '614-292-1582',

    accessibilityEmail: 'oraccessibility@osu.edu',

    twitter: 'https://twitter.com/osuresearch',
  },
} satisfies Story;
