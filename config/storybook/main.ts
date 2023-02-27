import type webpack from 'webpack'
import type { RuleSetRule } from 'webpack'
import path from 'path'
import { buildStylesLoader } from '../build/loaders/buildStylesLoader'
import {BuildSvgLoader} from '../build/loaders/buildSvgLoader';

module.exports = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-react-router-v6'
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: (config: webpack.Configuration) => {
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, '../../src'),
        ]

        config.module.rules.push(buildStylesLoader(true))

        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
                return { ...rule, exclude: /\.svg$/i }
            }

            return rule
        })

        config.module.rules.push(BuildSvgLoader())

        return config
    },
}
