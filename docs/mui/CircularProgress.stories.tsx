import { Meta, StoryObj } from '@storybook/react';

import React, { useEffect, useState } from 'react';

import { CircularProgress, Stack } from '@mui/material';

const meta = {
  title: 'MUI Components/CircularProgress',
  component: CircularProgress,
  argTypes: {},
} satisfies Meta<typeof CircularProgress>;

export default meta;

type Story = StoryObj<typeof CircularProgress>;

export const Nondeterminate = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <CircularProgress {...args} />
      <CircularProgress {...args} color="secondary" />
    </Stack>
  ),
} satisfies Story;

export const Determinate = {
  render: (args) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <Stack spacing={2} direction="row">
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
        <CircularProgress variant="determinate" value={progress} />
      </Stack>
    );
  },
} satisfies Story;
