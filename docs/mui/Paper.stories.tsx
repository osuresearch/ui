import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Paper, Stack } from '@mui/material';

const meta = {
  title: 'MUI Components/Paper',
  component: Paper,
  argTypes: {},
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof Paper>;

export const Example = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <Paper {...args} elevation={0} />
      <Paper {...args} />
      <Paper {...args} elevation={3} />
      <Paper {...args} variant="outlined" />
    </Stack>
  ),
  args: {
    sx: { width: 128, height: 128 },
  },
} satisfies Story;
