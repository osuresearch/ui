import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Text } from '../Text';
import { NecessityIndicator as Component, NecessityIndicatorProps } from './NecessityIndicator';

export default {
  title: 'Utilities / NecessityIndicator',
  ...RUIComponentMeta(Component)
};

export const NecessityIndicator = RUIComponentStory<NecessityIndicatorProps>((args) => (
  <Text>
    This data is necessary
    <Component {...args} />
  </Text>
));
