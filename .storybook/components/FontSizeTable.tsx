import React from 'react';
import { fontSize } from '~/types';
import { Text } from '~/components/Text';
import { Code } from '~/components/Code';

export function FontSizeTable() {
  return (
    <table className="sbdocs sbdocs-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        {fontSize.map(size =>
        <tr key={size}>
          <td><Code>--rui-text-{size}</Code></td>
          <td>
            {window
              .getComputedStyle(document.documentElement)
              .getPropertyValue('--rui-text-' + size)}
          </td>
          <td>
            <Text fs={size}>Aa</Text>
          </td>
        </tr>)}
      </tbody>
    </table>
  )
}
