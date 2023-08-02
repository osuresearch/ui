import React from 'react';

import { Link, LinkProps } from '@mui/material';

import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

export type ExternalLinkProps = LinkProps;

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <Link target="_blank" referrerPolicy="no-referrer" {...props}>
      {children}
      <Icon ml={0.5} color="text.secondary" name="externalLink" size={12} />
      <VisuallyHidden>Link leads to an exernal site</VisuallyHidden>
    </Link>
  );
}
