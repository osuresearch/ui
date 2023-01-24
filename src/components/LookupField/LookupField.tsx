import { CollectionChildren } from '@react-types/shared';
import React, { forwardRef, useRef } from 'react';
import { useComboBox, useFilter, useSearchField } from 'react-aria';
import { ComboBoxStateOptions, useComboBoxState, useSearchFieldState } from 'react-stately';

import { mergeRefs } from '~/utils';

import { CloseButton } from '../CloseButton';
import { FormField, FormFieldBase } from '../FormField';
import { Group } from '../Group';
import { ListBox } from '../ListBox';
import { Popover } from '../Popover';
import { TextInputSlot } from '../TextField';

export type LookupOption = Record<string, any>;

export type LookupFieldProps = FormFieldBase<React.Key> &
  Omit<
    ComboBoxStateOptions<LookupOption>,
    'selectedKey' | 'defaultSelectedKey' | 'onSelectionChange'
  > & {
    /** `Item` components only */
    children: CollectionChildren<LookupOption>;
  };

/**
 * A lookup combines a text input with a listbox, allowing users to
 * filter a list of options to items matching a query. The text
 * input will become read only once an item has been selected.
 */
export const LookupField = forwardRef<HTMLInputElement, LookupFieldProps>((props, ref) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const clearButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listBoxRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const { contains } = useFilter({
    sensitivity: 'base'
  });

  const comboBoxProps: ComboBoxStateOptions<LookupOption> = {
    ...props,

    // Transform ValueBase<React.Key> to SingleSelection
    selectedKey: props.value,
    defaultSelectedKey: props.defaultValue,
    onSelectionChange: props.onChange,

    defaultFilter: contains
  };

  const state = useComboBoxState(comboBoxProps);

  const { labelProps, inputProps, listBoxProps, descriptionProps, errorMessageProps } = useComboBox(
    {
      ...comboBoxProps,
      inputRef,
      listBoxRef,
      popoverRef,
      isReadOnly: props.isReadOnly || !!state.selectedKey
    },
    state
  );

  const searchProps = {
    label: props.label,
    value: state.inputValue,
    onChange: (v: string) => state.setInputValue(v)
  };

  const searchState = useSearchFieldState(searchProps);
  const { clearButtonProps } = useSearchField(searchProps, searchState, inputRef);

  const showCloseButton = state.inputValue !== '' && !props.isReadOnly && !props.isDisabled;

  return (
    <FormField
      {...props}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
    >
      <Group w="100%" ref={wrapperRef}>
        <TextInputSlot ref={mergeRefs(ref, inputRef)} {...inputProps} />
        <div className="rui-absolute rui-inset-[2px] rui-left-auto">
          <CloseButton
            ref={clearButtonRef}
            style={{
              visibility: showCloseButton ? 'visible' : 'hidden'
            }}
            {...clearButtonProps}
          />
        </div>

        {state.isOpen && (
          <Popover ref={popoverRef} state={state} triggerRef={wrapperRef} placement="bottom start">
            <ListBox ref={listBoxRef} {...listBoxProps} state={state} />
          </Popover>
        )}
      </Group>
    </FormField>
  );
});
