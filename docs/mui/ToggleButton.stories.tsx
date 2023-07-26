import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { Icon } from '../../src/components';

const meta = {
  title: 'MUI Components/ToggleButton',
  component: ToggleButton,
  argTypes: {},
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Default = {
  render: (args) => {
    const [selected, setSelected] = React.useState(true);

    return (
      <ToggleButton
        {...args}
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
      >
        <Icon name="check" />
      </ToggleButton>
    );
  },
} satisfies Story;

export const Primary = {
  ...Default,
  args: {
    color: 'primary',
  },
} satisfies Story;

export const Secondary = {
  ...Default,
  args: {
    color: 'secondary',
  },
} satisfies Story;

export const HorizontalGroup = {
  render: (args) => {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
      setFormats(newFormats);
    };

    return (
      <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
} satisfies Story;

export const VerticalGroup = {
  render: (args) => {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
      setFormats(newFormats);
    };

    return (
      <ToggleButtonGroup
        orientation="vertical"
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
} satisfies Story;
