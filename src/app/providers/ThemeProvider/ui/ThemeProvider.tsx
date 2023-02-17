import React, { useMemo } from 'react'
import type { Theme } from '../lib/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext'

const defaultTheme: Theme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light'

interface ThemeProviderProps {
    children?: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
