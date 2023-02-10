import {ReactNode} from 'react';
import styles from './AppLink.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";

export const AppLinkThemes = {
    PRIMARY: 'primary',
    INVERTED: 'inverted'
} as const

type ValueOf<T> = T[keyof T];
type AppLinkTheme = ValueOf<typeof AppLinkThemes>

interface AppLinkProps extends LinkProps {
    children: ReactNode
    className?: string
    // theme -> variant
    theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {

    const {
        to,
        className,
        theme = AppLinkThemes.PRIMARY,
        children,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};