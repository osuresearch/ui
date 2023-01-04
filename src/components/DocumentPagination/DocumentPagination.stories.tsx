import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Group } from '../Group';
import { DocumentPagination as Component, DocumentPaginationProps } from './DocumentPagination';

export default RUIComponentMeta<DocumentPaginationProps>('BUX Stuff', Component);

export const DocumentPagination = RUIComponentStory<DocumentPaginationProps>((args) => (
  <Group gap="lg" align="stretch">
    <Component {...args} direction="previous">
      Title of previous page
    </Component>
    <Component {...args} direction="next">
      Title of next page
    </Component>
  </Group>
));
