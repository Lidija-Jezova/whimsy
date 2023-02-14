import {ReactNode} from 'react';
import styles from './AppLink.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";
import {ValueOf} from "shared/lib/valueOf/valueOf";

export const AppLinkVariants = {
    PRIMARY: 'primary',
    INVERTED: 'inverted',
    LIGHT: 'light',
    DARK: 'dark',
} as const

type AppLinkVariant = ValueOf<typeof AppLinkVariants>

interface AppLinkProps extends LinkProps {
    children: ReactNode
    className?: string
    variant?: AppLinkVariant
}

export const AppLink = (props: AppLinkProps) => {

    const {
        to,
        className,
        variant = AppLinkVariants.PRIMARY,
        children,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};