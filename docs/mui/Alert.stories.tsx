import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Alert, AlertTitle, Box, Button, Collapse, IconButton, Stack } from '@mui/material';

import { CloseButton, Icon } from '../../src/components';

const meta = {
  title: 'MUI Components/Alert',
  component: Alert,
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof Alert>;

export const Basic = {
  render: (args) => (
    <Stack gap={1}>
      <Alert {...args} severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert {...args} severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert {...args} severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert {...args} severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  ),
} satisfies Story;

export const Outlined = {
  ...Basic,
  args: {
    variant: 'outlined',
  },
} satisfies Story;

export const WithTitle = {
  render: (args) => (
    <Stack gap={1}>
      <Alert {...args} severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert {...args} severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert {...args} severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert {...args} severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  ),
} satisfies Story;

export const Dismissible = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    return (
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert action={<CloseButton onClick={() => setOpen(false)} />} sx={{ mb: 2 }}>
            Close me!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </Box>
    );
  },
} satisfies Story;
