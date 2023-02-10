import styles from './Navbar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {

    const {className} = props

    return (
        <header className={classNames(styles.Navbar)}>
            <div>App name</div>
            <nav>
                <ul>
                    <li><AppLink to={'/'} theme={AppLinkThemes.INVERTED}>Main</AppLink></li>
                    <li><AppLink to={'/about'} theme={AppLinkThemes.INVERTED}>About</AppLink></li>
                </ul>
            </nav>
        </header>
    )
        ;
};