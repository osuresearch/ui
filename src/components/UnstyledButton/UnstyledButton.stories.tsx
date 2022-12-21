import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Group } from '../Group';
import { Avatar } from '../Avatar';
import { Text } from '../Text';
import { UnstyledButton, UnstyledButtonProps } from './index';

export default {
  title: 'atoms/UnstyledButton',
  component: UnstyledButton,
  argTypes: {}
} as Meta<typeof UnstyledButton>;

const Template: Story<UnstyledButtonProps> = (args) => (
  <UnstyledButton {...args}>Button</UnstyledButton>
);

export const Default = Template.bind({});
Default.args = {};

export const ContactCard: Story<UnstyledButtonProps> = () => (
  <UnstyledButton>
    <Group>
      <Avatar size={40} name="Chase McManning" username="mcmanning.1" />
      <div>
        <Text>Chase McManning</Text>
        <Text c="dimmed" fs="sm">
          mcmanning.1@osu.edu
        </Text>
      </div>
    </Group>
  </UnstyledButton>
);

export const PolymorphAsAnchor: Story<UnstyledButtonProps> = () => (
  <UnstyledButton component="a" href="https://example.com">
    Polymorphic button
  </UnstyledButton>
);
