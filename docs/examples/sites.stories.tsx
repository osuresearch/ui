import { ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  Arrow,
  Box,
  Card,
  Divider,
  Group,
  Heading,
  Icon,
  Image,
  TextLink,
  OhioStateFooter,
  OhioStateNavbar,
  PrimaryButton,
  Space,
  Stack,
  Text
} from '../../src/components';

export default {
  title: 'Examples / Sites'
} as ComponentMeta<any>;

// Like boring static content sites? Say no more!
// https://www.osu.edu/research

function Factoid({ stat, label }: { stat: string; label: string }) {
  return (
    <Stack align="center" gap="xs" w="100%">
      {/* Source uses 70px */}
      <Text
        ta="center"
        fs="xxl"
        c="primary"
        fw="extrabold"
        style={{ fontSize: 65, lineHeight: 1.2 }}
      >
        {stat}
      </Text>
      <Text ta="center">{label}</Text>
    </Stack>
  );
}

function WideCard({
  title,
  cta,
  img,
  children
}: {
  title: string;
  cta: string;
  img: string;
  children: React.ReactNode;
}) {
  // TODO: Needs to be a stack on smaller breakpoints (960 and below)
  return (
    <Group gap="xl" maw={1090}>
      <Image src={img} maw={305} alt="A researcher examines a round glass object." />

      <Stack gap={0}>
        <Heading level={2}>{title}</Heading>
        <Text>{children}</Text>
        <TextLink mt="lg">{cta}</TextLink>
      </Stack>
    </Group>
  );
}

export const OhioStateResearch = () => (
  // I don't have a container component built in yet, so just use box.
  // Also I don't like the implicit margin... is that a storybook thing?
  <Box m="-md">
    <OhioStateNavbar />

    {/* Title content */}
    <Stack align="center" maw={1060} mx="auto" my="xl">
      {/* Headline size: font-size: 3.75rem; line-height: 4.5rem; */}

      <Heading level={1} style={{ fontSize: '3.75rem' }}>
        Driving research and discovery
      </Heading>
      <Text fs="md" ta="center" c="neutral-subtle">
        With top minds in their fields, world-class research facilities and partners across the
        country, we are working together to find solutions and redefine discovery.
      </Text>
      <Text fs="md">RESEARCH AND INNOVATION</Text>

      {/* TODO: Small with caret  */}
      <Stack w={220} gap={0}>
        <Divider orientation="horizontal" gap={0} />
        <Arrow placement="top" c="neutral" />
      </Stack>
    </Stack>

    {/* Big facts and numbers */}
    <Group align="center" grow maw={1280} mx="auto" my="xxl">
      <Factoid stat="5ᵗʰ" label="in industry-sponsored research among all U.S. universities" />
      <Divider orientation="vertical" />

      <Factoid stat="360" label="new inventions created by Ohio State researchers each year" />
      <Divider orientation="vertical" />

      <Factoid stat="$1.2 billion" label="in research and development expenditures in FY21" />
    </Group>

    {/* Some organization blurbs nobody will actually read */}
    <Stack maw={1060} gap="xxl" mx="auto" my="xl">
      <WideCard
        img="https://editing.intcomm.osu.edu/sites/default/files/styles/widescreen/public/inline-images/research-research-in-action.jpeg"
        title="Ohio State research in action"
        cta="Visit Enterprise for Research, Innovation and Knowledge"
      >
        Life-changing discoveries, groundbreaking findings, innovative solutions to real-world
        problems — see how the brilliant researchers at Ohio State are tackling tough questions,
        driving change and helping to build a brighter future for us all.
      </WideCard>

      {/* Giant card overlaying an image */}
      <Group gap={0} align="center" maw={1090}>
        {/* They use a grid of col-4 col-8 with an order swap on contents.
            And give the card the style: `width: calc(100% + 104px)` */}
        <Card
          headline="Advancing discovery — together"
          href="https://example.com"
          bgc="surface"
          style={{ zIndex: 1 }}
        >
          From vast corporate partnerships to developing technology, supporting startups and more,
          see how Ohio State is building research communities that enable invention and discovery.
          <Space />
          <PrimaryButton variant="outline">Explore our collaborations</PrimaryButton>
        </Card>

        <Image
          src="https://editing.intcomm.osu.edu/sites/default/files/media/image/2022/07/research-advancing-discovery.jpg"
          maw={705}
          alt="Two people pretending to like each other."
          style={{ marginLeft: -104 }}
        />
      </Group>
    </Stack>

    {/* Another mid-page CTA, classic. Boring. */}
    <Stack align="center" bgc="surface-subtle" gap="xl" py="xxl" my="xl">
      <Icon name="code" c="primary" size={60} />

      <Stack align="center" gap="xs">
        <Heading level={2}>Making connections</Heading>
        <Text>
          By pairing Ohio State&apos;s unrivaled depth and breadth with expertise, we can connect
          and provide unparalleled pathways to innovation.
        </Text>
      </Stack>

      <PrimaryButton variant="outline">Partner with Ohio State</PrimaryButton>
    </Stack>

    {/* Block of article headlines */}
    <Stack maw={1090} gap="xl" mx="auto" my="xl">
      <div>
        <Heading level={2}>Research and innovation in action</Heading>

        <Text>
          From medical breakthroughs and advancements to world-changing research and findings, see
          how the innovators at Ohio State are finding answers and solving real-world problems.
        </Text>
      </div>

      <TextLink>Explore our stories</TextLink>

      <Group gap="xl" grow>
        <Card
          callToAction="Read more"
          headline="Driving smart mobility"
          href="https://example.com"
          image="https://www.osu.edu/_nuxt/image/115f7d.jpg"
        >
          Ohio State researchers are innovating the next generation mobility systems that move
          people, goods and services efficiently, safely and sustainably.
        </Card>
        <Card
          callToAction="Read more"
          headline="Exploring beyond Earth"
          href="https://example.com"
          image="https://www.osu.edu/_nuxt/image/141776.jpg"
        >
          See how our world-renowned researchers continue to lead new discoveries and educate the
          next generation of leaders in aviation and space research.
        </Card>
        <Card
          callToAction="Read more"
          headline="Advancing sustainability"
          href="https://example.com"
          image="https://www.osu.edu/_nuxt/image/a69627.jpg"
        >
          By improving the performance and capability of sensors, our researchers are enhancing the
          way military drones find and locate enemies of the state in real-time.
        </Card>
      </Group>

      <WideCard
        img="https://editing.intcomm.osu.edu/sites/default/files/styles/widescreen/public/media/image/2022/07/research-carmenton.jpg"
        title="Carmenton: Ohio State's innovation district"
        cta="Learn more about Carmenton"
      >
        A hub for technology and talent, Carmenton enables research advances and accelerates
        innovations to market. This burgeoning district will bring communities together to improve
        lives and propel discovery.
      </WideCard>

      <WideCard
        img="https://editing.intcomm.osu.edu/sites/default/files/styles/widescreen/public/media/image/2022/07/research-driving-discovery.jpg?h=c624e10f"
        title="Fostering entrepreneurship"
        cta="Learn more about the Keenan Center for Entrepreneurship"
      >
        See how Ohio State is fueling economic growth and fostering a culture of innovation and
        creation by engaging with researchers, supporting startups and providing networking and
        pathways for student entrepreneurs.
      </WideCard>
    </Stack>

    <OhioStateFooter accessibilityEmail="" />
  </Box>
);
