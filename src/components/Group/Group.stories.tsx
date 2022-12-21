import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from '../Button';
import { Group, GroupProps } from './index';

export default {
  title: 'layout/Group',
  component: Group,
  argTypes: {}
} as Meta<typeof Group>;

const Template: Story<GroupProps> = (args: GroupProps) => (
  <Group {...args}>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </Group>
);

export const Example = Template.bind({});
Example.args = {};
