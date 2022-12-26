import { TabPanel as Component, Item, TabPanelProps, Text } from '@osuresearch/ui';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<TabPanelProps>('Components', Component)
  .withStyleSystemProps()
  .withBadge('experimental');

export const TabPanel = RUIComponentStory<TabPanelProps>((args) => (
  <Component aria-label="Profiles of blah blah blah">
    <Item key="Glenn" title="John Glenn">
      Tbdbitl land grant institution bringing together ideas and disciplines to create bold, new
      connections our strengths are an authentic and distinctive combination of qualities reflective
      of who we are welcome week Morrill Wooster land grant institution non magna quis tortor
      volutpat take your next step toward becoming a Buckeye.
    </Item>
    <Item key="Nicklaus" title="Jack Nicklaus">
      Ornare euismod velit THE Stone Lab welcome week Moritz our strengths are an authentic and
      distinctive combination of qualities reflective of who we are biodiversity Byrd Polar and
      Climate Research Center Script Ohio gray Knowlton Morrill excellence Jack Nicklaus ipsum
      faculty and students committed to novel, exciting research that can change the planet and
      confront modern challenges.
    </Item>
    <Item key="Griffin" title="Archie Griffin">
      The Ohio State University bringing together ideas and disciplines to create bold, new
      connections Columbus Mirror Lake Archie Griffin biodiversity excellence Byrd Polar and Climate
      Research Center THE Byrd Polar and Climate Research Center founded in 1870 passionate students
      innovative researchers.
    </Item>
  </Component>
));
