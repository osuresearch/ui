import { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import { Stack, Typography } from '@mui/material';

import { AutocompleteField, AutocompleteItem } from './AutocompleteField';

const meta: Meta<typeof AutocompleteField> = {
  title: 'Forms/AutocompleteField',
  component: AutocompleteField,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AutocompleteField>;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const TOP_100_FILMS = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];

const TOP_100_FILM_NAMES = TOP_100_FILMS.map((x) => x.label);

async function searchTop100Films({ filterText }: { filterText?: string }) {
  if (!filterText) {
    return {
      items: [],
    };
  }

  return {
    items: TOP_100_FILM_NAMES.filter((x) => x.toLowerCase().includes(filterText.toLowerCase())),
  };
}

async function searchPeople({ filterText, signal }: { filterText?: string; signal: AbortSignal }) {
  if (!filterText) {
    return {
      items: [],
    };
  }

  const res = await fetch(`https://orapps.osu.edu/api/v1/person?q=${filterText}`, {
    signal,
  });

  const json = await res.json();
  return {
    items: json.data.map((person: any) => ({
      id: person.id,
      label: person.attributes.name,
    })),
  };
}

export const Example: Story = {
  render: (args) => <AutocompleteField {...args} />,
  args: {
    label: 'Autocomplete field',
    description: 'Description content',
    load: searchPeople,
  },
};

export const DefaultValue: Story = {
  args: {
    ...Example.args,
    defaultValue: 'string value',
  },
};

export const ControlledObjectValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<{ id: string; label: string } | undefined>({
      id: '200275154',
      label: 'Chase McManning',
    });

    return (
      <Stack>
        <AutocompleteField
          name={args.name}
          label={args.label}
          description={args.description}
          load={searchPeople}
          value={value}
          onChange={setValue}
        />
        <Typography>You selected: {JSON.stringify(value)}</Typography>
      </Stack>
    );
  },
  args: {
    label: 'Autocomplete field',
    description: 'Description content',
  },
};

export const ControlledStringValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>('The Shawshank Redemption');

    return (
      <Stack>
        <AutocompleteField
          name={args.name}
          label={args.label}
          description={args.description}
          load={searchTop100Films}
          value={value}
          onChange={setValue}
        />
        <Typography>You selected: {value ?? <em>undefined</em>}</Typography>
      </Stack>
    );
  },
  args: {
    label: 'Autocomplete field',
    description: 'Description content',
  },
};

export const Required: Story = {
  args: {
    ...Example.args,
    required: true,
    necessityIndicator: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Example.args,
    disabled: true,
    defaultValue: 'McManning, Chase',
  },
};

export const ReadOnly: Story = {
  args: {
    ...Example.args,
    readOnly: true,
    defaultValue: 'McManning, Chase',
  },
};

export const Error: Story = {
  args: {
    ...Example.args,
    error: 'You need to fill out this field',
  },
};
