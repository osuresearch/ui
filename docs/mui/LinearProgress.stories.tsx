import { Meta, StoryObj } from '@storybook/react';

import React, { useEffect, useState } from 'react';

import { LinearProgress, Stack } from '@mui/material';

const meta = {
  title: 'MUI Components/LinearProgress',
  component: LinearProgress,
  argTypes: {},
} satisfies Meta<typeof LinearProgress>;

export default meta;

type Story = StoryObj<typeof LinearProgress>;

export const Indeterminate = {
  render: (args) => (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <LinearProgress {...args} />
      <LinearProgress {...args} color="secondary" />
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
      <Stack sx={{ width: '100%' }} spacing={2}>
        <LinearProgress variant="determinate" value={25} />
        <LinearProgress variant="determinate" value={50} />
        <LinearProgress variant="determinate" value={75} />
        <LinearProgress variant="determinate" value={100} />
        <LinearProgress variant="determinate" value={progress} />
      </Stack>
    );
  },
} satisfies Story;
