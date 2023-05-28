import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Button } from '../Button';
import { CloseButton } from '../CloseButton';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Callout, CalloutProps } from './Callout';

export default {
  title: 'Components / Callout',
  ...RUIComponentMeta(Callout)
};

export const Overview = RUIComponentStory<CalloutProps>((args) => (
  <Callout {...args} renderContent="Text in the content slot">
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
    renderContent: '💥'
  }
);

export const ButtonTests = RUIComponentStory<CalloutProps>(() => {
  const [open, setOpen] = useState(false);

  return (
    <Group>
      <Button onPress={() => setOpen(!open)}>Toggle ➡</Button>

      <Callout isOpen={open} onOpenChange={setOpen} renderContent="Controlled callout content">
        <Button onPress={() => alert('on press')}>Controlled</Button>
      </Callout>

      <Callout renderContent="Uncontrolled callout content">
        <Button>Uncontrolled</Button>
      </Callout>

      <Callout renderContent="Uncontrolled callout content">
        <Button onPress={() => alert('on press')}>Uncontrolled w/ on click</Button>
      </Callout>
    </Group>
  );
}).withDescription(`
- Note that with the controlled button, the \`onPress\` handler is overridden
- Trigger slot needs an \`onPress\` prop to be supported. Otherwise, it's controlled-only
`);

export const SpanTests = RUIComponentStory<CalloutProps>(() => {
  const [open, setOpen] = useState(false);

  return (
    <Group>
      <Button onPress={() => setOpen(!open)}>Toggle ➡</Button>

      <Callout isOpen={open} onOpenChange={setOpen} renderContent="Controlled callout content">
        <span>Controlled</span>
      </Callout>

      <Callout renderContent="Uncontrolled callout content">
        <span>Uncontrolled</span>
      </Callout>
    </Group>
  );
});

export const GuidedTour = RUIComponentStory<CalloutProps>(() => {
  const [step, setStep] = useState(0);

  const coachmark = (x: number, y: number) => (
    <Icon c="accent01" style={{ position: 'absolute', top: y, left: x }} name="circle" />
  );

  const NextButton = () => (
    <Button tabIndex={1} onPress={() => setStep((s) => s + 1)}>
      Next
    </Button>
  );

  const PrevButton = () => (
    <Button tabIndex={2} onPress={() => setStep((s) => s - 1)}>
      Previous
    </Button>
  );

  // TODO: Autofocus on the next button somehow

  const Content = () => (
    <Stack c="accent01-inverse">
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

      <Callout isOpen={step === 1} bgc="accent01" renderContent={<Content />}>
        {coachmark(150, 20)}
      </Callout>

      <Callout isOpen={step === 2} placement="left" bgc="accent01" renderContent={<Content />}>
        {coachmark(300, 350)}
      </Callout>

      <Callout isOpen={step === 3} bgc="accent01" renderContent={<Content />}>
        {coachmark(580, 200)}
      </Callout>

      <Callout isOpen={step === 4} placement="right" bgc="accent01" renderContent={<Content />}>
        {coachmark(100, 200)}
      </Callout>
    </div>
  );
}).withDescription(`
  Controlled callouts can be used to lock the user into a guided tour
  of an application.
`);
