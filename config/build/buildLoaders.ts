import type webpack from 'webpack'
import type { BuildOptions } from './types/config'
import {buildStylesLoader} from './loaders/buildStylesLoader';
import {BuildSvgLoader} from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = BuildSvgLoader()

    const stylesLoader = buildStylesLoader(isDev)

    // If we don't use TS, then use babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-typescript'],
                    ['@babel/preset-env', { targets: 'defaults' }],
                    ['@babel/preset-react', { runtime: 'automatic' }],
                ],
            },
        },
    }

    return [
        fileLoader,
        svgLoader,
        // typescriptLoader,
        babelLoader,
        stylesLoader,
    ]
}
