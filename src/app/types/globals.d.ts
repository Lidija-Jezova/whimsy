declare module '*.css'
declare module '*.scss'

declare module "*.svg" {
    const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default SVG;
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
