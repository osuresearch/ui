import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Heading } from '../Heading';
import { Paper } from '../Paper';
import { PrimaryButton } from '../PrimaryButton';
import { Space } from '../Space';
import { Text } from '../Text';
import { Underlay as Component, UnderlayProps } from './Underlay';

export default RUIComponentMeta<UnderlayProps>('Internal', Component);

export const Underlay = RUIComponentStory<UnderlayProps>((args) => (
  <>
    <Paper bgc="light" p="xl">
      <Heading level={3}>Take your next step toward becoming a Buckeye</Heading>
      <Space h="lg" />
      <Text>
        Columbus our strengths are an authentic and distinctive combination of qualities reflective
        of who we are a collaborative program Woody Hayes consectetur congue dolor diverse community
        of students and scholars commencement chimes of Orton Hall buckeye ipsum blending creativity
        and analysis to truly be at the forefront of thought.
      </Text>
      <Space h="lg" />
      <Text>
        As Buckeyes, we build healthier, more vibrant communities with the belief that all things
        are possible a powerful network of more than 500,000 alumni it&apos;s seeing this potential
        in each of us — in all of us — that brings people closer together innovate passionate
        students &amp; innovative researchers faculty and students committed to novel, exciting
        research that can change the planet and confront modern challenges.
      </Text>
      <Space h="lg" />
      <PrimaryButton>Apply Now</PrimaryButton>
    </Paper>

    <Component {...args} />
  </>
));
