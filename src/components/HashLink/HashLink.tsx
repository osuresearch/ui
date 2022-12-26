import { Link } from '@osuresearch/ui';
import React, { forwardRef } from 'react';

export type HashLinkProps = {
  /**
   * Link anchor ID
   */
  id: string;
  children?: React.ReactNode;
};

/**
 * Append clickable hash links to content
 */
export const HashLink = forwardRef<HTMLDivElement, HashLinkProps>(({ id, children }, ref) => (
  <span ref={ref} className="[&>a]:hover:rui-opacity-100">
    {children}
    <Link id={id} ml="sm" className="rui-transition-opacity rui-opacity-0" href={`#${id}`}>
      #
    </Link>
  </span>
));
