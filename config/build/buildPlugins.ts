import htmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import type { BuildOptions } from './types/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new htmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        // нативный css браузером обрабатывается параллельно и быстрее, чем код внутри js.
        // А для дев сборки мы этим можем принебречь, так как у нас все в памяти хранится и файлы генерить нет смысла
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ]

    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerPort: 3001 }))
    }

    return plugins
}
