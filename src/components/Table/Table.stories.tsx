import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Table, TableProps } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {}
} as Meta<typeof Table>;

const Template: Story<TableProps> = (args: TableProps) => (
  <Table {...args}>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell 1.1</td>
        <td>Cell 1.2</td>
        <td>Cell 1.3</td>
      </tr>
      <tr>
        <td>Cell 2.1</td>
        <td>Cell 2.2</td>
        <td>Cell 2.3</td>
      </tr>
      <tr>
        <td>Cell 3.1</td>
        <td>Cell 3.2</td>
        <td>Cell 3.3</td>
      </tr>
    </tbody>
  </Table>
);

export const Default = Template.bind({});
Default.args = {};
