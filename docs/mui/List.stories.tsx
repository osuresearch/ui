import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import {
  Avatar,
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

import { Icon } from '../../src/components';

const meta = {
  title: 'MUI Components/List',
  component: List,
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof List>;

export const Example = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <List
        sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.List' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <Icon name="envelope" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Icon name="search" />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <Icon name="share" />
          </ListItemIcon>
          <ListItemText primary="Share" />
          {open ? <Icon name="chevron" rotate={90} /> : <Icon name="chevron" rotate={270} />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Icon name="tiktok" />
              </ListItemIcon>
              <ListItemText primary="Tiktok" />
            </ListItemButton>{' '}
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Icon name="instagram" />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    );
  },
} satisfies Story;

export const MultipleSelection = {
  render: (args) => {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    return (
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value + 1}`}
                    src={`https://material-ui.com/static/images/avatar/${value + 1}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  },
} satisfies Story;
