import React from 'react';
import { cx } from '../../styles';
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
        'group',
        // 'open:ring',
        'border-b-2',
        'border-gray-tint-80 dark:border-gray-shade-80'
      )}
    >
      <summary
        className={cx(
          'font-bold',
          'p-lg',
          'list-none',
          'flex',
          'items-center',
          'border-t',

          // Light mode
          'hover:bg-gray-tint-90 focus:bg-gray-tint-90 group-open:bg-gray-tint-90',
          'border-gray-tint-80',

          // Dark mode
          'dark:hover:bg-gray-shade-80 dark:focus:bg-gray-shade-80 dark:group-open:bg-gray-shade-80',
          'dark:border-gray-shade-80'
        )}
      >
        <Icon
          className="group-open:hidden text-scarlet dark:text-white"
          name="chevron"
          size={24}
          mr="sm"
        />
        <Icon
          className="hidden group-open:inline rotate-90 text-scarlet dark:text-white"
          name="chevron"
          size={24}
          mr="sm"
        />
        <Text>{summary}</Text>
      </summary>
      <Text
        className={cx(
          'p-lg',
          'pl-[50px]' // TODO: Gross. But BUX tries to align content with summary text
        )}
      >
        {children}
      </Text>
    </details>
  );
}
