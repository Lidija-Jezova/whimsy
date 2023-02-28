import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import {Button, ButtonSizes, ButtonVariants} from './Button'

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

export const Small = Template.bind({}) as ComponentStory<typeof Button>

Small.args = {
    children: 'Text',
    size: ButtonSizes.S
}

export const Large = Template.bind({}) as ComponentStory<typeof Button>

Large.args = {
    children: 'Text',
    size: ButtonSizes.L
}

export const Square = Template.bind({}) as ComponentStory<typeof Button>

Square.args = {
    children: 'Text',
    square: true
}

export const SquareSizeS = Template.bind({}) as ComponentStory<typeof Button>

SquareSizeS.args = {
    children: 'Text',
    square: true,
    size: ButtonSizes.S
}

export const SquareSizeL = Template.bind({}) as ComponentStory<typeof Button>

SquareSizeL.args = {
    children: 'Text',
    square: true,
    size: ButtonSizes.L
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

export const Light = Template.bind({}) as ComponentStory<typeof Button>

Light.args = {
    children: 'Text',
    variant: ButtonVariants.LIGHT,
}

export const Dark = Template.bind({}) as ComponentStory<typeof Button>

Dark.args = {
    children: 'Text',
    variant: ButtonVariants.DARK,
}

export const Inverted = Template.bind({}) as ComponentStory<typeof Button>

Inverted.args = {
    children: 'Text',
    variant: ButtonVariants.INVERTED,
}
