import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup, ButtonGroupProps, Stack } from '@mui/material';

const meta = {
  title: 'MUI Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {}
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
  args: {}
} satisfies Story;

export const Contained = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'contained'
  }
} satisfies Story;

export const Outlined = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'outlined'
  }
} satisfies Story;

export const Text = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'text'
  }
} satisfies Story;

export const Secondary = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'contained',
    color: 'secondary'
  }
} satisfies Story;
