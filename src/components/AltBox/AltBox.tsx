import React, { forwardRef } from 'react';

import { StyleSystemProps } from '@osuresearch/ui/types';
import {
  PolymorphicComponentProp,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
  polymorphicForwardRef
} from '@osuresearch/ui/utils';

import { SlotProp, useSlots } from '../../hooks/useSlots';
import { BoxProps } from '../Box';

// import { createPolymorphicComponentV2 } from '@osuresearch/ui/utils';

export type AltBoxSlots = {
  /**
   * Something about the header slot
   */
  headerSlot?: SlotProp<{ title: string }>;

  asideSlot?: SlotProp<{ nav: string }>;
};

// export type AltBoxProps = StyleSystemProps &
//   SlotProps & {
//     /**
//      * Contents within the box
//      */
//     // children?: React.ReactNode;
//   };

/**
 * Different polymorphic box
 */
// export const AltBox = createPolymorphicComponentV2<'div', AltBoxProps>((props, ref) => {
//   const { as, slot, w, children, ...componentProps } = props;

//   const Component = as || 'div';

//   const { headerSlot, asideSlot } = useSlots<SlotProps>(props);

//   // Example of a fallback
//   const Aside = asideSlot ?? ((props) => <>fallback aside</>);

//   return (
//     <Component {...componentProps}>
//       {children}

//       {headerSlot && headerSlot({ title: 'foo' })}

//       <Aside nav="test" />
//     </Component>
//   );
// });

export type AltBoxPropsSimple = {
  /** Test label */
  label?: string;
} & AltBoxSlots;

// however, syntactically.. I like this. Because then
// I can restrict acceptable prop types to a subset (e.g. dd, ul, ol)
export type AltBoxProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  AltBoxPropsSimple
>;

type AltBoxComponent = <C extends React.ElementType = 'div'>(
  props: AltBoxProps<C>
) => React.ReactElement | null;

// export const AltBox = forwardRef(
//   <C extends React.ElementType = "div">(
//     { as, children, ...props }: PolymorphicComponentPropWithRef<C, AltBoxPropsSimple>,
//     ref?: PolymorphicRef<C>
//   ) => {
//     const Component = as || "div";

//     return (
//       <Component {...props} ref={ref}>
//         {children}
//       </Component>
//     );
//   }
// ) as <C extends React.ElementType = "div">( // This is the type
//   props: AltBoxProps<C>
// ) => React.ReactElement | null;

export const AltBox1 = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, children, ...props }: PolymorphicComponentPropWithRef<C, AltBoxPropsSimple>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'div';

    return (
      <Component {...props} ref={ref}>
        {children}
      </Component>
    );
  }
) as <C extends React.ElementType = 'div'>( // This is the type
  props: AltBoxProps<C>
) => React.ReactElement | null;

interface ForwardRefRenderFunction<T extends React.ElementType, P = Record<string, never>> {
  (props: PolymorphicComponentPropWithRef<T, P>, ref: PolymorphicRef<T>): React.ReactElement | null;

  displayName?: string | undefined;
  defaultProps?: never | undefined;
  propTypes?: never | undefined;
}

function create<C extends React.ElementType, P>(impl: ForwardRefRenderFunction<C, P>) {
  return forwardRef(impl) as (
    props: PolymorphicComponentPropWithRef<C, P>
  ) => React.ReactElement | null;
}

export const AltBox2 = create<'div', AltBoxPropsSimple>(({ as, children, ...props }, ref) => {
  const Component = as || 'div';

  return (
    <Component {...props} ref={ref}>
      {children}
    </Component>
  );
});

// export const AltBox3 = forwardRef<'div', AltBoxPropsSimple>(
//   (
//     { as, children, ...props },
//     ref
//   ) => {
//     const Component = as || "div";

//     return (
//       <Component {...props} ref={ref}>
//         {children}
//       </Component>
//     );
//   }
// ) as <C extends React.ElementType = "div">( // This is the type
//   props: AltBoxProps<C>
// ) => React.ReactElement | null;

export const AltBox = polymorphicForwardRef<AltBoxPropsSimple>(
  ({ as, children, ...props }, ref) => {
    const { label } = props;
    const { headerSlot } = useSlots<AltBoxPropsSimple>(props);

    const Component = as || 'div';

    return (
      <Component aria-label={props.label} {...props} ref={ref}>
        {children}
        {headerSlot && headerSlot({ title: 'blah ' })}
      </Component>
    );
  }
);
