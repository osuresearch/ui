import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Item } from '../Item';
import { LinkList, LinkListItem } from './LinkList';

const meta = {
  title: 'Components/LinkList',
  component: LinkList,
  argTypes: {},
} satisfies Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof LinkList>;

export const Example = {
  render: (args) => (
    <LinkList {...args}>
      <LinkListItem textValue="Onboarding for Employees" href="#onboarding">
        This useful new employee onboarding site will help you navigate your new role and understand
        what comes next.
      </LinkListItem>
      <LinkListItem textValue="Virtual Orientation Success" href="#orientation">
        Attend a virtual orientation that will introduce you to life at Ohio State and set you up
        for professional success.
      </LinkListItem>
      <LinkListItem textValue="New Role Acclimation" href="#acclimation">
        As you begin your new role, this guide will help you to quickly become acclimated to work
        life at Ohio State.
      </LinkListItem>
    </LinkList>
  ),
} satisfies Story;
