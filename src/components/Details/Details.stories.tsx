import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Text } from '../Text';
import { Details as Component, DetailsProps } from './Details';

export default RUIComponentMeta<DetailsProps>('BUX Stuff', Component).withStyleSystemProps();

export const Details = RUIComponentStory<DetailsProps>(
  (args) => (
    <Component {...args}>
      <Text>Content to be revealed.</Text>
    </Component>
  ),
  {
    summary: 'This is a Details disclosure element'
  }
);
