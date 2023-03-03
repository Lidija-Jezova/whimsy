import styles from './PageLoader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className } = props

    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
