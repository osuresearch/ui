import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Badge as MuiBadge,
  BadgeProps as MuiBadgeProps,
  Button,
  ButtonGroup,
  FormControlLabel,
  Stack,
  Switch
} from '@mui/material';
import { Icon } from '../../src/components';

export type BadgeProps = Pick<
  MuiBadgeProps,
  'color' | 'badgeContent' | 'variant' | 'children' | 'invisible'
>;
export const Badge = (args: BadgeProps) => (
  // eslint-disable-next-line react/no-children-prop
  <MuiBadge children={<Button color="secondary">Profile</Button>} badgeContent={14} {...args} />
);

const meta = {
  title: 'MUI Components/Badge',
  component: Badge,
  argTypes: {}
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

function BadgeExample() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div>
      <Stack direction="row" gap={2}>
        <Badge color="primary" badgeContent={count}>
          <Icon name="envelope" />
        </Badge>
        <Badge color="secondary" badgeContent={count}>
          <Icon name="envelope" />
        </Badge>
        <Badge color="error" badgeContent={count}>
          <Icon name="envelope" />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <Icon name="dash" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <Icon name="plus" />
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row" gap={1}>
        <Badge color="primary" variant="dot" invisible={invisible}>
          <Icon name="envelope" />
        </Badge>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <Icon name="envelope" />
        </Badge>
        <Badge color="error" variant="dot" invisible={invisible}>
          <Icon name="envelope" />
        </Badge>
        <FormControlLabel
          control={<Switch color="primary" checked={!invisible} onChange={handleBadgeVisibility} />}
          label="Show Badge"
        />
      </Stack>
    </div>
  );
}

export const Default = {
  render: (args) => BadgeExample(),
  args: {}
} satisfies Story;
