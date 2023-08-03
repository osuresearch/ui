import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import React, { useId } from 'react';

import { AsyncListOptions, useAsyncList } from 'react-stately';

import {
  Autocomplete,
  CircularProgress,
  InputBaseComponentProps,
  OutlinedInput,
  Typography,
} from '@mui/material';

import { FormField, FormFieldBase } from '../FormField';

/**
 * Generic `T` is item type returned by the async list loader.
 * Generic `C` is the pagination cursor returned from the last page load.
 */
export type AutocompleteFieldProps<T, C> = FormFieldBase<string> & {
  load: AsyncListOptions<T, C>['load'];
};

interface AutocompleteItem {
  id: string;
  label: string;

  [other: string]: any;
}

interface MatchTextProps {
  fragment: string;
  text: string;
}

function MatchText(props: MatchTextProps) {
  const { fragment, text } = props;

  const matches = match(text, fragment, { insideWords: true });
  const parts = parse(text, matches);

  return (
    <Typography>
      {parts.map((part, idx) => (
        <span
          key={idx}
          style={{
            fontWeight: part.highlight ? 700 : 400,
          }}
        >
          {part.text}
        </span>
      ))}
    </Typography>
  );
}

/**
 * Field that performs an asynchronous search as the user types.
 *
 * User must select an entry from the results.
 */
export function AutocompleteField<T extends AutocompleteItem, C>(
  props: AutocompleteFieldProps<T, C>
) {
  const { name, load, onChange, onBlur, value, defaultValue, readOnly, disabled } = props;
  const id = useId();

  const list = useAsyncList<T, C>({
    load,
  });

  const handleChange = (e: React.SyntheticEvent, value: T | null) => {
    onChange && onChange(value?.label ?? undefined);
  };

  const handleInputChange = (e: React.SyntheticEvent, filterText: string) => {
    list.setFilterText(filterText);
  };

  const defaultValueT = defaultValue ? ({ id: defaultValue, label: defaultValue } as T) : undefined;
  const valueT = value ? ({ id: value, label: value } as T) : undefined;

  const AutocompleteInput = (ariaInputProps: InputBaseComponentProps) => (
    <Autocomplete<T>
      id={id}
      disablePortal
      autoComplete
      disabled={disabled || readOnly}
      readOnly={readOnly}
      loading={list.isLoading}
      noOptionsText={list.filterText.length > 0 ? 'No results' : 'Start typing to see suggestions'}
      options={list.items}
      defaultValue={defaultValueT}
      value={valueT}
      getOptionLabel={(item) => item.label}
      onInputChange={handleInputChange}
      onChange={handleChange}
      onBlur={onBlur}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <OutlinedInput
            name={name}
            fullWidth
            inputProps={{ ...params.inputProps, ...ariaInputProps }}
            endAdornment={
              <>
                {list.isLoading && <CircularProgress color="inherit" size={20} />}
                {params.InputProps.endAdornment}
              </>
            }
          />
        </div>
      )}
      renderOption={(props, option, { inputValue }) => (
        <li {...props}>
          <MatchText text={option.label} fragment={inputValue} />
        </li>
      )}
    />
  );

  return <FormField fullWidth {...props} id={id} renderInput={AutocompleteInput} />;
}
