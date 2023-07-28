import React, { DOMAttributes, ReactNode } from 'react';

import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputBaseComponentProps,
  Stack,
  Typography,
} from '@mui/material';

import { Icon } from '../Icon';
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

  /** Props for the text field's visible label element */
  labelProps?: DOMAttributes<FocusableElement> | React.LabelHTMLAttributes<HTMLLabelElement>;

  /** Props for the text field's description element */
  descriptionProps?: DOMAttributes<FocusableElement>;

  /** Props for the text field's error message element */
  errorMessageProps?: DOMAttributes<FocusableElement>;

  noLabel?: boolean;

  isFieldset?: boolean;

  renderInput: (inputProps: InputBaseComponentProps) => React.ReactNode;

  fullWidth?: boolean;
}

type LayoutProps = {
  layout?: FormFieldLayout;
  children: React.ReactNode;
};

export function FormField<T>(props: FormFieldProps<T>) {
  const { id, name, label, description, error, layout, noLabel } = props;
  const {
    labelAs,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isFieldset,
    necessityIndicator,
    renderInput,
    fullWidth,
  } = props;

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
          'aria-describedby': error ? `${id}-error` : undefined,
          'disabled': props.disabled,
          'readOnly': props.readOnly,
        })}
        {description && <FormHelperText>{description}</FormHelperText>}
        {error && (
          <Typography id={`${id}-error`} fontSize="0.88em" color="error">
            <Icon role="presentation" name="xmarkCircle" sx={{ verticalAlign: 'text-top' }} />{' '}
            {error}
          </Typography>
        )}
      </Stack>
    </FormControl>
  );
}
