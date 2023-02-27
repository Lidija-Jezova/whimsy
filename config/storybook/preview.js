import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { withRouter } from 'storybook-addon-react-router-v6'
import { withThemes } from 'storybook-addon-themes'

export const decorators = [withRouter, StyleDecorator, ThemeDecorator]

// export const parameters = {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//         matchers: {
//             color: /(background|color)$/i,
//             date: /Date$/,
//         },
//     },
//     themes: {
//         default: 'light',
//         list: [
//             { name: 'light', class: ['light'] },
//             { name: 'dark', class: ['dark'] },
//         ],
//     },
// }

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
