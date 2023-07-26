import { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import { Avatar, Button, Divider, Skeleton, Stack, Typography } from '@mui/material';

import { LazyLoaded } from './LazyLoaded';

const meta = {
  title: 'Layout/LazyLoaded',
  component: LazyLoaded,
  argTypes: {},
} satisfies Meta<typeof LazyLoaded>;

export default meta;
type Story = StoryObj<typeof LazyLoaded>;

export const Example = {
  render: (args) => {
    const [loading, setLoading] = useState(true);

    const Loading = () => (
      <Stack direction="row" gap={1}>
        <Skeleton variant="circular" width={40} height={40} />
        <Stack>
          <Skeleton width={100} className="mb-2" />
          <Skeleton width={75} />
        </Stack>
      </Stack>
    );

    return (
      <>
        <LazyLoaded {...args} loading={loading} placeholder={<Loading />}>
          <Stack direction="row" gap={1}>
            <Avatar alt="Chase McManning" src="https://opic.osu.edu/mcmanning.1" />
            <Stack>
              <Typography>Chase McManning</Typography>
              <Typography fontSize="small">Sr. Enterprise Applications Engineer</Typography>
            </Stack>
          </Stack>
        </LazyLoaded>

        <Divider sx={{ my: 2 }} />
        <Button onClick={() => setLoading(!loading)}>Toggle Loading State</Button>
      </>
    );
  },
  args: {},
} satisfies Story;
