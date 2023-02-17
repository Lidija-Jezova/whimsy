import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { Button } from 'shared/ui/Button/Button'
import { LanguageSwitcher } from 'features/LanguageSwitcher/ui/LanguageSwitcher'

interface SidebarProps {
    className?: string
    toggleCollapse: () => void
}

export const Sidebar = (props: SidebarProps) => {
    const { className, toggleCollapse } = props

    return (
        <aside className={classNames(styles.Sidebar, {}, [className])}>
            <div className={styles.content}>
                <Button onClick={toggleCollapse}>Toggle</Button>
                <LanguageSwitcher />
                <nav>
                    <ul>
                        <li>My profile</li>
                        <li>About</li>
                        <li>Articles</li>
                    </ul>
                </nav>
            </div>
            <ThemeSwitcher className={styles.themeSwitcher} />
        </aside>
    )
}
