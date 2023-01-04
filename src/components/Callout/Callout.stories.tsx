import React, { useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Button } from '../Button';
import { CloseButton } from '../CloseButton';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Callout, CalloutProps } from './Callout';

export default RUIComponentMeta<CalloutProps>('Components', Callout);

export const Overview = RUIComponentStory<CalloutProps>((args) => (
  <Callout {...args} contentSlot="Text in the content slot">
    <Button>Help</Button>
  </Callout>
));

export const WithPlacement = RUIComponentStory<CalloutProps>(
  (args) => (
    <Stack gap="lg" align="center">
      <Group justify="center">
        <Callout {...args} placement="left">
          <Button>👈</Button>
        </Callout>

        <Callout {...args} placement="top">
          <Button>👆</Button>
        </Callout>

        <Callout {...args} placement="bottom">
          <Button>👇</Button>
        </Callout>

        <Callout {...args} placement="right">
          <Button>👉</Button>
        </Callout>
      </Group>

      {/* <Callout {...args} placement="center">
      <Button>👉👈</Button>
    </Callout> */}
    </Stack>
  ),
  {
    contentSlot: '💥'
  }
);

export const ButtonTests = RUIComponentStory<CalloutProps>((args) => {
  const [open, setOpen] = useState(false);

  return (
    <Group>
      <Button onPress={() => setOpen(!open)}>Toggle ➡</Button>

      <Callout isOpen={open} onOpenChange={setOpen} contentSlot="Controlled callout content">
        <Button onPress={() => alert('on press')}>Controlled</Button>
      </Callout>

      <Callout contentSlot="Uncontrolled callout content">
        <Button>Uncontrolled</Button>
      </Callout>

      <Callout contentSlot="Uncontrolled callout content">
        <Button onClick={() => alert('on click')}>Uncontrolled w/ on click</Button>
      </Callout>
    </Group>
  );
}).withDescription(`
- Note that with the controlled button, the \`onPress\` handler is overridden
- Trigger slot needs an \`onPress\` prop to be supported. Otherwise, it's controlled-only
`);

export const SpanTests = RUIComponentStory<CalloutProps>((args) => {
  const [open, setOpen] = useState(false);

  return (
    <Group>
      <Button onPress={() => setOpen(!open)}>Toggle ➡</Button>

      <Callout isOpen={open} onOpenChange={setOpen} contentSlot="Controlled callout content">
        <span>Controlled</span>
      </Callout>

      <Callout contentSlot="Uncontrolled callout content">
        <span>Uncontrolled</span>
      </Callout>
    </Group>
  );
});

export const GuidedTour = RUIComponentStory<CalloutProps>((args) => {
  const [step, setStep] = useState(0);

  const coachmark = (x: number, y: number) => (
    <Icon c="blue" style={{ position: 'absolute', top: y, left: x }} name="circle" />
  );

  const NextButton = () => <Button onPress={() => setStep((s) => s + 1)}>Next</Button>;

  const PrevButton = () => <Button onPress={() => setStep((s) => s - 1)}>Previous</Button>;

  // TODO: Autofocus on the next button somehow

  const Content = () => (
    <Stack>
      <Group justify="apart">
        <Text>callout content</Text>
        <CloseButton onPress={() => setStep(0)} />
      </Group>
      <Group justify="apart">
        <Text>{step} / 4</Text>
        <PrevButton />
        <NextButton />
      </Group>
    </Stack>
  );

  return (
    <div style={{ width: 600, height: 400 }}>
      <Button onPress={() => setStep(1)}>Start tour</Button>

      <Callout isOpen={step === 1} contentSlot={<Content />}>
        {coachmark(150, 20)}
      </Callout>

      <Callout isOpen={step === 2} placement="left" contentSlot={<Content />}>
        {coachmark(300, 350)}
      </Callout>

      <Callout isOpen={step === 3} contentSlot={<Content />}>
        {coachmark(580, 200)}
      </Callout>

      <Callout isOpen={step === 4} placement="right" contentSlot={<Content />}>
        {coachmark(100, 200)}
      </Callout>
    </div>
  );
}).withDescription(`
  Controlled callouts can be used to lock the user into a guided tour
  of an application.
`);
