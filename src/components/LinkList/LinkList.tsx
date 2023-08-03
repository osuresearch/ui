import { CollectionBase } from '@react-types/shared';

import React from 'react';

import { Item as StatelyItem, ItemProps as StatelyItemProps, useListState } from 'react-stately';

import { Box, BoxProps, Divider, Stack } from '@mui/material';

import { Item } from '../Item';
import { TextLink } from '../TextLink';

export type LinkListItemProps = {
  textValue: string;
  children: React.ReactNode;
  href: string;
};

export const LinkListItem: (props: LinkListItemProps) => JSX.Element = StatelyItem;

export type LinkListProps = BoxProps<'ul'> & CollectionBase<LinkListItemProps>;

/**
 * A Link List is often used on a Landing layout page, such as a section index page,
 * to guide the user to resources related to a single topic.
 */
export function LinkList(props: LinkListProps) {
  const state = useListState(props);

  return (
    <Box component="ul" p={0} m={0} {...props}>
      {Array.from(state.collection).map((item) => (
        <Stack component="li" key={item.key}>
          <Divider />
          <Stack p={2} gap={1}>
            <TextLink href={item.props.href} fontWeight="bold">
              {item.textValue}
            </TextLink>
            {item.rendered}
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
