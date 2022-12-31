import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {}
} as Meta<typeof Avatar>;

const Template: Story<AvatarProps> = (args: AvatarProps) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Chase McManning',
  username: 'mcmanning.1',
  alt: 'Avatar for Chase McManning',
  size: 64
};
