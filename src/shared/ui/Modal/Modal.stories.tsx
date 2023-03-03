import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal } from './Modal'

export default {
    title: 'widgets/Modal',
    component: Modal,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({}) as ComponentStory<typeof Modal>

Primary.args = {
    isOpened: true,
    children: 'Login form'
}
