import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Pagination, Stack } from '@mui/material';

const meta = {
  title: 'MUI Components/Pagination',
  component: Pagination,
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Colors = {
  render: (args) => (
    <Stack gap={2}>
      <Pagination {...args} count={10} />
      <Pagination {...args} count={10} color="primary" />
      <Pagination {...args} count={10} color="secondary" />
      <Pagination {...args} count={10} disabled />
    </Stack>
  ),
} satisfies Story;

export const Ranges = {
  render: (args) => (
    <Stack gap={2}>
      <Pagination {...args} count={100} defaultPage={6} siblingCount={0} />
      <Pagination {...args} count={100} defaultPage={6} />
      <Pagination {...args} count={100} defaultPage={6} siblingCount={0} boundaryCount={2} />
      <Pagination {...args} count={100} defaultPage={6} boundaryCount={2} />
    </Stack>
  ),
} satisfies Story;
