import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Avatar, AvatarGroup, Stack } from '@mui/material';

import { Icon } from '../../src/components';

const meta = {
  title: 'MUI Components/Avatar',
  component: Avatar,
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const ImageAvatars = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <Avatar {...args} alt="Chase McManning" src="https://opic.osu.edu/mcmanning.1" />
      <Avatar {...args} alt="Neil Coplin" src="https://opic.osu.edu/coplin.7" />
      <Avatar
        {...args}
        alt="Cindy Baker"
        src="https://material-ui.com/static/images/avatar/3.jpg"
      />
    </Stack>
  ),
  args: {},
} satisfies Story;

export const LetterAvatars = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <Avatar {...args} alt="Chase McManning">
        CM
      </Avatar>
      <Avatar {...args} alt="Neil Coplin">
        NC
      </Avatar>
      <Avatar {...args} alt="Cindy Baker">
        CB
      </Avatar>
    </Stack>
  ),
  args: {},
} satisfies Story;

export const IconAvatars = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <Avatar {...args} alt="Home" sx={{ bgcolor: '#41b6e6' }}>
        <Icon size={24} name="homeFill" />
      </Avatar>
      <Avatar {...args} alt="Code" sx={{ bgcolor: '#FF6A39' }}>
        <Icon size={24} name="code" />
      </Avatar>
      <Avatar {...args} alt="Heart" sx={{ bgcolor: 'pink' }}>
        <Icon size={24} name="heartFill" />
      </Avatar>
    </Stack>
  ),
  args: {},
} satisfies Story;

export const WithFallback = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <Avatar {...args} alt="Chase McManning" src="/broken-image.jpg">
        CM
      </Avatar>
    </Stack>
  ),
  args: {},
} satisfies Story;

export const Grouped = {
  render: (args) => (
    <Stack alignItems="center">
      <AvatarGroup max={3}>
        <Avatar
          {...args}
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          {...args}
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          {...args}
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          {...args}
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          {...args}
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
    </Stack>
  ),
  args: {},
} satisfies Story;
