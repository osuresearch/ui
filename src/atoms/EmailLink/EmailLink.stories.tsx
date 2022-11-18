import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmailLink } from './index';

export default {
    title: 'Atoms/EmailLink',
    component: EmailLink,
    argTypes: {
        children: { control: 'text' },
    }
} as ComponentMeta<typeof EmailLink>;

const Template: ComponentStory<typeof EmailLink> = (args) => 
    <EmailLink {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    to: 'mcmanning.1@osu.edu',
};

export const WithPrefilledContent = Template.bind({});
WithPrefilledContent.args = {
    to: 'mcmanning.1@osu.edu',
    cc: ['coplin.7@osu.edu', 'ray.30@osu.edu'],
    subject: 'OSU Research UI Question',
    body: 'I had a question about ...',
    children: 'Ask a question',
}
