import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { Item } from '../Item';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  argTypes: {}
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Example = {
  render: (args) => (
    <Tabs {...args}>
      <Item textValue="Ohio Union">
        Cutting edge of research and innovation innovations in biomedicine Skull Session Knowlton
        people are at the heart of our strengths Block O that power is human potential — an
        astonishing power so elemental, the world thrives on it. So vital, the world depends on it
        Wexner Medical Center passionate students innovative researchers.
      </Item>
      <Item textValue="Mirror Lake">
        Future Buckeye diverse community of students and scholars RPAC Woody Hayes as Buckeyes, we
        build healthier, more vibrant communities with the belief that all things are possible big,
        lively and full of opportunity take your next step toward becoming a Buckeye scarlet
        Knowlton founded in 1870 Moritz our students grow into educated citizens, compassionate
        community members, critical thinkers and creative problem solvers.
      </Item>
      <Item textValue="The Oval">
        Archie Griffin research that team up north you can never pay back, so you should always try
        to pay forward teaching and learning innovate Buckeye leaf home to world-class faculty
        buckeye ipsum a collaborative program Script Ohio our students grow into educated citizens,
        compassionate community members, critical thinkers and creative problem solvers.
      </Item>
    </Tabs>
  ),
  args: {}
} satisfies Story;
