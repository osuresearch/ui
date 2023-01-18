import { Node } from '@react-types/shared';
import React, { createContext, forwardRef, useContext, useRef } from 'react';
import {
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  AriaRadioGroupProps,
  useCheckboxGroup,
  useCheckboxGroupItem,
  useRadio,
  useRadioGroup
} from 'react-aria';
import {
  CheckboxGroupState,
  ListProps,
  ListState,
  RadioGroupState,
  useCheckboxGroupState,
  useListState,
  useRadioGroupState
} from 'react-stately';

import { AriaNecessityIndicator, StyleSystemProps } from '~/types';

import { CheckboxIcon } from '../CheckboxIcon';
import { Icon } from '../Icon';
import { NecessityIndicator } from '../NecessityIndicator';
import { RadioIcon } from '../RadioIcon';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { ToggleField } from '../ToggleField';

export type RadioItem = {
  name?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
};

export type RadioSetDiffProps = {
  showDiff?: boolean;
  previousValues?: string[];
};

export type RadioSetFieldProps = StyleSystemProps &
  AriaRadioGroupProps &
  AriaNecessityIndicator &
  RadioSetDiffProps &
  ListProps<RadioItem> & {
    label: React.ReactNode;
  };

const RadioSetContext = createContext<RadioGroupState & ListState<RadioItem>>(
  {} as RadioGroupState & ListState<RadioItem>
);

type GroupItemProps = AriaCheckboxGroupItemProps & {
  node: Node<RadioItem>;
};

export function GroupItem({ node, ...props }: GroupItemProps) {
  const state = useContext(RadioSetContext);
  const ref = useRef<HTMLInputElement>(null);

  const isDisabled = state.isDisabled || state.disabledKeys.has(node.key);

  const { inputProps, isSelected } = useRadio(
    {
      ...props,
      value: '' + node.key,
      isDisabled
    },
    state,
    ref
  );

  return (
    <ToggleField
      label={node.rendered}
      labelProps={{}}
      description={node.value?.description}
      descriptionProps={{}}
      errorMessage={undefined}
      errorMessageProps={{}}
      inputSlot={RadioIcon}
      inputProps={inputProps}
      isSelected={isSelected}
      isIndeterminate={props.isIndeterminate}
      isDisabled={isDisabled}
    />
  );
}

/**
 * Radio sets allow users to select a single item from a list of options.
 *
 * <!-- @ruiAtomic Key -->
 */
export const RadioSetField = forwardRef<HTMLDivElement, RadioSetFieldProps>(
  (props, ref) => {
    const { label, description, necessityIndicator, errorMessage } = props;

    const listState = useListState(props);
    const groupState = useRadioGroupState(props);

    // TODO: Figure out how to merge listState and groupState.
    // I might just make everything a "list" behind the scenes.

    const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(
      props,
      groupState
    );

    return (
      <Stack {...radioGroupProps} ref={ref}>
        <Text as="label" {...labelProps}>
          {label}
          {necessityIndicator && <NecessityIndicator />}
        </Text>

        <RadioSetContext.Provider value={{ ...listState, ...groupState }}>
          {[...listState.collection].map((item) =>
            <GroupItem key={item.key} node={item} value={item.textValue} />
          )}
        </RadioSetContext.Provider>

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
