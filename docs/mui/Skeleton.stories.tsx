import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Divider, Skeleton, Stack, Typography } from '@mui/material';

const meta = {
  title: 'MUI Components/Skeleton',
  component: Skeleton,
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Text = {
  render: (args) => <Skeleton variant="text" {...args} />,
} satisfies Story;

export const Rectangular = {
  render: (args) => <Skeleton variant="rectangular" width={210} height={118} {...args} />,
} satisfies Story;

export const Circular = {
  render: (args) => <Skeleton variant="circular" {...args} width={40} height={40} />,
} satisfies Story;

export const InferredDimensions = {
  render: (args) => (
    <Stack>
      <Typography variant="h1">
        <Skeleton {...args} />
      </Typography>
      <Typography variant="h2">
        <Skeleton {...args} />
      </Typography>
      <Typography variant="h3">
        <Skeleton {...args} />
      </Typography>

      <Divider sx={{ my: 1 }} />
      <Typography variant="body1">
        <Skeleton {...args} />
        <Skeleton {...args} />
        <Skeleton {...args} />
      </Typography>
      <Divider sx={{ my: 1 }} />

      <Typography variant="caption">
        <Skeleton {...args} />
      </Typography>
    </Stack>
  ),
} satisfies Story;
