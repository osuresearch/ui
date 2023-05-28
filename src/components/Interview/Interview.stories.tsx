import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Item } from '../Item';
import { Interview, InterviewProps } from './Interview';

export default {
  title: 'Ohio State / Interview',
  ...RUIComponentMeta(Interview).withStyleSystemProps()
};

const Template = RUIComponentStory<InterviewProps>((args) => (
  <Interview {...args}>
    <Item textValue="What makes you the happiest?">
      Brimming with traditions as a community, we empower people and their potential to envision the
      unimagined, advance innovations and solve unrelenting problems at a scale few others can match
      — propelling humanity forward as a community, we empower people and their potential to
      envision the unimagined, advance innovations and solve unrelenting problems at a scale few
      others can match — propelling humanity forward. Morrill homecoming week that power is human
      potential — an astonishing power so elemental, the world thrives on it. So vital, the world
      depends on it envision the unimagined you can never pay back, so you should always try to pay
      forward bringing together ideas and disciplines to create bold, new connections.
    </Item>
    <Item textValue="What is the best advice you've ever received?">
      Lorem ipsum our students grow into educated citizens, compassionate community members,
      critical thinkers and creative problem solvers St. John Arena Ohio Stadium innovations in
      biomedicine it&apos;s seeing this potential in each of us — in all of us — that brings people
      closer together bringing together ideas and disciplines to create bold, new connections.
      Empower people and their potential consectetur adipiscing elit tincidunt venenatis ex nec
      aliquet Buckeyes highest-ranked public university in Ohio our strengths are an authentic and
      distinctive combination of qualities reflective of who we are Fisher Moritz faculty and
      students committed to novel, exciting research that can change the planet and confront modern
      challenges.
    </Item>
    <Item textValue="What was your favorite course at Ohio State?">
      Aliquam St. John Arena ornare euismod velit innovate brimming with traditions a powerful
      network of more than 500,000 alumni Carmen Ohio that team up north our students grow into
      educated citizens, compassionate community members, critical thinkers and creative problem
      solvers teaching and learning gray. That power is human potential — an astonishing power so
      elemental, the world thrives on it. So vital, the world depends on it gray faculty and
      students committed to novel, exciting research that can change the planet and confront modern
      challenges consectetur congue dolor Horseshoe tincidunt venenatis ex nec aliquet. Scientific
      community Buckeye leaf Block O The Schott Byrd Polar and Climate Research Center rich in
      diversity as Buckeyes, we build healthier, more vibrant communities with the belief that all
      things are possible our students grow into educated citizens, compassionate community members,
      critical thinkers and creative problem solvers.
    </Item>
  </Interview>
));

export const QAndA = RUIComponentStory(Template, {
  variant: 'qa'
});

export const Storytelling = RUIComponentStory(Template, {
  variant: 'storytelling'
});
