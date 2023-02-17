declare module '*.css'
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.svg' {
    const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default SVG
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const __IS_DEV__: boolean