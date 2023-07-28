import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';

const meta = {
  title: 'MUI Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const BasicBreadcrumbs = {
  render: (args) => (
    <div role="presentation">
      <Breadcrumbs {...args} aria-label="breadcrumb">
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Accessories</Link>
        <Link href="#">New Collection</Link>
        <span>Belts</span>
      </Breadcrumbs>
    </div>
  ),
} satisfies Story;

export const CollapsedBreadcrumbs = {
  ...BasicBreadcrumbs,
  args: {
    maxItems: 2,
  },
} satisfies Story;
