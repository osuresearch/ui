
import React from 'react';
import { IconGallery, IconItem } from '@storybook/addon-docs';
import { Icon } from '../components/Icon';
import { Text } from '../components/Text';
import { groups } from '@osuresearch/iconography';

/**
 * Custom icon gallery component for Storybook to
 * automatically render a batch of icons from our library
 *
 * Note that this *must* be in JavaScript because
 * Storybook's components don't fully support React 18.
 */
export function IconLibrary({ name }: { name: string }) {
  let names = [];

  // TODO: Edge case is the OSU namespace icons currently. Fix this.
  if (name === 'osu') {
    names = [
      'rui:osu-buckeyelink',
      'rui:osu-findpeople',
      'rui:osu-search',
      'rui:osu-webmail',
    ]
  } else {
    names = Object.keys(groups[name]);
  }

  return (
    <IconGallery>
      {names.map(
        (name) =>
        <IconItem key={name} name={name}>
          <Text><Icon size={32} name={name} /></Text>
        </IconItem>
      )}
    </IconGallery>
  );
}
