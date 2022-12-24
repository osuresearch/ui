import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import { cx } from '../../theme/utils';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { DefaultProps, ThemeSize } from '../../types';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { Icon } from '../Icon';
import { Text } from '../Text/Text';

export interface InputVisualProps {
  /**
   * Unique identifier for the input.
   *
   * **a11y**:
   * - Will be automatically assigned to `htmlFor` of associated labels
   */
  id: string;

  /**
   * Defines input appearance
   *
   * Default behaviour switches from 'default' to 'filled' for dark mode
   */
  variant?: 'unstyled' | 'default' | 'filled';

  /**
   * Input size
   */
  size?: ThemeSize;

  /**
   * Will only display the required asterisk without setting
   * the required attribute of the input.
   */
  withAsterisk?: boolean;

  /**
   * Content to display on the left hand side of the input
   */
  leftContent?: ReactNode;

  /**
   * Width of the left content.
   * This allows us to define input content padding
   */
  leftWidth?: number;

  /**
   * Content to display on the right hand side of the input
   */
  rightContent?: ReactNode;

  /**
   * Width of the right content.
   * This allows us to define input content padding
   */
  rightWidth?: number;

  /**
   * Render a pointer instead of a caret when
   * the mouse cursor is over the input
   */
  pointer?: boolean;
}

export interface InputFunctionalProps {
  /**
   * Label content
   */
  label: ReactNode;

  /**
   * Element to display with the associated `htmlFor`
   * wrapping the label content.
   */
  labelElement?: 'div' | 'label';

  /**
   * Additional descriptive content
   */
  help?: ReactNode;

  /**
   * Error content associated with the input.
   *
   * **a11y**:
   * * Will set `aria-invalid=true` when present
   */
  error?: ReactNode;

  /**
   * Input placeholder content
   */
  placeholder?: string;

  /** Will display the required asterisk and add a `required` attribute to the input element */
  required?: boolean;

  disabled?: boolean;

  /**
   * Number of input lines.
   *
   * More than 1 will result in a textarea being rendered instead.
   */
  lines?: number;
}

export type InputProps = DefaultProps &
  InputVisualProps &
  InputFunctionalProps & {
    // `component` prop is implied via polymorphism
  };

export const _Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      style,
      id,
      required = false,
      disabled,
      lines = 1,

      label,
      labelElement = 'label',

      help,
      error,

      leftContent,
      leftWidth,

      rightContent,
      rightWidth,

      variant = 'default',
      size,
      withAsterisk,
      pointer,

      // The rest are to be spread into the input element
      ...inputProps
    },
    ref
  ) => {
    const renderAsterisk = withAsterisk || required;
    const describedBy = id + '__help';

    const inputStyle: CSSProperties = {};
    if (leftWidth) {
      inputStyle.paddingLeft = leftWidth;
    }

    if (rightWidth) {
      inputStyle.paddingRight = rightWidth;
    }

    return (
      <Box component={Stack} style={style} className={cx(className)}>
        <Box component={labelElement} htmlFor={id} className={cx('flex', 'flex-row')}>
          {label}
          {renderAsterisk && <Icon className="text-error pl-4" name="asterisk" size={8} />}
        </Box>

        {help && (
          <Text id={describedBy} c="dimmed" fs="sm">
            {help}
          </Text>
        )}

        <Box
          className={cx({
            'cursor-pointer': pointer,
            'border-2': variant === 'default',
            'border-error': error,
            'relative': true
          })}
        >
          {leftContent && <div className="absolute left-0 top-0">{leftContent}</div>}

          <Box
            component="input"
            {...inputProps}
            ref={ref}
            id={id}
            required={required}
            disabled={disabled}
            aria-invalid={error !== undefined}
            aria-describedby={describedBy}
            className={cx({
              'px-8': true,
              'py-4': true,
              'w-full': true,
              'cursor-not-allowed': disabled
            })}
            style={inputStyle}
          />

          {rightContent && <div className="absolute right-0 top-0">{rightContent}</div>}
        </Box>

        {error && (
          <Text fs="sm" className={cx('flex', 'flex-row')}>
            <Icon className="text-sm pr-xs text-error mt-1" name="xmarkCircle" />
            {error}
          </Text>
        )}
      </Box>
    );
  }
);

/**
 * Polymorphic concept of an input.
 *
 * Do not use this directly, this is used as a bucket of behaviour
 * for other custom input components.
 */
export const Input = createPolymorphicComponent<'input', InputProps>(_Input);
