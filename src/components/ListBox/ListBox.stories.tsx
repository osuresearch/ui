import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Text } from '../Text';
import { ListBox as Component, ListBoxProps } from './ListBox';

export default RUIComponentMeta<ListBoxProps>('Internal', Component);

export const ListBox = RUIComponentStory<ListBoxProps>((args) => <Text>No example available</Text>);
