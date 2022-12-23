import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Title, Text, Button, Space, Paper, PaperProps } from '@osuresearch/ui';
import { RUIComponentMeta } from '~/.storybook/utils';

export default RUIComponentMeta<PaperProps>('Layout', Paper)
  .withStyleSystemProps()
  .withBadge('stable');

const Template: Story<PaperProps> = (args: PaperProps) => (
  <Paper {...args}>
    Paper is the most basic UI component
    <br />
    Use it to create cards, dropdowns, modals and other components that require background with
    shadow
  </Paper>
);

export const Overview = Template.bind({});

export const PanelWithContent: Story<PaperProps> = (args) => (
  <Paper variant="panel" p="xl" {...args}>
    <Title level={3}>Take your next step toward becoming a Buckeye</Title>
    <Space h="lg" />
    <Text>
      Columbus our strengths are an authentic and distinctive combination of qualities reflective of
      who we are a collaborative program Woody Hayes consectetur congue dolor diverse community of
      students and scholars commencement chimes of Orton Hall buckeye ipsum blending creativity and
      analysis to truly be at the forefront of thought.
    </Text>
    <Space h="lg" />
    <Text>
      As Buckeyes, we build healthier, more vibrant communities with the belief that all things are
      possible a powerful network of more than 500,000 alumni it&apos;s seeing this potential in
      each of us — in all of us — that brings people closer together innovate passionate students
      &amp; innovative researchers faculty and students committed to novel, exciting research that
      can change the planet and confront modern challenges.
    </Text>
    <Space h="lg" />
    <Button>Apply Now</Button>
  </Paper>
);
