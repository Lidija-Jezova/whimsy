import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props

    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            variant={'clear'}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === 'light' ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
