import React, { createContext, forwardRef, useContext, useRef } from 'react';
import {
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  TextFieldAria,
  useCheckboxGroup,
  useCheckboxGroupItem
} from 'react-aria';
import { CheckboxGroupState, useCheckboxGroupState } from 'react-stately';

import { AriaNecessityIndicator, StyleSystemProps } from '~/types';

import { Icon } from '../Icon';
import { NecessityIndicator } from '../NecessityIndicator';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { ToggleField } from '../ToggleField';

export type CheckboxGroupDiffProps = {
  showDiff?: boolean;
  previousValues?: string[];
};

export type CheckboxGroupFieldProps = StyleSystemProps &
  AriaCheckboxGroupProps &
  AriaNecessityIndicator &
  CheckboxGroupDiffProps & {
    /**
     * `<Item>` children only
     */
    children: React.ReactNode;
    // TODO: Use React Stately's collection items instead
  };

const CheckboxGroupContext = createContext<CheckboxGroupState>({} as CheckboxGroupState);

type ItemProps = AriaCheckboxGroupItemProps & {
  label: string;
  description?: string;
};

export function CBItem(props: ItemProps) {
  const { label, description, value } = props;
  const state = useContext(CheckboxGroupContext);
  const ref = useRef<HTMLInputElement>(null);

  const { inputProps } = useCheckboxGroupItem(props, state, ref);

  return (
    <ToggleField
      label={label}
      description={description}
      isDisabled={state.isDisabled || props.isDisabled}
      isSelected={state.isSelected(value)}
      inputProps={inputProps}
      ref={ref}
      // Nothing passed down.
      // TODO: Should we?
      labelProps={{}}
      descriptionProps={{}}
      errorMessageProps={{}}
    />
  );
}

/**
 * CheckboxGroupField documentation
 *
 * ## Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const CheckboxGroupField = forwardRef<HTMLDivElement, CheckboxGroupFieldProps>(
  (props, ref) => {
    const { children, label, description, necessityIndicator, errorMessage } = props;

    const state = useCheckboxGroupState(props);
    const { groupProps, labelProps, descriptionProps, errorMessageProps } = useCheckboxGroup(
      props,
      state
    );

    return (
      <Stack {...groupProps} ref={ref}>
        <Text as="label" {...labelProps}>
          {label}
          {necessityIndicator && <NecessityIndicator />}
        </Text>

        <CheckboxGroupContext.Provider value={state}>
          {children}
          {/* {Children.map(children, (item) => {
          // TODO: Can't find a way for React Stately to
          // resolve this without useListState tooling.
          // Not finding a way to fuse that + Checkbox groups.

          // So, for now, lazy hand crafted version that
          // probably misses edge cases.
          if (typeof item === 'function') {
            // Resolve 'items' prop from the parent.
            throw new Error('not impl');
          }

          return <Item key={item.key} node={item} />
        })} */}
        </CheckboxGroupContext.Provider>

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
      </Stack>
    );
  }
);
