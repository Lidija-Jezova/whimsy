import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button/Button'
import { LanguageSwitcher } from 'features/LanguageSwitcher/ui/LanguageSwitcher'
import ArrowRight from 'shared/assets/icons/arrow-right.svg'
import ArrowLeft from 'shared/assets/icons/arrow-left.svg'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import { AppLink, AppLinkVariants } from 'shared/ui/AppLink/AppLink'
import { AppRoutes } from 'app/providers/router/config/routeConfig'

interface SidebarProps {
    className?: string
    collapsed: boolean
    toggleCollapse: () => void
}

export const Sidebar = (props: SidebarProps) => {
    const { className, collapsed, toggleCollapse } = props

    return (
        <aside
            data-testid='sidebar'
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <div className={styles.content}>
                <nav className={styles.navigation}>
                    <ul className={styles.list}>
                        <li>
                            <AppLink
                                className={`${styles.link} ${styles.home}`}
                                to={AppRoutes.MAIN}
                                variant={AppLinkVariants.LIGHT}
                            >
                                <HomeIcon />
                                <span>Home</span>
                            </AppLink>
                        </li>
                        <li>
                            <AppLink
                                className={`${styles.link} ${styles.about}`}
                                to={AppRoutes.ABOUT}
                                variant={AppLinkVariants.LIGHT}
                            >
                                <AboutIcon/>
                                <span>About</span>
                            </AppLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.bottom}>
                <ThemeSwitcher className={styles.themeSwitcher} />
                <LanguageSwitcher />
                <Button
                    className={styles.collapseBtn}
                    data-testid='sidebar-toggle'
                    onClick={toggleCollapse}
                    variant={ButtonVariants.INVERTED}
                    square
                    size={ButtonSizes.L}
                >
                    {collapsed ? <ArrowRight /> : <ArrowLeft />}
                </Button>
            </div>
        </aside>
    )
}
