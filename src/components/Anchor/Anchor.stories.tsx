import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Anchor, AnchorProps } from './index';

export default {
  title: 'atoms/Anchor',
  component: Anchor,
  argTypes: {}
} as Meta<typeof Anchor>;

const Template: Story<AnchorProps> = (args) => <Anchor {...args}>research.osu.edu</Anchor>;

export const Default = Template.bind({});
Default.args = {
  href: 'https://research.osu.edu'
};
