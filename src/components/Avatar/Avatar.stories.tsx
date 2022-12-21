import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Avatar, AvatarProps } from './index';

export default {
  title: 'atoms/Avatar',
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
