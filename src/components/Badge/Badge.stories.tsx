import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Badge, BadgeProps } from './index';

export default {
  title: 'atoms/Badge',
  component: Badge,
  argTypes: {}
} as Meta<typeof Badge>;

const Template: Story<BadgeProps> = (args: BadgeProps) => <Badge {...args}>BADGE</Badge>;

export const Default = Template.bind({});
Default.args = {};

const Colors: Story<BadgeProps> = (args: BadgeProps) => (
  <>
    <Badge {...args} c="scarlet">
      scarlet
    </Badge>
    <Badge {...args} c="gray">
      gray
    </Badge>
    <Badge {...args} c="black">
      black
    </Badge>
    <Badge {...args} c="white">
      white
    </Badge>

    <br />
    <Badge {...args} c="blue">
      blue
    </Badge>
    <Badge {...args} c="orange">
      orange
    </Badge>
    <Badge {...args} c="green">
      green
    </Badge>
    <Badge {...args} c="brown">
      brown
    </Badge>
    <Badge {...args} c="pink">
      pink
    </Badge>
    <Badge {...args} c="violet">
      violet
    </Badge>
    <Badge {...args} c="aqua">
      aqua
    </Badge>
    <Badge {...args} c="teal">
      teal
    </Badge>
    <Badge {...args} c="gold">
      gold
    </Badge>

    <br />
    <Badge {...args} c="info">
      info
    </Badge>
    <Badge {...args} c="success">
      success
    </Badge>
    <Badge {...args} c="warning">
      warning
    </Badge>
    <Badge {...args} c="error">
      error
    </Badge>
  </>
);

export const Solid = Colors.bind({});
Solid.args = {
  variant: 'solid'
};

export const Outline = Colors.bind({});
Outline.args = {
  variant: 'outline'
};

export const WithIndicator = Colors.bind({});
WithIndicator.args = {
  variant: 'dot'
};
