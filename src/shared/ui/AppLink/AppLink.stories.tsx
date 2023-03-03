import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { AppLink, AppLinkVariants } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof AppLink>

Primary.args = {
    children: 'This is Link',
    variant: AppLinkVariants.PRIMARY,
}

export const Inverted = Template.bind({}) as ComponentStory<typeof AppLink>

Inverted.args = {
    children: 'This is Link',
    variant: AppLinkVariants.INVERTED,
}

export const Light = Template.bind({}) as ComponentStory<typeof AppLink>

Light.args = {
    children: 'This is Link',
    variant: AppLinkVariants.LIGHT,
}

export const Dark = Template.bind({}) as ComponentStory<typeof AppLink>

Dark.args = {
    children: 'This is Link',
    variant: AppLinkVariants.DARK,
}
