import { Node, CollectionChildren } from '@react-types/shared';
import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import { mergeProps, useMenu, useMenuItem, useSearchField, AriaMenuOptions } from 'react-aria';
import { AsyncListOptions, useSearchFieldState, useTreeState, TreeProps, TreeState, useAsyncList, AsyncListData } from 'react-stately';

import { cx, mergeRefs } from '../../utils';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { TextInputSlot } from '../TextField';
import { Stack } from '../Stack';
import { useDebouncedState } from '../../hooks/useDebouncedState';
import { FocusRing } from '../FocusRing';
import { Text } from '../Text';
import { IconButton } from '../IconButton';
import { VisuallyHidden } from '../VisuallyHidden';
import { ScrollArea } from '../ScrollArea';

type ResultListProps<T> = TreeProps<T> & AriaMenuOptions<T>;

type ResultItemProps<T> = {
  state: TreeState<T>;
  node: Node<T>;
};

export type LookupOption = Record<string, any>;

export type LookupProps<T extends object = LookupOption> =
  // Omit<AsyncListOptions<T, any>, 'initialFilterText' | 'initialSelectedKeys'> &
  {
    list: AsyncListData<T>;

    /** Custom icon name to use. If omitted, will default to `search` */
    iconName?: string;

    /**
     * Input label for screen readers
     */
    label: React.ReactNode

    onSelectionChange?: (item: T) => void;

    value?: string;
    onChange?: (filterText: string) => void;

    placeholder?: string

    children: CollectionChildren<T>

  };

function _Lookup<T extends object>(
  { iconName = 'search', list, children, onChange, onSelectionChange, ...props }: LookupProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const inputRef = useRef<HTMLInputElement>(null);
  // const list = useAsyncList<T>(props);
  const [filterText, setFilterText] = useDebouncedState('', 200);

  // Debounce fetch requests
  useEffect(() => {
    if (filterText.length > 0) {
      list.setFilterText(filterText);
    }
  }, [filterText]);

  const hasResults = list.items.length > 0;
  const hasFilterText = filterText.length > 0;

  let errorMessage = list.error?.message;
  if (!hasResults && hasFilterText && !errorMessage) {
    errorMessage = 'No results';
  }

  const searchFieldState = useSearchFieldState({
    onChange: (value) => {
      setFilterText(value);
      onChange && onChange(value);
    },
    onClear: () => setFilterText(''),
  });

  const { labelProps, inputProps, errorMessageProps, clearButtonProps } = useSearchField(
    {
      ...props,
      errorMessage,
      label: props.label,
    },
    searchFieldState,
    inputRef
  );

  const onAction = (key: React.Key) => {
    const item = list.getItem(key);

    searchFieldState.setValue('');
    onSelectionChange && onSelectionChange(item);
  }

  return (
    <>
    <Stack w="100%" gap="xs" p="sm">
      <div className="rui-relative rui-w-full">
        <VisuallyHidden>
          <span {...labelProps}>{props.label}</span>
        </VisuallyHidden>

        <TextInputSlot
          fs="sm"
          p="xxs"
          ref={mergeRefs(inputRef, ref)}
          {...mergeProps(inputProps, {
            style: {
              paddingRight: 32,
            }
          })}
        />

        <div className="rui-absolute rui-inset-[2px] rui-left-auto">
          {list.isLoading && // TODO: better icon
            <Icon name="rotate" c="dark" className="rui-animate-spin" size={16} p="xs" h="100%" />
          }
          {!list.isLoading && inputProps.value !== '' &&
            <IconButton {...clearButtonProps}
              label="Clear search"
              size={16}
              h="100%"
              px="xs"
              name="xmark"
              variant="fade"
            />
          }
        </div>
      </div>

      {errorMessage && (
        <Text c="error" fs="sm" {...errorMessageProps}>
          <Icon name="xmarkCircle" /> {errorMessage}
        </Text>
      )}
    </Stack>

    {hasFilterText && hasResults && // TODO: Wire up ARIA
      <ResultList items={list.items} onAction={onAction} aria-label="Search results">
        {children}
      </ResultList>
    }
    </>
  );
}

function ResultList<T extends object>(props: ResultListProps<T>) {
  const state = useTreeState<T>(props);
  const ref = useRef<HTMLUListElement>(null);
  const { menuProps } = useMenu<T>(props, state, ref);

  return (
    <ScrollArea mah="20rem">
      <FocusRing>
        <Box as="ul" ref={ref} {...menuProps}>
          {Array.from(state.collection).map((item) =>
            <ResultItem
              key={item.key}
              node={item}
              state={state}
            />
          )}
        </Box>
      </FocusRing>
    </ScrollArea>
  );
}

function ResultItem<T>({ node, state }: ResultItemProps<T>) {
  const ref = useRef<HTMLLIElement>(null);
  const { menuItemProps, isFocused, isDisabled } = useMenuItem(
    { key: node.key },
    state,
    ref
  );

  return (
    <Box
      as="li"
      ref={ref}
      {...menuItemProps}
      className={cx(
        'rui-outline-none',
        { 'rui-cursor-pointer': !isDisabled },
        { 'rui-cursor-not-allowed': isDisabled }
      )}
      c={isDisabled ? 'dark' : 'light-contrast'}
      px="sm"
      py="xxs"
      miw={200}
      bgc={isFocused ? 'light' : undefined}
    >
      {node.rendered}
    </Box>
  );
}

// Pattern reference: https://fettblog.eu/typescript-react-generic-forward-refs/

/**
 * A Lookup is a simplified filter and display of async lists.
 *
 * ## Accessibility
 *
 * - The required `label` prop sets a visually hidden label for the input
 */
export const Lookup = forwardRef(_Lookup) as <T extends object = LookupOption>(
  props: LookupProps<T> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof _Lookup>;
