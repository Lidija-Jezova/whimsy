import styles from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import type { ReactNode } from 'react'
import { useCallback, useEffect } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpened?: boolean
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpened, onClose } = props

    const handleClose = useCallback(() => {
        if (onClose) onClose()
    }, [onClose])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const modifiers: Record<string, boolean> = {
        [styles.opened]: isOpened,
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                handleClose()
            }
        }

        if (isOpened) window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleClose, isOpened])

    return (
        <Portal>
            <div className={classNames(styles.Modal, modifiers, [className])}>
                <div className={styles.overlay} onClick={handleClose}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
