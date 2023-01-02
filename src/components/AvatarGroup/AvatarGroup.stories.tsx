import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Avatar } from '../Avatar';
import { AvatarGroupProps, AvatarGroup as Component } from './AvatarGroup';

export default RUIComponentMeta<AvatarGroupProps>('Components', Component).withStyleSystemProps();

export const Overview = RUIComponentStory<AvatarGroupProps>((args) => (
  <Component {...args}>
    <Avatar alt="" name="Chase" opicUsername="mcmanning.1" />
    <Avatar alt="" name="Neil" opicUsername="coplin.7" />
    <Avatar alt="" name="Corey" opicUsername="moore.4521" />
    <Avatar alt="" name="John" opicUsername="ray.30" />
    <Avatar alt="" name="Lily" opicUsername="xing.216" />
  </Component>
));

export const WithLimit = RUIComponentStory<AvatarGroupProps>(
  (args) => (
    <Component {...args}>
      <Avatar alt="" name="Chase" opicUsername="mcmanning.1" />
      <Avatar alt="" name="Neil" opicUsername="coplin.7" />
      <Avatar alt="" name="Corey" opicUsername="moore.4521" />
      <Avatar alt="" name="John" opicUsername="ray.30" />
      <Avatar alt="" name="Lily" opicUsername="xing.216" />
    </Component>
  ),
  {
    limit: 2
  }
);

export const Polymorphic = RUIComponentStory<AvatarGroupProps>((args) => {
  const people = [
    ['Chase', 'mcmanning.1'],
    ['Neil', 'coplin.7'],
    ['Corey', 'moore.4521'],
    ['John', 'ray.30'],
    ['Lily', 'xing.216']
  ];

  return (
    <Component {...args}>
      {people.map((person) => (
        <Avatar
          as="a"
          key={person[0]}
          alt={person[0]}
          name={person[0]}
          opicUsername={person[1]}
          href={`https://code.osu.edu/${person[1]}`}
          target="_blank"
        />
      ))}
    </Component>
  );
});
