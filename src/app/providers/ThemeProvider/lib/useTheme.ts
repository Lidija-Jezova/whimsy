import { useContext } from 'react'
import type { Theme } from './ThemeContext'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext'

interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}
