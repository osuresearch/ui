import { DocumentPagination as Component, DocumentPaginationProps, Group } from '@osuresearch/ui';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<DocumentPaginationProps>('Components', Component)
  .withBadge('atom')
  .withBadge('beta');

const Template: Story<DocumentPaginationProps> = (args) => (
  <Group gap="lg">
    <Component {...args} direction="previous">
      Title of previous page
    </Component>
    <Component {...args} direction="next">
      Title of next page
    </Component>
  </Group>
);

export const DocumentPagination = Template.bind({});
