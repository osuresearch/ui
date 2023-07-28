import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Typography } from '@mui/material';

const meta = {
  title: 'Getting Started / Typography',
  component: Typography,
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Examples = {
  render: (args) => (
    <div>
      <Typography variant="h1" component="h2" gutterBottom {...args}>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom {...args}>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom {...args}>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom {...args}>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom {...args}>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom {...args}>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom {...args}>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom {...args}>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom {...args}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom {...args}>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom {...args}>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom {...args}>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom {...args} {...args}>
        overline text
      </Typography>
    </div>
  ),
  args: {},
} satisfies Story;
