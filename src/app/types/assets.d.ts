// Images ====================================================================================================

declare module '*.png' {
    const content: any
    export default content
}

declare module '*.jpg' {
    const content: any
    export default content
}

declare module '*.webp' {
    const content: any
    export default content
}

// SVG ====================================================================================================

declare module '*.svg' {
    import * as React from 'react'

    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
        > & { title?: string }>

    const src: string
    export default src
}
