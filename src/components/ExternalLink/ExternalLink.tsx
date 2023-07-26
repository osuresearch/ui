import React from 'react';
import { Link, LinkProps } from '@mui/material';
import { Icon } from '../Icon';

export type ExternalLinkProps = LinkProps

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <Link
      aria-label="Link leads to an external site"
      target="_blank"
      referrerPolicy="no-referrer"
      {...props}
    >
      {children}
      <Icon ml={0.5} color="text.secondary" name="externalLink" size={12} />
    </Link>
  );
}
