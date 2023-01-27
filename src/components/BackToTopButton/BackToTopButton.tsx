import React from 'react';

import { polymorphicForwardRef } from '../../utils';
import { Icon } from '../Icon';
import { PrimaryButton } from '../PrimaryButton';

export type BackToTopButtonProps = Record<string, never>;

/**
 * The Back to Top button helps users quickly navigate back to the top of long pages of content.
 *
 * ## When to Use
 * It is recommended to only use the Back to Top button for pages that are
 * longer than four pages in length when scrolled. This component
 * can be used globally or on a per-page basis.
 *
 * ## TODO
 * - fixed positioning
 * - integration with RUI Provider (or some page container)
 * - scrollpages calculation (default to 4 pages)
 * - hide text on sm breakpoint
 *
 * <!-- @ruiPolymorphic -->
 */
export const BackToTopButton = polymorphicForwardRef<'button', BackToTopButtonProps>(
  ({ as, ...props }, ref) => (
    <PrimaryButton as={as || 'button'} variant="outline" ref={ref} {...props}>
      <Icon name="jump" rotate={180} size={22} />
      Back to top
    </PrimaryButton>
  )
);
