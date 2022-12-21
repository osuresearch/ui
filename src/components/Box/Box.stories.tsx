import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box, BoxProps } from './index';

export default {
  title: 'utilities/Box',
  component: Box,
  argTypes: {}
} as Meta<typeof Box>;

const Template: Story<BoxProps> = (args) => (
  <Box {...args}>
    You can consider the Box component to be the abstraction over the CSS box model that we expose
    through more complex components.
  </Box>
);

export const Default = Template.bind({});
Default.args = {};
