import {
  DOMAttributes,
  FocusableElement,
  FocusableProps,
  HelpTextProps,
  InputBase,
  LabelableProps,
  Validation,
  ValueBase
} from '@react-types/shared';
import React from 'react';
import { useFocusRing } from 'react-aria';

import { useStyleSystemProps } from '../../hooks/useStyleSystemProps';
import { AriaNecessityIndicator, StyleSystemProps } from '../../types';
import { Icon } from '../Icon';
import { NecessityIndicator } from '../NecessityIndicator';
import { Stack } from '../Stack';
import { Text } from '../Text';

export interface DiffBase<T> {
  previousValue?: T;
}

export type FormFieldLayout = 'default' | 'horizontal';

/**
 * Base properties that are supported
 * by all form field components.
 *
 * This covers labeling, help text, required state,
 * read only state, values, and so forth.
 */
export interface FormFieldBase<T>
  extends StyleSystemProps,
    AriaNecessityIndicator,
    InputBase,
    Validation,
    HelpTextProps,
    FocusableProps,
    ValueBase<T, T | undefined>,
    // DiffBase<T>,
    LabelableProps {
  /**
   * The name of the input, used when submitting an HTML form.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
   */
  name: string;

  layout?: FormFieldLayout;

  /** All form elements support a full read-only state */
  isReadOnly?: boolean;
}

export type FormFieldProps<T> = FormFieldBase<T> & {
  /**
   * Props to spread into the wrapping element (excluding style system props)
   */
  wrapperProps?: DOMAttributes<FocusableElement>;

  /**
   * Primitive to use for the content label.
   *
   * In some scenarios, a `label` element is not appropriate,
   * for example radio and checkbox sets.
   */
  labelAs?: 'label' | 'span';

  /** Props for the text field's visible label element */
  labelProps: DOMAttributes<FocusableElement> | React.LabelHTMLAttributes<HTMLLabelElement>;

  /** Props for the text field's description element */
  descriptionProps: DOMAttributes;

  /** Props for the text field's error message element */
  errorMessageProps: DOMAttributes;

  children: React.ReactElement;
};

type LayoutProps = {
  layout?: FormFieldLayout;
  children: React.ReactNode;
};

function OuterLayout({ layout, children }: LayoutProps) {
  if (layout === 'horizontal') {
    return <div className="rui-flex rui-w-full">{children}</div>;
  }

  // Default fallback
  return <>{children}</>;
}

function LabelLayout({ layout, children }: LayoutProps) {
  if (layout === 'horizontal') {
    return <div className="rui-flex-1">{children}</div>;
  }

  // Default fallback
  return <>{children}</>;
}

function ContentLayout({ layout, children }: LayoutProps) {
  if (layout === 'horizontal') {
    return <Stack className="rui-flex-1">{children}</Stack>;
  }

  // Default fallback
  return <>{children}</>;
}

/**
 * Base for a form field component
 *
 * <img class="rui-diagram" src="./FormField.svg" alt="Component diagram" />
 *
 * ## 🛑 Disclaimer
 *
 * In most cases, you should not use this component in your application.
 * This is a base for other specialized fields to implement.
 *
 * ## Accessibility
 *
 * - ARIA labeling and state are handled by
 *  [React Aria](https://react-spectrum.adobe.com/react-aria/useTextField.html).
 * - If `label` is omitted, an `aria-label` or `aria-labeledby` prop must
 *  be passed instead to identify the element for screen readers.
 * - `data-field` and `data-label-for` are set to the `name` prop to support
 *  targeting and focusing elements from an external component e.g. `FormErrors`.
 *
 * ## Slots
 *
 * ### Children
 * - Slot for the underlying input element
 * - Receives all necessary attributes for data binding and a11y
 * - The generic type of `FormField` determines which ref type is allowed
 * to be passed through the slot. This does not require an `InputHTMLAttributes`
 * concrete, but it is recommended.
 */
export function FormField<T>(props: FormFieldProps<T>) {
  const { className, label, description, errorMessage, layout, children } = props;
  const { labelAs, labelProps, wrapperProps, descriptionProps, errorMessageProps } = props;

  const [styleSystemProps] = useStyleSystemProps(props);
  const { focusProps } = useFocusRing();

  const inputSlot = React.Children.only(children);

  return (
    <Stack className={className} {...wrapperProps} {...styleSystemProps} data-field={props.name}>
      <OuterLayout layout={layout}>
        <LabelLayout layout={layout}>
          <Text as={labelAs ?? 'label'} {...labelProps} data-label-for={props.name}>
            {label}
            {props.necessityIndicator && <NecessityIndicator />}
          </Text>
        </LabelLayout>
        <ContentLayout layout={layout}>
          {React.cloneElement(inputSlot, focusProps)}

          {description && (
            <Text c="dark" fs="sm" {...descriptionProps}>
              {description}
            </Text>
          )}

          {errorMessage && (
            <Text c="error" fs="sm" {...errorMessageProps}>
              <Icon name="xmarkCircle" /> {errorMessage}
            </Text>
          )}
        </ContentLayout>
      </OuterLayout>
    </Stack>
  );
}

//  export const FormField = forwardRef(_FormField) as <T>(
//   props: FormFieldProps<T> & { ref?: ForwardedRef<T> }
// ) => ReturnType<typeof _FormField>;
