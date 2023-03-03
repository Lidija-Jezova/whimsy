import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props

    const { t } = useTranslation()

    return <div className={classNames('', {}, [className])}>{t('pageNotFound')}</div>
}

export default NotFoundPage
