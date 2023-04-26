import { CollectionChildren } from '@react-types/shared';
import React, { forwardRef, useRef } from 'react';
import { useComboBox, useFilter } from 'react-aria';
import { ComboBoxStateOptions, useComboBoxState } from 'react-stately';

import { mergeRefs } from '../../utils';
import { FormField, FormFieldBase } from '../FormField';
import { IconButton } from '../IconButton';
import { ListBox } from '../ListBox';
import { Popover } from '../Popover';
import { TextInputSlot } from '../TextField';

export type ComboBoxOption = Record<string, any>;

export type ComboBoxFieldProps = FormFieldBase<React.Key> &
  Omit<
    ComboBoxStateOptions<ComboBoxOption>,
    'selectedKey' | 'defaultSelectedKey' | 'onSelectionChange'
  > & {
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
  const anchorRef = useRef<HTMLDivElement>(null);

  const { contains } = useFilter({
    sensitivity: 'base'
  });

  const comboBoxProps: ComboBoxStateOptions<ComboBoxOption> = {
    ...props,

    // Transform ValueBase<React.Key> to SingleSelection
    selectedKey: props.value,
    defaultSelectedKey: props.defaultValue,
    onSelectionChange: props.onChange,

    defaultFilter: contains
  };

  const state = useComboBoxState(comboBoxProps);

  const {
    labelProps,
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    descriptionProps,
    errorMessageProps
  } = useComboBox(
    {
      ...comboBoxProps,
      inputRef,
      buttonRef: triggerRef,
      listBoxRef,
      popoverRef
    },
    state
  );

  const { name, ...inputPropsWithoutName } = inputProps;

  return (
    <FormField
      {...props}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
    >
      <div className="rui-relative rui-w-full">
        <input type="hidden" name={name} value={state.selectedKey} />
        <TextInputSlot ref={mergeRefs(ref, inputRef)} {...inputPropsWithoutName} />
        <div className="rui-absolute rui-inset-[2px] rui-left-auto">
          <IconButton
            ref={triggerRef}
            name="chevron"
            size={16}
            variant="fade"
            iconProps={{
              rotate: 90,
            }}
            h="100%"
            px="xs"
            label={triggerProps['aria-label'] ?? 'Show suggestions'}
            {...triggerProps}
          />
        </div>

        {/* Anchor right under the start of the input box to position the popover  */}
        <div ref={anchorRef} className="rui-w-0 rui-h-0" />

        {state.isOpen && (
          <Popover ref={popoverRef} state={state} triggerRef={anchorRef} placement="bottom left">
            <ListBox itemProps={{ px: 'sm', py: 'xxs' }} ref={listBoxRef} {...listBoxProps} label="Suggestions" state={state} />
          </Popover>
        )}
      </div>
    </FormField>
  );
});
