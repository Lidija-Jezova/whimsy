import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import MainPage from './MainPage'

export default {
    title: 'pages/MainPage',
    component: MainPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof MainPage>

Primary.args = {}