import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { LanguageSwitcher } from './LanguageSwitcher'

export default {
    title: 'features/LanguageSwitcher',
    component: LanguageSwitcher,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof LanguageSwitcher>

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => <LanguageSwitcher {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof LanguageSwitcher>

Primary.args = {}
