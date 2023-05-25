import React, { forwardRef } from 'react';

import { Link } from '../Link';

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
  <span ref={ref} className="[&>a]:hover:opacity-100">
    {children}
    <Link
      id={id}
      ml="sm"
      className="transition-opacity opacity-0 scale-75 inline-block"
      href={`#${id}`}
    >
      #
    </Link>
  </span>
));
