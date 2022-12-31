import React, { forwardRef } from 'react';

import { useStyleSystemV2 } from '~/hooks/useStyleSystem';
import { StyleSystemProps } from '~/types';
import { polymorphicForwardRef } from '~/utils';
import { cx } from '~/utils';

export type BoxProps = StyleSystemProps & {
  children?: React.ReactNode;
};

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
