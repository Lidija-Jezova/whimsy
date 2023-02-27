import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { PageError } from './PageError'

export default {
    title: 'widgets/PageError',
    component: PageError,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof PageError>

Primary.args = {}
