import { AriaSelectProps, SelectProps } from '@react-types/select';
import { CollectionChildren } from '@react-types/shared';
import React, { forwardRef, useRef } from 'react';
import { useComboBox, useFilter } from 'react-aria';
import { ComboBoxStateOptions, useComboBoxState } from 'react-stately';

import { AriaNecessityIndicator, StyleSystemProps } from '~/types';
import { mergeRefs } from '~/utils';

import { Box } from '../Box';
import { Button } from '../Button';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { InputField } from '../InputField';
import { ListBox } from '../ListBox';
import { Popover } from '../Popover';
import { TextInputSlot } from '../TextField';

export type ComboBoxOption = Record<string, any>;

export type ComboBoxFieldProps = StyleSystemProps &
  SelectProps<ComboBoxOption> &
  AriaNecessityIndicator &
  AriaSelectProps<ComboBoxOption> &
  // AriaComboBoxOptions
  ComboBoxStateOptions<ComboBoxOption> & {
    /* Your props */

    isReadOnly?: boolean;

    /** `Item` components only */
    children: CollectionChildren<ComboBoxOption>;
  };

/**
 * A combo box combines a text input with a listbox,
 * allowing users to filter a list of options to items
 * matching a query.
 *
 * ## Accessibility
 * - Exposed to assistive technology as a combobox with ARIA
 * - Labeling support for accessibility
 * - Required and invalid states exposed to assistive technology via ARIA
 * - Support for mouse, touch, and keyboard interactions
 * - Keyboard support for opening the combo box list box using the arrow keys, including automatically focusing the first or last item accordingly
 * - Support for opening the list box when typing, on focus, or manually
 * - Handles virtual clicks on the input from touch screen readers to toggle the list box
 * - Virtual focus management for combo box list box option navigation
 * - Hides elements outside the input and list box from assistive technology while the list box is open in a portal
 * - Custom localized announcements for option focusing, filtering, and selection using an ARIA live region to work around VoiceOver bugs
 * - Support for description and error message help text linked to the input via ARIA
 *
 * For full details of supported features, see
 * [React Aria's useComboBox documentation](https://react-spectrum.adobe.com/react-aria/useComboBox.html#features)
 */
export const ComboBoxField = forwardRef<HTMLInputElement, ComboBoxFieldProps>((props, ref) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listBoxRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const { contains } = useFilter({
    sensitivity: 'base'
  });

  const state = useComboBoxState({
    ...props,
    defaultFilter: contains
  });

  const {
    labelProps,
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    descriptionProps,
    errorMessageProps
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef: triggerRef,
      listBoxRef,
      popoverRef
    },
    state
  );

  return (
    <InputField
      {...props}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
    >
      <Group w="100%">
        <TextInputSlot ref={mergeRefs(ref, inputRef)} {...inputProps} />
        <div className="rui-absolute rui-inset-[2px] rui-left-auto">
          <IconButton
            name="caret"
            ref={triggerRef}
            bgc="light"
            size={24}
            h="100%"
            px="xs"
            label={triggerProps['aria-label'] ?? 'Show suggestions'}
            {...triggerProps}
          />
        </div>

        {state.isOpen && (
          <Popover ref={popoverRef} state={state} triggerRef={inputRef} placement="bottom start">
            <ListBox ref={listBoxRef} {...listBoxProps} state={state} />
          </Popover>
        )}
      </Group>
    </InputField>
  );
});
