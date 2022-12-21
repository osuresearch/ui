import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Listicle, ListicleProps } from './index';

export default {
  title: 'BUX Stuff/Listicle',
  component: Listicle,
  argTypes: {}
} as Meta<typeof Listicle>;

export const Default: Story<ListicleProps> = (args) => (
  <Listicle {...args}>
    <Listicle.Item title="Take your next step toward becoming a Buckeye">
      Fisher first day of classes Brutus home to world-class faculty prepare our students to enter
      their careers as thought leaders flow of ideas Marion reflecting our world&apos;s medley of
      ideas, beliefs, backgrounds and cultures classsroom Lima we are all Buckeyes, but the myriad
      ways in which we differ make us stronger.
    </Listicle.Item>
    <Listicle.Item title="Empower people and their potential">
      Urban Arts Space homecoming week cutting edge of research and innovation passionate students
      &amp; innovative researchers highest-ranked public university in Ohio Fisher WOSU cutting edge
      of research and innovation bringing together ideas and disciplines to create bold, new
      connections nurturing an inclusive, equitable environment for all.
    </Listicle.Item>
    <Listicle.Item title="Highest-ranked public university in Ohio">
      Consectetur adipiscing elit we believe there is a power inside each and every one of us to
      create vibrant futures buckeye ipsum nurturing an inclusive, equitable environment for all
      biodiversity Moritz tbdbitl Columbus Ohio Union people are at the heart of our strengths our
      strengths are an authentic and distinctive combination of qualities reflective of who we are.
    </Listicle.Item>
  </Listicle>
);

export const Unordered: Story<ListicleProps> = () => (
  <Listicle variant="unordered">
    <Listicle.Item title="Listicle item 1">
      Text for listicle item 1. I&apos;m baby yOLO vice neutra, kale chips DIY hell of yuccie.
      Typewriter franzen street art activated charcoal. Gluten-free art party live-edge, yuccie next
      level mlkshk meditation skateboard tattooed shaman craft beer ennui.
    </Listicle.Item>
    <Listicle.Item title="Listicle item 2">
      Text for listicle item 2. Keffiyeh live-edge four dollar toast, kogi scenester raclette
      iceland. Affogato PBR&amp;B chillwave polaroid echo park. Kogi shoreditch put a bird fashion
      axe bitters heirloom pitchfork thundercats echo park.
    </Listicle.Item>
    <Listicle.Item title="Listicle item 3">
      Text for listicle item 3. Cronut hella iceland selfies microdosing man braid kale chips vice
      kitsch beard shabby chic pickled woke chartreuse pug. Plaid flexitarian authentic, fam keytar
      meh jean shorts craft beer pour-over listicle. Banh mi 3 wolf moon plaid mixtape yuccie blog
      copper mug kombucha.
    </Listicle.Item>
  </Listicle>
);

export const Long: Story<ListicleProps> = (args) => (
  <Listicle {...args}>
    {Array.from(Array(20)).map((x, num) => (
      <Listicle.Item key={num} title={`Listicle item ${num + 1}`}>
        {`Content for listicle item ${num + 1}`}
      </Listicle.Item>
    ))}
  </Listicle>
);
