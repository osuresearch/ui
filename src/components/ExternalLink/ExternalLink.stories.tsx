import { Meta, StoryObj } from '@storybook/react';

import { ExternalLink } from './ExternalLink';

const meta: Meta<typeof ExternalLink> = {
  title: 'Navigation/ExternalLink',
  component: ExternalLink,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ExternalLink>;

export const Example: Story = {
  args: {
    href: 'https://research.osu.edu',
    children: 'research.osu.edu',
  },
};
