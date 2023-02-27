import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { withRouter } from 'storybook-addon-react-router-v6'

export const decorators = [withRouter, StyleDecorator, ThemeDecorator]

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme',
        defaultValue: 'light',
        toolbar: {
            icon: 'lightning',
            items: ['dark', 'light'],
            snowName: true,
            dynamicTitle: true,
        },
    },
}