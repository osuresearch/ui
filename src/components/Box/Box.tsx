import React from 'react';

import { useStyleSystemV2 } from '~/hooks/useStyleSystem';
import { StyleSystemProps } from '~/types';
import { polymorphicForwardRef } from '~/utils';
import { cx } from '~/utils';

export type BoxProps = StyleSystemProps & {
  children?: React.ReactNode;
};

/**
 * Exposes a standard set of layout props with any element or component.
 * Box itself does not include any styles.
 *
 * ## Polymorphic
 * - You can use the `as` prop to change the root element for this component.
 */
export const Box = polymorphicForwardRef<'div', BoxProps>(
  ({ as, children, className, ...props }, ref) => {
    const [styleSystemClasses, styleSystemProps, otherProps] = useStyleSystemV2(props);

    const Component = as || 'div';

    return (
      <Component
        {...otherProps}
        className={cx(className, styleSystemClasses)}
        style={styleSystemProps}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);
