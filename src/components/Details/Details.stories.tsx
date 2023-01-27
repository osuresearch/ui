import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Stack } from '../Stack';
import { Text } from '../Text';
import { Details, DetailsProps } from './Details';

export default RUIComponentMeta<DetailsProps>('BUX Stuff', Details).withStyleSystemProps();

export const Overview = RUIComponentStory<DetailsProps>(
  (args) => (
    <Details {...args}>
      <Text>Content to be revealed.</Text>
    </Details>
  ),
  {
    summary: 'This is a Details disclosure element'
  }
);

export const Accordion = RUIComponentStory<DetailsProps>((args) => (
  <Stack gap={0} align="stretch">
    <Details summary="Ohio Union">
      <Text>
        Cutting edge of research and innovation innovations in biomedicine Skull Session Knowlton
        people are at the heart of our strengths Block O that power is human potential — an
        astonishing power so elemental, the world thrives on it. So vital, the world depends on it
        Wexner Medical Center passionate students innovative researchers.
      </Text>
    </Details>
    <Details summary="Mirror Lake" mt="-xxs">
      <Text>
        Future Buckeye diverse community of students and scholars RPAC Woody Hayes as Buckeyes, we
        build healthier, more vibrant communities with the belief that all things are possible big,
        lively and full of opportunity take your next step toward becoming a Buckeye scarlet
        Knowlton founded in 1870 Moritz our students grow into educated citizens, compassionate
        community members, critical thinkers and creative problem solvers.
      </Text>
    </Details>
    <Details summary="The Oval" mt="-xxs">
      <Text>
        Archie Griffin research that team up north you can never pay back, so you should always try
        to pay forward teaching and learning innovate Buckeye leaf home to world-class faculty
        buckeye ipsum a collaborative program Script Ohio our students grow into educated citizens,
        compassionate community members, critical thinkers and creative problem solvers.
      </Text>
    </Details>
  </Stack>
));
