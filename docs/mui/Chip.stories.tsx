import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import DoneIcon from '@mui/icons-material/Done';
import FaceIcon from '@mui/icons-material/Face';
import { Avatar, Chip as MuiChip, ChipProps as MuiChipProps, Stack } from '@mui/material';

export type ChipProps = Pick<
  MuiChipProps,
  | 'title'
  | 'variant'
  | 'label'
  | 'disabled'
  | 'avatar'
  | 'onClick'
  | 'onDelete'
  | 'component'
  | 'clickable'
  | 'icon'
  | 'color'
  | 'deleteIcon'
  | 'size'
>;
export const Chip = (args: ChipProps) => <MuiChip label="Basic" {...args} />;

const meta = {
  title: 'MUI Components/Chip',
  component: Chip,
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default = {
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
        icon={<FaceIcon />}
        label="Clickable deletable"
        onClick={() => alert('clicked')}
        onDelete={() => alert('deleted')}
        {...args}
      />
      <Chip
        label="Custom delete icon"
        onClick={() => alert('clicked')}
        onDelete={() => alert('deleted')}
        deleteIcon={<DoneIcon />}
        {...args}
      />
      <Chip label="Clickable Link" component="a" href="#chip-outlined" clickable {...args} />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={() => alert('deleted')}
        deleteIcon={<DoneIcon />}
        {...args}
      />
      <Chip
        icon={<FaceIcon />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={() => alert('deleted')}
        deleteIcon={<DoneIcon />}
        {...args}
      />
      <Chip label="Deletable primary" onDelete={() => alert('deleted')} color="primary" {...args} />
      <Chip
        icon={<FaceIcon />}
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
  ...Default,
  args: {
    ...Default.args,
    variant: 'outlined',
  },
} satisfies Story;

export const Small = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'outlined',
    size: 'small',
  },
} satisfies Story;
