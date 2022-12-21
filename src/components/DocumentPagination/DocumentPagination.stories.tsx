import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Group } from '../Group';
import { DocumentPagination, DocumentPaginationProps } from './index';

export default {
  title: 'atoms/DocumentPagination',
  component: DocumentPagination,
  argTypes: {}
} as Meta<typeof DocumentPagination>;

const Template: Story<DocumentPaginationProps> = (args: DocumentPaginationProps) => (
  <Group gap="lg">
    <DocumentPagination {...args} direction="previous">
      Title of previous page
    </DocumentPagination>
    <DocumentPagination {...args} direction="next">
      Title of next page
    </DocumentPagination>
  </Group>
);

export const Default = Template.bind({});
Default.args = {};
