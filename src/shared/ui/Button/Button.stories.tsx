import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonVariants } from './Button'

export default {
    title: 'shared/Button',
    component: Button,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof Button>

Primary.args = {
    children: 'Text',
}

export const Clear = Template.bind({}) as ComponentStory<typeof Button>

Clear.args = {
    children: 'Text',
    variant: ButtonVariants.CLEAR,
}

export const Outlined = Template.bind({}) as ComponentStory<typeof Button>

Outlined.args = {
    children: 'Text',
    variant: ButtonVariants.OUTLINED,
}
