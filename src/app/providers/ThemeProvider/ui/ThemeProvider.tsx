import React, {useMemo} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/ThemeContext';

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'light';

interface ThemeProviderProps {
    children?: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme)

    const defaultProps = React.useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
