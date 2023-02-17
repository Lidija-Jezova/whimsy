import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkVariants } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props

    return (
        <header className={classNames(styles.Navbar, {}, [className])}>
            <div>App name</div>
            <nav>
                <ul>
                    <li>
                        <AppLink to={'/'} variant={AppLinkVariants.LIGHT}>
                            Main
                        </AppLink>
                    </li>
                    <li>
                        <AppLink to={'/about'} variant={AppLinkVariants.LIGHT}>
                            About
                        </AppLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
