import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import NotFoundPage from './NotFoundPage'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof NotFoundPage>

Primary.args = {}