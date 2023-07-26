import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Chip, Divider, Stack } from '@mui/material';

import { Icon } from '../../src/components';

const meta = {
  title: 'MUI Components/Divider',
  component: Divider,
  argTypes: {},
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

export const Simple = {
  render: (args) => {
    const content = (
      <div>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
     Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
     Sed malesuada lobortis pretium.`}
      </div>
    );

    return (
      <Stack gap={1}>
        {content}
        <Divider {...args} />
        {content}
      </Stack>
    );
  },
} satisfies Story;

export const WithContent = {
  render: (args) => {
    const content = (
      <div>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
     Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
     Sed malesuada lobortis pretium.`}
      </div>
    );

    return (
      <Stack gap={1}>
        {content}
        <Divider {...args}>CENTER</Divider>
        {content}
        <Divider textAlign="left" {...args}>
          LEFT
        </Divider>
        {content}
        <Divider textAlign="right" {...args}>
          RIGHT
        </Divider>
        {content}
        <Divider {...args}>
          <Chip label="CHIP" />
        </Divider>
        {content}
        <Divider {...args}>
          <Icon name="heart" size={18} />
        </Divider>
        {content}
      </Stack>
    );
  },
} satisfies Story;
