import { Story } from '@storybook/react';
import React from 'react';

import { Details as Component, DetailsProps, Text } from '@osuresearch/ui';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<DetailsProps>('Components', Component)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

const Template: Story<DetailsProps> = (args: DetailsProps) => (
  <Component {...args}>
    <Text>Content to be revealed.</Text>
  </Component>
);

export const Details = Template.bind({});
Details.args = {
  summary: 'This is a Details disclosure element'
};
