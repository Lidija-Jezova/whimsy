import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Sidebar } from './Sidebar'

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof Sidebar>

Primary.args = {}
