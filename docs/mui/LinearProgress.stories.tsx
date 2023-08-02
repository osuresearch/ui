import { Meta, StoryObj } from '@storybook/react';

import React, { useEffect, useState } from 'react';

import { CircularProgress, LinearProgress, Stack } from '@mui/material';

const meta = {
  title: 'MUI Components/Progress',
  component: LinearProgress,
  argTypes: {},
} satisfies Meta<typeof LinearProgress>;

export default meta;

type Story = StoryObj<typeof LinearProgress>;
type CircularStory = StoryObj<typeof CircularProgress>;

export const LinearIndeterminate = {
  render: (args) => (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <LinearProgress {...args} />
      <LinearProgress {...args} color="secondary" />
    </Stack>
  ),
} satisfies Story;

export const LinearDeterminate = {
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
        <LinearProgress {...args} variant="determinate" value={25} />
        <LinearProgress {...args} variant="determinate" value={50} />
        <LinearProgress {...args} variant="determinate" value={75} />
        <LinearProgress {...args} variant="determinate" value={100} />
        <LinearProgress {...args} variant="determinate" value={progress} />
      </Stack>
    );
  },
} satisfies Story;

export const CircularIndeterminate = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <CircularProgress {...args} />
      <CircularProgress {...args} color="secondary" />
    </Stack>
  ),
} satisfies CircularStory;

export const CircularDeterminate = {
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
        <CircularProgress {...args} variant="determinate" value={25} />
        <CircularProgress {...args} variant="determinate" value={50} />
        <CircularProgress {...args} variant="determinate" value={75} />
        <CircularProgress {...args} variant="determinate" value={100} />
        <CircularProgress {...args} variant="determinate" value={progress} />
      </Stack>
    );
  },
} satisfies CircularStory;
