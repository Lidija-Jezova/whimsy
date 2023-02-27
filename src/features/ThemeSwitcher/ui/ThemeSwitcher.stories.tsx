import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof ThemeSwitcher>

Primary.args = {}