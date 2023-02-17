import styles from './LanguageSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    const { className } = props

    const { t, i18n } = useTranslation()

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'lv' : 'en')
    }

    return (
        <Button
            className={classNames(styles.LanguageSwitcher, {}, [className])}
            variant={'clear'}
            onClick={() => void toggle()}
        >
            {t('Language')}
        </Button>
    )
}
