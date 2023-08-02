import React from 'react';

import { Link, LinkProps } from '@mui/material';

import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

export type EmailLinkProps = LinkProps;

export function EmailLink({ children, ...props }: EmailLinkProps) {
  return (
    <Link {...props}>
      {children}
      <Icon ml={0.5} color="text.secondary" name="envelope" size={12} />
      <VisuallyHidden>Link leads to an email</VisuallyHidden>
    </Link>
  );
}
