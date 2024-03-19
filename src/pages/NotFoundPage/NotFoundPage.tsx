import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
  const { t } = useTranslation('not-found-page')

  return <div>{t`page-not-found`}</div>
}

export default NotFoundPage
