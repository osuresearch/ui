import { parseDate } from '@internationalized/date';
import React, { FocusEvent } from 'react';
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormProps,
  UseFormReturn,
  useForm
} from 'react-hook-form';

/**
 * Props to spread into RUI Field components to integrate with React Hook Form 7
 */
export type UseRUIFormRegisterReturn<TFieldName extends string = string, TFieldValue = any> = {
  name: TFieldName;

  // TODO: Just Pick<> these from existing types?

  validationState?: 'invalid' | 'valid';
  errorMessage?: React.ReactNode;

  onBlur?: (e: FocusEvent<Element>) => void;

  defaultValue?: TFieldValue; // DateValue
  value?: TFieldValue; // DateValue
  onChange?: (value: TFieldValue) => void;

  isDisabled?: boolean;
  // isReadOnly: boolean // <-- not provided by RHF register()
  isRequired?: boolean;

  minValue?: TFieldValue; // for a DateField it's DateValue
  maxValue?: TFieldValue; // again, DateField is DateValue
};

// Customized version of RHF's UseFormRegister
export type UseRUIFormRegister<TFieldValues extends FieldValues> = <
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  name: TFieldName,
  options?: RegisterOptions<TFieldValues, TFieldName> & {
    formatter?: RUIFieldFormatter;
  }
) => UseRUIFormRegisterReturn<TFieldName>;

// Replacement of RHF's UseFormReturn but replacing their register with our own
export type UseRUIFormReturn<TFieldValues extends FieldValues = FieldValues, TContext = any> = Omit<
  UseFormReturn<TFieldValues, TContext>,
  'register'
> & {
  register: UseRUIFormRegister<TFieldValues>;
};

// TODO: Unused. I'm thinking of offering a plugin system for formatting
// so we can do custom atomics to/from RHF types easily.
export type RUIFieldFormatter = {
  // should be a callable with a get/set method
};

/**
 * Extension of React Hook Form 7 to ease integration with RUI Field components.
 *
 * This customizes `value` and `onChange` handling on a per-component basis to
 * conform to RUI's platform
 *
 * @param props
 * @returns
 */
export function useRUIForm<TFieldValues extends FieldValues = FieldValues, TContext = any>(
  props?: UseFormProps<TFieldValues, TContext>
): UseRUIFormReturn<TFieldValues, TContext> {
  const { register: rhfRegister, ...rest } = useForm({
    ...props,
    mode: 'onBlur'
  });

  // TODO: Memoize? I need to benchmark this
  return {
    register: (name, options) => {
      const registerProps = rhfRegister(name, options);

      // Error info from the global form state
      let error = undefined;
      if (rest.formState.errors) {
        error = rest.formState.errors[registerProps.name];
      }

      // Default value from the global form state
      let defaultValue = undefined;
      if (rest.formState.defaultValues) {
        defaultValue = rest.formState.defaultValues[registerProps.name];
      }

      // TODO: Date AND time parsing option.
      if (options?.valueAsDate && defaultValue && typeof defaultValue === 'string') {
        defaultValue = parseDate(defaultValue);
      }

      // TODO: defaultValue is also an issue for DateValue fields.
      // would need to typehint somehow... or custom converter hint it
      // This is basically what I do in Unity, actually

      return {
        name: registerProps.name,
        isDisabled: registerProps.disabled,
        isRequired: registerProps.required,

        defaultValue,

        // TODO: Controlled value? RHF uses refs to target elements for a reset()
        // or a setValue(), but we don't have an equivalent here since a number of
        // components are too complex. I don't want to force <Controller> usage
        // across the board.

        // Our onChange handler comes from React Aria ValueBase as:
        //  ValueBase<C> { onChange?: (value: C) => void }
        // RHF expects a ChangeHandler in the form:
        //  (event: { target: any; type?: any; }) => Promise<void | boolean>
        onChange: (value) => {
          // Convert DateValue back to ISO 8601 strings
          // TODO: Type check for a DateValue just to be sure.
          // A developer may set valueAsDate without actually using DateValue types.
          if (options?.valueAsDate && typeof value !== 'string' && !!value) {
            value = value.toString();
          }

          registerProps.onChange({
            target: {
              name: registerProps.name,
              value
            },
            type: 'change'
          });
        },

        // Transform errors to a ReactNode for rendering
        errorMessage: error ? <>{error.message}</> : undefined
      };
    },
    ...rest
  };
}
