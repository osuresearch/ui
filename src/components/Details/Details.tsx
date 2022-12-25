import React, { forwardRef } from 'react';
import { DefaultProps } from '@osuresearch/ui/types';
import { Box, Group, Icon, Text } from '@osuresearch/ui';
import { cx } from '@osuresearch/ui/theme';

export type DetailsProps = DefaultProps & {
  summary: React.ReactNode;
  children: React.ReactNode;
};

/**
 * A native HTML disclosure widget in which information is visible only
 * when the widget is toggled into an open state.
 *
 * ### Accessibility
 *
 * - Root is the semantic `<details>` element with the summary wrapped with `<summary>`
 */
export const Details = forwardRef<HTMLHeadingElement, DetailsProps & { component: any }>(
  ({ summary, children, ...props }, ref) => (
    <Box
      component="details"
      className={cx(
        'rui-group',
        // 'open:ring',
        'rui-border-b-2',
        'rui-border-light-shade'
      )}
    >
      <Group
        component="summary"
        fw="bold"
        p="md"
        gap="xs"
        className={cx(
          'rui-border-t-2',
          'rui-border-light-shade',
          'hover:rui-bg-light focus:rui-bg-light group-open:rui-bg-light'
        )}
      >
        <Icon
          name="chevron"
          c={{
            light: 'primary',
            dark: 'white'
          }}
          className="group-open:rui-rotate-90 rui-transition-transform"
          size={24}
        />
        <Text>{summary}</Text>
      </Group>
      <Box p="sm" pl="xxl">
        {children}
      </Box>
    </Box>
  )
);
