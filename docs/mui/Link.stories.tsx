import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Link, Paper, Stack, Typography } from '@mui/material';

const meta = {
  title: 'MUI Components/Link',
  component: Link,
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof Link>;

export const Example = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <Link href="#">Default link</Link>
      <Link href="#" color="inherit">
        color=inherit
      </Link>
      <Link href="#" variant="caption">
        variant=caption
      </Link>
    </Stack>
  ),
} satisfies Story;

export const Inverted = {
  render: (args) => (
    <Paper sx={{ p: 2, bgcolor: 'primary.main' }}>
      <Typography color="primary.contrastText">
        Here is an example of an{' '}
        <Link href="#" color="primary.contrastText">
          inline link
        </Link>{' '}
        within a paragraph on the primary background.
      </Typography>
    </Paper>
  ),
} satisfies Story;
