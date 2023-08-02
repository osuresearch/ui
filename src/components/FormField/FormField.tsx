import React, { DOMAttributes, ReactNode } from 'react';

import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputBaseComponentProps,
  Stack,
} from '@mui/material';

import { FormFieldError } from '../FormFieldError';
import { NecessityIndicator } from '../NecessityIndicator';

/** Any focusable element, including both HTML and SVG elements. */
export interface FocusableElement extends Element, HTMLOrSVGElement {}

export type FormFieldLayout = 'default' | 'horizontal';

export interface ValueBase<T, C = T> {
  /** The current value (controlled). */
  value?: T;

  /** The default value (uncontrolled). */
  defaultValue?: T;

  /** Handler that is called when the value changes. */
  onChange?: (value: C) => void;

  onBlur?: () => void;
}

/**
 * Base properties that are supported
 * by all form field components.
 *
 * This covers labeling, help text, required state,
 * read only state, values, and so forth.
 */
export interface FormFieldBase<T> extends ValueBase<T, T | undefined> {
  /**
   * The name of the input, used when submitting an HTML form.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
   */
  name: string;

  layout?: FormFieldLayout;

  /** Whether the input is disabled. */
  disabled?: boolean;

  /** Whether the input can be selected but not changed by the user. */
  readOnly?: boolean;

  /** The content to display as the label. */
  label?: ReactNode;

  /** A description for the field. Provides a hint such as specific requirements for what to choose. */
  description?: ReactNode;

  /** An error message for the field. */
  error?: ReactNode;

  /** Whether the required state should be shown within the label */
  necessityIndicator?: boolean;

  /**
   * Whether user input is required on the input before form submission.
   * Often paired with the `necessityIndicator` prop to add a visual indicator to the input.
   */
  required?: boolean;
}

export interface FormFieldProps<T> extends FormFieldBase<T> {
  id: string;

  /**
   * Primitive to use for the content label.
   *
   * In some scenarios, a `label` element is not appropriate,
   * for example radio and checkbox sets.
   */
  labelAs?: 'label' | 'span';

  // /** Props for the text field's visible label element */
  // labelProps?: DOMAttributes<FocusableElement> | React.LabelHTMLAttributes<HTMLLabelElement>;

  // /** Props for the text field's description element */
  // descriptionProps?: DOMAttributes<FocusableElement>;

  // /** Props for the text field's error message element */
  // errorMessageProps?: DOMAttributes<FocusableElement>;

  noLabel?: boolean;

  isFieldset?: boolean;

  renderInput: (inputProps: InputBaseComponentProps) => React.ReactNode;

  fullWidth?: boolean;
}

type LayoutProps = {
  layout?: FormFieldLayout;
  children: React.ReactNode;
};

/**
 * Base component for rendering an interactive form field.
 *
 * This ensures an accessible mapping between label, input, description, and error messages.
 *
 * This component is typically used by RUI maintainers. You should instead use one of the
 * concrete form components that wrap this component for a specific data type.
 *
 * <!-- @ruiInternal -->
 */
export function FormField<T>(props: FormFieldProps<T>) {
  const { id, name, label, description, error, layout, noLabel } = props;
  const { isFieldset, necessityIndicator, renderInput, fullWidth } = props;

  // TODO: Aria associations again.
  // I need to inject aria-describedby={`${id}-error`}
  // somehow onto the underlying input.
  // Might need to pass children in as a renderprop and give it an inputProps args to spread for aria.
  // E.g. <FormControl renderInput={(inputProps) => <input {...inputProps} />} />

  return (
    <FormControl
      fullWidth={fullWidth}
      component={isFieldset ? 'fieldset' : 'div'}
      variant="standard"
      error={!!error}
      disabled={props.disabled || props.readOnly}
    >
      <Stack data-field={name} gap={1}>
        {!noLabel && (
          <FormLabel component={isFieldset ? 'legend' : 'label'} id={`${id}-label`} htmlFor={id}>
            {label}
            {necessityIndicator && <NecessityIndicator />}
          </FormLabel>
        )}
        {renderInput({
          // Pass down aria to the underlying input element
          'id': id,
          'aria-describedby': (error ? `${id}-error` : '') + (description ? ` ${id}-help` : ''),
          'data-testid': id,
          'disabled': props.disabled,
          'readOnly': props.readOnly,
        })}
        {description && <FormHelperText id={`${id}-help`}>{description}</FormHelperText>}
        {error && <FormFieldError id={`${id}-error`}>{error}</FormFieldError>}
      </Stack>
    </FormControl>
  );
}
