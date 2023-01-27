import { SortDescriptor } from '@react-types/shared';
import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Cell, Column, Row, TableBody, TableHeader, useAsyncList } from 'react-stately';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { useTabularData } from '../../hooks/useTabularData';
import { Item } from '../Item/Item.stories';
import { Table, TableProps } from './Table';

export default RUIComponentMeta<TableProps>('Components', Table).withStyleSystemProps();

const Template: Story<TableProps> = (args) => (
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

export const DynamicContent = RUIComponentStory<TableProps>((args) => {
  type Entry = {
    id: number;
    name: string;
    date: string;
    type: string;
  };

  const columns = [
    { name: 'Name', key: 'name' },
    { name: 'Type', key: 'type' },
    { name: 'Date Modified', key: 'date' }
  ];

  const rows: Entry[] = [
    { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
    { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
    { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
    { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' }
  ];

  return (
    <Table {...args} mih="20rem">
      <TableHeader columns={columns}>{(column) => <Column>{column.name}</Column>}</TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <Row key={item.id}>{(columnKey) => <Cell>{item[columnKey as keyof Entry]}</Cell>}</Row>
        )}
      </TableBody>
    </Table>
  );
}).withDescription(`
  Columns and rows can be provided to the table via render functions when working
  with dynamic content that comes from an external API.
`);

export const Sortable = RUIComponentStory<TableProps>((args) => {
  type Entry = {
    id: number;
    name: string;
    date: string;
    type: string;
  };

  const columns = [
    { name: 'Name', key: 'name' },
    { name: 'Type', key: 'type' },
    { name: 'Date Modified', key: 'date' }
  ];

  const rows: Entry[] = [
    { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
    { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
    { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
    { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' }
  ];

  const { tableProps, tableBodyProps, tableHeaderProps } = useTabularData(columns, rows);

  return (
    <Table mih="20rem" {...tableProps} {...args}>
      <TableHeader {...tableHeaderProps} />
      <TableBody {...tableBodyProps} />
    </Table>
  );
}).withDescription(`
  The \`useTabularData\` hook can be used to populate a table from a *simple*
  dataset of rows and columns.

  Each column is interpreted as a string and sortable based on simple string comparisons.
`);

export const CustomSorting = RUIComponentStory<TableProps>((args) => {
  const list = useAsyncList<Record<string, any>>({
    async load({ signal }) {
      const res = await fetch('https://swapi.py4e.com/api/people/?search', {
        signal
      });

      const json = await res.json();
      return {
        items: json.results
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          if (!sortDescriptor.column) {
            return 0;
          }

          const first = a[sortDescriptor.column];
          const second = b[sortDescriptor.column];

          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        })
      };
    }
  });

  return (
    <Table {...args} sortDescriptor={list.sortDescriptor} onSortChange={list.sort} mih="20rem">
      <TableHeader>
        <Column key="name" allowsSorting>
          Name
        </Column>
        <Column key="height" allowsSorting>
          Height
        </Column>
        <Column key="mass" allowsSorting>
          Mass
        </Column>
        <Column key="birth_year" allowsSorting>
          Birth Year
        </Column>
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => <Row key={item.name}>{(columnKey) => <Cell>{item[columnKey]}</Cell>}</Row>}
      </TableBody>
    </Table>
  );
}).withDescription(`
  Controlled sorting behaviour can be performed by combining the \`sortDescriptor\` prop
  to set the active sort state and the \`onSortChange\` callback to execute a custom
  sorting algorithm on the dataset.

  This example demonstrates controlled sorting as well as pulling data from
  a remote API via react-stately's \`useAsyncList\` hook. For server-side
  sorting with \`useAsyncList\`, check out [the hook documentation](https://react-spectrum.adobe.com/react-stately/useAsyncList.html#server-side-sorting).

  For more information, see [React Aria's useTable guide](https://react-spectrum.adobe.com/react-aria/useTable.html#sorting).
`);

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
