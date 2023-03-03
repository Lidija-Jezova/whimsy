import styles from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import type { ButtonHTMLAttributes } from 'react'
import type { ValueOf } from 'shared/lib/valueOf/valueOf'

export const ButtonVariants = {
    PRIMARY: 'primary',
    CLEAR: 'clear',
    OUTLINED: 'outlined',
    LIGHT: 'light',
    DARK: 'dark',
    INVERTED: 'inverted'
} as const

type ButtonVariant = ValueOf<typeof ButtonVariants>

export const ButtonSizes = {
    S: 's-size',
    DEFAULT: 'default-size',
    L: 'l-size',
} as const

type ButtonSize = ValueOf<typeof ButtonSizes>

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    size?: ButtonSize
    square?: boolean
    block?: boolean
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        variant = ButtonVariants.PRIMARY,
        size = ButtonSizes.DEFAULT,
        square = false,
        block = false,
        ...otherProps
    } = props

    const modifiers = {
        [styles.square]: square,
        [styles.block]: block,
    }

    const additionalStyles = [className, styles[variant], styles[size]]

    return (
        <button
            className={classNames(styles.Button, modifiers, additionalStyles)}
            {...otherProps}
        >
            {children}
        </button>
    )
}
