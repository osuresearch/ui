import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Details, DetailsProps } from './index';

export default {
  title: 'atoms/Details',
  component: Details,
  argTypes: {}
} as Meta<typeof Details>;

const Template: Story<DetailsProps> = (args: DetailsProps) => (
  <Details {...args}>Content to be revealed.</Details>
);

export const Default = Template.bind({});
Default.args = {
  summary: 'This is a Details disclosure element'
};
