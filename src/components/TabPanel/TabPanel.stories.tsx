import React, { useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Item } from '../Item';
import { Text } from '../Text';
import { TabPanel, TabPanelProps } from './TabPanel';

export default RUIComponentMeta<TabPanelProps>('Bux Stuff', TabPanel).withStyleSystemProps();

export const Overview = RUIComponentStory<TabPanelProps>((args) => (
  <TabPanel aria-label="Famous OSU people" {...args}>
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
  </TabPanel>
));

export const Disabled = RUIComponentStory<TabPanelProps>(
  (args) => (
    <TabPanel aria-label="Profiles of blah blah blah" {...args}>
      <Item key="Glenn" title="John Glenn">
        Tbdbitl land grant institution bringing
      </Item>
      <Item key="Nicklaus" title="Jack Nicklaus">
        Ornare euismod velit THE Stone Lab welcome week
      </Item>
      <Item key="Griffin" title="Archie Griffin">
        The Ohio State University bringing together ideas and disciplines
      </Item>
    </TabPanel>
  ),
  {
    isDisabled: true
  }
);

export const Controlled = RUIComponentStory<TabPanelProps>((args) => {
  const [timePeriod, setTimePeriod] = useState<React.Key>('triassic');

  return (
    <>
      <Text>Selected time period: {timePeriod}</Text>
      <TabPanel
        aria-label="Mesozoic time periods"
        selectedKey={timePeriod}
        onSelectionChange={setTimePeriod}
        {...args}
      >
        <Item key="triassic" title="Triassic">
          The Triassic ranges roughly from 252 million to 201 million years ago, preceding the
          Jurassic Period.
        </Item>
        <Item key="jurassic" title="Jurassic">
          The Jurassic ranges from 200 million years to 145 million years ago.
        </Item>
        <Item key="cretaceous" title="Cretaceous">
          The Cretaceous is the longest period of the Mesozoic, spanning from 145 million to 66
          years ago.
        </Item>
      </TabPanel>
    </>
  );
}).withDescription(`
  Selection can be controlled using the \`selectedKey\` paired with
  the \`onSelectionChange\` event.

  The \`key\` prop from the selected tab will be passed into the
  callback when the tab is selected.
`);
