import { Story } from '@storybook/react';
import React from 'react';
import { Cell, Column, Row, TableBody, TableHeader } from 'react-stately';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Table, TableProps } from './Table';

export default RUIComponentMeta<TableProps>('Components', Table).withStyleSystemProps();

const Template: Story<TableProps> = (args: TableProps) => (
  <Table {...args} caption="Table caption">
    <TableHeader>
      <Column>Column 1</Column>
      <Column>Column 2</Column>
      <Column>Column 3</Column>
    </TableHeader>
    <TableBody>
      <Row>
        <Cell>Cell data A1</Cell>
        <Cell>Cell data A2</Cell>
        <Cell>Cell data A3</Cell>
      </Row>
      <Row>
        <Cell>Cell data B1</Cell>
        <Cell>Cell data B2</Cell>
        <Cell>Cell data B3</Cell>
      </Row>
      <Row>
        <Cell>Cell data C1</Cell>
        <Cell>Cell data C2</Cell>
        <Cell>Cell data C3</Cell>
      </Row>
    </TableBody>
  </Table>
);

export const Overview = RUIComponentStory(Template);

export const Striped = RUIComponentStory(Overview, {
  striped: true
});

export const Compact = RUIComponentStory(Overview, {
  variant: 'compact'
});

export const SingleSelection = RUIComponentStory<TableProps>(
  (args) => (
    <Table {...args} caption="Table caption">
      <TableHeader>
        <Column>Select all</Column>

        <Column>Column 1</Column>
        <Column>Column 2</Column>
        <Column>Column 3</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>select row A</Cell>

          <Cell>Cell data A1</Cell>
          <Cell>Cell data A2</Cell>
          <Cell>Cell data A3</Cell>
        </Row>
        <Row>
          <Cell>select row B</Cell>

          <Cell>Cell data B1</Cell>
          <Cell>Cell data B2</Cell>
          <Cell>Cell data B3</Cell>
        </Row>
        <Row>
          <Cell>select row C</Cell>

          <Cell>Cell data C1</Cell>
          <Cell>Cell data C2</Cell>
          <Cell>Cell data C3</Cell>
        </Row>
      </TableBody>
    </Table>
  ),
  {
    selectionMode: 'single',
    selectionBehavior: 'replace'
  }
).withDescription(`
  Add the \`selectionMode: single\` prop to allow the user to select a table row.

  The first \`Cell\` of each row will contain a label for the
  selection checkbox generated before each row.
`);

export const MultipleSelection = RUIComponentStory(SingleSelection, {
  selectionMode: 'multiple'
}).withDescription(`
  Add the \`selectionMode: multiple\` to allow the user to select multiple table rows.

  The first \`Cell\` in the table header will contain a label
  for the selection checkbox that allows the user to select all or none of the rows.

  The first \`Cell\` of each row will contain a label for the
  selection checkbox generated before each row.
`);
