import React from 'react';
import { Cell, Column, Row, useAsyncList } from 'react-stately';

export type TabularDataColumn = {
  key: React.Key;
  name: string;
};

export type TabularDataRow<TData> = TData & {
  id: React.Key;
};

export function useTabularData<TRow extends object = Record<string, any>>(
  columns: TabularDataColumn[],
  rows: TabularDataRow<TRow>[]
) {
  const list = useAsyncList<TabularDataRow<TRow>>({
    load() {
      return {
        items: rows
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          if (!sortDescriptor?.column) {
            return 0;
          }

          // We force string coercion here for sorting.

          // TODO: Less dumb algorithm, obviously.
          // Possibly a per-column comparator as an option, either
          // with some default atomic types (number, date, monetary, etc)
          // supported as well as a custom comparator.
          // Maybe just pull in a 3rd party lib?

          const first = '' + a[sortDescriptor.column as keyof TabularDataRow<TRow>];
          const second = '' + b[sortDescriptor.column as keyof TabularDataRow<TRow>];

          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        })
      };
    }
  });

  return {
    tableProps: {
      sortDescriptor: list.sortDescriptor,
      onSortChange: list.sort
    },
    tableHeaderProps: {
      columns,
      children: (column: TabularDataColumn) => (
        <Column key={column.key} allowsSorting>
          {column.name}
        </Column>
      )
    },
    tableBodyProps: {
      items: list.items,
      children: (item: TabularDataRow<TRow>) => (
        <Row key={item.id}>
          {(columnKey) => <Cell>{'' + item[columnKey as keyof TabularDataRow<TRow>]}</Cell>}
        </Row>
      )
    }
  };
}
