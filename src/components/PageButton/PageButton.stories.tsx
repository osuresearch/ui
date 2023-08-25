import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Stack } from '@mui/material';

import { PageButton } from './PageButton';

const meta: Meta<typeof PageButton> = {
  title: 'Navigation/PageButton',
  component: PageButton,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PageButton>;

export const Next = {
  args: {
    variant: 'next',
    children: 'Next page',
  },
} satisfies Story;

export const Previous = {
  args: {
    variant: 'previous',
    children: 'Previous page',
  },
} satisfies Story;

/**
 * Supplying an `href` prop will force the button to use an `a` element as the root node.
 */
export const AnchorElements = {
  render: (args) => (
    <Stack direction="row" gap={1}>
      <PageButton href="https://www.google.com/search?q=vertex+shaders" variant="previous">
        Lesson 1: Vertex Shaders
      </PageButton>
      <PageButton href="https://www.google.com/search?q=fragment+shaders" variant="next">
        Lesson 2: Fragment Shaders
      </PageButton>
    </Stack>
  ),
} satisfies Story;
