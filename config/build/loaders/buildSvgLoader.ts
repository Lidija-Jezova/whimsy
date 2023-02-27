export const BuildSvgLoader = () => {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
}