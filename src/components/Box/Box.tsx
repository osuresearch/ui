import React from 'react';

import { useStyleSystem } from '~/hooks/useStyleSystem';
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
 * <!-- @ruiPolymorphic -->
 */
export const Box = polymorphicForwardRef<'div', BoxProps>(
  ({ as, children, className, ...props }, ref) => {
    const [styleSystemClasses, styleSystemProps, otherProps] = useStyleSystem(props);

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
