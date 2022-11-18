import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExternalLink as ExternalLinkComponent } from './index';

export default {
    title: 'Atoms/ExternalLink',
    component: ExternalLinkComponent,
    argTypes: {
        children: { control: 'text' },
    }
} as ComponentMeta<typeof ExternalLinkComponent>;

const Template: ComponentStory<typeof ExternalLinkComponent> = (args) => 
    <ExternalLinkComponent {...args} />;

export const ExternalLink = Template.bind({});
ExternalLink.args = {
    href: 'https://research.osu.edu',
    children: 'research.osu.edu',
};
