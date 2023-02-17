import styles from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import type { ButtonHTMLAttributes } from 'react'
import type { ValueOf } from 'shared/lib/valueOf/valueOf'

export const ButtonVariants = {
    CLEAR: 'clear',
} as const

type ButtonVariant = ValueOf<typeof ButtonVariants>

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
}

export const Button = (props: ButtonProps) => {
    const { className, children, variant, ...otherProps } = props

    return (
        <button
            className={classNames(styles.Button, {}, [className, styles[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
