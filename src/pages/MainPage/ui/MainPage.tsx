import React from 'react'
import { useTranslation } from 'react-i18next'
import { Loader } from 'shared/ui/Loader/Loader'

const MainPage = () => {
    const { t } = useTranslation('main')

    return <div>{t('Main page')}</div>
}

export default MainPage
