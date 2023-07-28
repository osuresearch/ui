import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Button as MuiButton, ButtonProps as MuiButtonProps, Stack } from '@mui/material';

import { Icon } from '../../src/components';

// Whitelist specific props from MUI for Storybook demoing
export type ButtonProps = Pick<
  MuiButtonProps,
  'variant' | 'size' | 'color' | 'children' | 'disabled' | 'onClick' | 'href' | 'sx'
>;

// Wrap Mui's component with a strict argtype for filtering
// eslint-disable-next-line react/no-children-prop
export const Button = (args: ButtonProps) => <MuiButton children="Button" {...args} />;

const meta = {
  title: 'MUI Components/Button',
  component: Button,
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <Button {...args}>Default</Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button disabled>Disabled</Button>
      <Button {...args} href="https://research.osu.edu">
        Link
      </Button>
    </Stack>
  ),
  args: {},
} satisfies Story;

export const Contained = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'contained',
  },
} satisfies Story;

export const Outlined = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'outlined',
  },
} satisfies Story;

export const Text = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'text',
  },
} satisfies Story;

export const WithStartIcon = {
  ...Default,
  args: {
    ...Default.args,
    startIcon: <Icon name="envelope" />,
  },
};

export const WithEndIcon = {
  ...Default,
  args: {
    ...Default.args,
    endIcon: <Icon name="graphBar" />,
  },
};

export const Accents = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <Button {...args} color="blue">
        Blue
      </Button>
      <Button {...args} color="orange">
        Orange
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
      <Button {...args} color="brown">
        Brown
      </Button>
      <Button {...args} color="pink">
        Pink
      </Button>
      <Button {...args} color="violet">
        Violet
      </Button>
      <Button {...args} color="aqua">
        Aqua
      </Button>
      <Button {...args} color="teal">
        Teal
      </Button>
      <Button {...args} color="gold">
        Gold
      </Button>
    </Stack>
  ),
} satisfies Story;

export const OutlinedAccents = {
  ...Accents,
  args: {
    variant: 'outlined',
  },
};

export const TextAccents = {
  ...Accents,
  args: {
    variant: 'text',
  },
};
