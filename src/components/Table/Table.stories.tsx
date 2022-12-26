import { Table, TableProps } from '@osuresearch/ui';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<TableProps>('Components', Table)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('beta');

const Template: Story<TableProps> = (args: TableProps) => (
  <Table {...args}>
    <caption>Table Caption</caption>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell data A1</td>
        <td>Cell data B1</td>
        <td>Cell data C1</td>
      </tr>
      <tr>
        <td>Cell data B1</td>
        <td>Cell data B2</td>
        <td>Cell data B3</td>
      </tr>
      <tr>
        <td>Cell data C1</td>
        <td>Cell data C2</td>
        <td>Cell data C3</td>
      </tr>
    </tbody>
  </Table>
);

export const Overview = RUIComponentStory(Template);

export const WithRowHeaders = RUIComponentStory<TableProps>((args) => (
  <Table {...args}>
    <caption>Table with column and row headers</caption>
    <thead>
      <tr>
        <th scope="col">Column 1</th>
        <th scope="col">Column 2</th>
        <th scope="col">Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Row A</th>
        <td>Cell data B1</td>
        <td>Cell data C1</td>
      </tr>
      <tr>
        <th scope="row">Row B</th>
        <td>Cell data B2</td>
        <td>Cell data B3</td>
      </tr>
      <tr>
        <th scope="row">Row C</th>
        <td>Cell data C2</td>
        <td>Cell data C3</td>
      </tr>
    </tbody>
  </Table>
));

export const Striped = RUIComponentStory<TableProps>(Template, {
  striped: true
});

export const Compact = RUIComponentStory<TableProps>(Template, {
  variant: 'compact'
});
