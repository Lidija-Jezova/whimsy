import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import React, { useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

interface ModalProps {
    className?: string
}

export const Navbar = (props: ModalProps) => {
    const { className } = props

    const [isAuthModal, selIsAuthModal] = useState<boolean>(false)

    const handleToggleModal = () => {
        selIsAuthModal((prev) => !prev)
    }

    return (
        <header className={classNames(styles.Navbar, {}, [className])}>
            <div>App name</div>
            <Button onClick={handleToggleModal}>Log in</Button>
            <Modal isOpened={isAuthModal} onClose={handleToggleModal}></Modal>
        </header>
    )
}
