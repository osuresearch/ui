import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { ListBox as Component, ListBoxProps } from './ListBox';

import { Text } from '../Text';

export default RUIComponentMeta<ListBoxProps>('Internal', Component);

export const ListBox = RUIComponentStory<ListBoxProps>((args) => (
  <Text>No example available</Text>
));
