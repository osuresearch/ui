import React from 'react';

import { Link, LinkProps, styled } from '@mui/material';

import { Icon } from '../Icon';

export type TextLinkProps = LinkProps;

const Root = styled(Link)<TextLinkProps>(({ theme }) => ({
  'color': 'inherit',
  'textDecoration': 'none',
  'marginRight': 25,
  '&:hover': {
    background: 'inherit',
    color: theme.palette.primary.main,
  },
  '&:hover .TextLink-icon': {
    marginLeft: 16,
  },
}));

/**
 * Text links are used on their own directly following content, within Cards, or in Link Lists.
 * They should not be used within sentences or paragraphs.
 */
export function TextLink({ children, ...props }: TextLinkProps) {
  return (
    <Root {...props}>
      {children}{' '}
      <Icon
        className="TextLink-icon"
        name="chevron"
        sx={{ color: 'primary.main', ml: 1, transition: 'margin-left 0.05s' }}
        size={22}
      />
    </Root>
  );
}
