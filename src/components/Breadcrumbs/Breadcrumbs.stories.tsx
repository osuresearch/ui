import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Anchor } from '../Anchor';
import { Text } from '../Text';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

export default {
  title: 'components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {}
} as Meta<typeof Breadcrumbs>;

const Template: Story<BreadcrumbsProps> = (args: BreadcrumbsProps) => (
  <Breadcrumbs {...args}>Breadcrumbs - created through newComponent</Breadcrumbs>
);

export const Default = () => (
  <Breadcrumbs>
    <Anchor href="#">Home</Anchor>
    <Anchor href="#">Level 1</Anchor>
    <Anchor href="#">Level 2</Anchor>
    <Text>Level 3</Text>
  </Breadcrumbs>
);
