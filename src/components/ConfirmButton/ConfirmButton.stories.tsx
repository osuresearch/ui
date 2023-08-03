import { Meta, StoryObj } from '@storybook/react';

import { ConfirmButton } from './ConfirmButton';

const meta = {
  title: 'Components/ConfirmButton',
  component: ConfirmButton,
  argTypes: {},
} satisfies Meta<typeof ConfirmButton>;

export default meta;
type Story = StoryObj<typeof ConfirmButton>;

export const Example = {
  args: {
    children: 'Submit',
    renderContent: 'Are you sure you want to submit this form?',
    confirmButtonLabel: 'Submit',
    cancelButtonLabel: 'Cancel',
    onClick: () => alert('Submitted!'),
  },
} satisfies Story;

export const WithTitle = {
  ...Example,
  args: {
    children: 'Delete',
    title: 'Delete this submission?',
    renderContent:
      'Deleted submissions will be withdrawn from review and cannot be recovered. You will need to start a new submission if you wish to resubmit.',
    confirmButtonLabel: 'Delete',
    onClick: () => alert('Deleted!'),
  },
} satisfies Story;
