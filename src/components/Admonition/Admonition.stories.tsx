import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Stack } from '@mui/material';

import { Admonition } from './Admonition';

const meta = {
  title: 'Components/Admonition',
  component: Admonition,
  argTypes: {},
} satisfies Meta<typeof Admonition>;

export default meta;
type Story = StoryObj<typeof Admonition>;

export const Variants = {
  render: (args) => (
    <Stack gap={2}>
      <Admonition {...args} variant="note">
        This is a <strong>note</strong> to call out to the user
      </Admonition>
      <Admonition {...args} variant="tip">
        This is a <strong>tip</strong> to call out to the user
      </Admonition>
      <Admonition {...args} variant="info">
        This is a <strong>info</strong> to call out to the user
      </Admonition>
      <Admonition {...args} variant="caution">
        This is a <strong>caution</strong> to call out to the user
      </Admonition>
      <Admonition {...args} variant="danger">
        This is a <strong>danger</strong> to call out to the user
      </Admonition>
    </Stack>
  ),
  args: {},
} satisfies Story;

export const CustomTitle = {
  args: {
    title: 'Custom title',
    variant: 'info',
    children: 'This is content to call out to the user',
  },
} satisfies Story;
