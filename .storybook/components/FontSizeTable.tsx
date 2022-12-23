import React from 'react';
import { fontSize } from '../../src/types';
import { Text } from '@osuresearch/ui';

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
          <td><code>--rui-text-{size}</code></td>
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
