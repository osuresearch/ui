import { Meta, StoryObj } from '@storybook/react';

import { OhioStateNavbar } from './OhioStateNavbar';

const meta = {
  title: 'Ohio State/OhioStateNavbar',
  component: OhioStateNavbar,
  argTypes: {},
} satisfies Meta<typeof OhioStateNavbar>;

export default meta;
type Story = StoryObj<typeof OhioStateNavbar>;

export const Light = {
  args: {
    variant: 'light',
  },
} satisfies Story;

export const Dark = {
  args: {
    variant: 'dark',
  },
} satisfies Story;
