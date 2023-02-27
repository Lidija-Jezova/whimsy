import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Navbar } from './Navbar'

export default {
    title: 'widgets/Navbar',
    component: Navbar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof Navbar>

Primary.args = {}
