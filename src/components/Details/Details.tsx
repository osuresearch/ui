import React from 'react';
import { cx } from '../../theme/utils';
import { Box } from '../Box';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Text } from '../Text/Text';

export type DetailsProps = {
  summary: React.ReactNode;
  children: React.ReactNode;
};

/**
 * A native HTML disclosure widget in which information is visible only
 * when the widget is toggled into an open state.
 */
export function Details({ summary, children }: DetailsProps) {
  return (
    <details
      className={cx(
        'rui-group',
        // 'open:ring',
        'rui-border-b-2',
        'rui-border-gray-tint-80 dark:rui-border-gray-shade-80'
      )}
    >
      <Group
        component="summary"
        fw="bold"
        p="md"
        gap="xs"
        className={cx(
          'rui-list-none',
          'rui-items-center',
          'rui-border-t',

          // Light mode
          'hover:rui-bg-gray-tint-90 focus:rui-bg-gray-tint-90 group-open:rui-bg-gray-tint-90',
          'rui-border-gray-tint-80',

          // Dark mode
          'dark:rui-hover:bg-gray-shade-80 dark:focus:rui-bg-gray-shade-80 dark:group-open:rui-bg-gray-shade-80',
          'dark:rui-border-gray-shade-80'
        )}
      >
        <Icon
          className="group-open:rui-hidden rui-text-primary dark:rui-text-white"
          name="chevron"
          size={24} // TODO: Replace these two with some kind of toggle icon
        />
        <Icon
          className="rui-hidden group-open:rui-inline rui-rotate-90 rui-text-primary dark:rui-text-white"
          name="chevron"
          size={24}
        />
        <Text>{summary}</Text>
      </Group>
      <Text p="sm" pl="xxl">
        {children}
      </Text>
    </details>
  );
}
