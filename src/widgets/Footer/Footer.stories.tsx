import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from './Footer'

export default {
    title: 'widgets/Footer',
    component: Footer,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof Footer>

Primary.args = {}
