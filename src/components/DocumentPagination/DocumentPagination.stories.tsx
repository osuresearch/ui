import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DocumentPagination as Component, DocumentPaginationProps, Group } from '@osuresearch/ui';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<DocumentPaginationProps>('Components', Component).withBadge('beta');

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
