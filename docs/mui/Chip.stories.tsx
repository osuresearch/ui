import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Avatar, ChipProps, Chip as MuiChip, Stack } from '@mui/material';

import { Icon } from '../../src/components';

// export type ChipProps = Pick<
//   MuiChipProps,
//   | 'title'
//   | 'variant'
//   | 'label'
//   | 'disabled'
//   | 'avatar'
//   | 'onClick'
//   | 'onDelete'
//   | 'component'
//   | 'clickable'
//   | 'icon'
//   | 'color'
//   | 'deleteIcon'
//   | 'size'
// >;
export const Chip = (args: ChipProps) => <MuiChip label="Basic" {...args} />;

const meta = {
  title: 'MUI Components/Chip',
  component: Chip,
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof Chip>;

export const Filled = {
  render: (args) => (
    <Stack direction="row" gap={1} alignItems="center" flexWrap="wrap">
      <Chip label="Basic" {...args} />
      <Chip label="Disabled" disabled {...args} />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Clickable"
        onClick={() => alert('clicked')}
        {...args}
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="https://material-ui.com/static/images/avatar/1.jpg" />}
        label="Deletable"
        onDelete={() => alert('deleted')}
        {...args}
      />
      <Chip
        icon={<Icon name="userCircle" />}
        label="Clickable deletable"
        onClick={() => alert('clicked')}
        onDelete={() => alert('deleted')}
        {...args}
      />
      <Chip
        label="Custom delete icon"
        onClick={() => alert('clicked')}
        onDelete={() => alert('deleted')}
        deleteIcon={<Icon name="check" />}
        {...args}
      />
      <Chip component="a" label="Clickable Link" href="#chip-outlined" clickable />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={() => alert('deleted')}
        deleteIcon={<Icon name="check" />}
        {...args}
      />
      <Chip
        icon={<Icon name="userCircle" />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={() => alert('deleted')}
        deleteIcon={<Icon name="check" />}
        {...args}
      />
      <Chip label="Deletable primary" onDelete={() => alert('deleted')} color="primary" {...args} />
      <Chip
        icon={<Icon name="userCircle" />}
        label="Deletable secondary"
        onDelete={() => alert('deleted')}
        color="secondary"
        {...args}
      />
    </Stack>
  ),
  args: {},
} satisfies Story;

export const Outlined = {
  ...Filled,
  args: {
    ...Filled.args,
    variant: 'outlined',
  },
} satisfies Story;

export const Small = {
  ...Filled,
  args: {
    ...Filled.args,
    variant: 'outlined',
    size: 'small',
  },
} satisfies Story;

export const Accents = {
  render: (args) => (
    <Stack direction="row" gap={1} alignItems="center" flexWrap="wrap">
      <Chip label="blue" color="blue" {...args} />
      <Chip label="orange" color="orange" {...args} />
      <Chip label="green" color="green" {...args} />
      <Chip label="brown" color="brown" {...args} />
      <Chip label="pink" color="pink" {...args} />
      <Chip label="violet" color="violet" {...args} />
      <Chip label="aqua" color="aqua" {...args} />
      <Chip label="teal" color="teal" {...args} />
      <Chip label="gold" color="gold" {...args} />
    </Stack>
  ),
} satisfies Story;

export const OutlinedAccents = {
  ...Accents,
  args: {
    variant: 'outlined',
    size: 'small',
    onDelete: () => alert('deleted'),
  },
} satisfies Story;
