import React, { useMemo } from 'react'
import type { Theme } from '../lib/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext'

const defaultTheme: Theme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light'

interface ThemeProviderProps {
    children?: React.ReactNode
    initialTheme?: Theme
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props

    const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
