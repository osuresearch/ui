import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import {
  Button,
  Fab,
  IconButton,
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
  Stack,
} from '@mui/material';

import { Icon } from '../../src/components';

export type TooltipProps = Pick<MuiTooltipProps, 'title' | 'children' | 'arrow'>;
export const Tooltip = (args: TooltipProps) => (
  <MuiTooltip
    title="Example tooltip"
    // eslint-disable-next-line react/no-children-prop
    children={<Button>Hover or focus me for a tooltip</Button>}
    arrow
    {...args}
  />
);

const meta = {
  title: 'MUI Components/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Examples = {
  render: (args) => (
    <Stack direction="row" gap={1} alignItems="center">
      <Tooltip {...args} title="Delete" arrow>
        <IconButton aria-label="delete">
          <Icon name="xmark" />
        </IconButton>
      </Tooltip>
      <Tooltip {...args} title="Add" aria-label="add" arrow>
        <Fab color="primary">
          <Icon name="plus" size={48} />
        </Fab>
      </Tooltip>
      <Tooltip {...args} title="Add" aria-label="add" arrow>
        <Fab color="secondary">
          <Icon name="plus" size={48} />
        </Fab>
      </Tooltip>
    </Stack>
  ),
  args: {},
} satisfies Story;
