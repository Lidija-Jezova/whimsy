import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import AboutPage from './AboutPage'

export default {
    title: 'pages/AboutPage',
    component: AboutPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof AboutPage>

Primary.args = {}