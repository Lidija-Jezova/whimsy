import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import AppLayout from './AppLayout'

export default {
    title: 'shared/AppLayout',
    component: AppLayout,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLayout>

const Template: ComponentStory<typeof AppLayout> = (args) => <AppLayout {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof AppLayout>

Primary.args = {}