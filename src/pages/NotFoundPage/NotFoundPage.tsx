import { useTranslation } from 'react-i18next'
import PageLayout from 'src/layouts/PageLayout'

const NotFoundPage = () => {
  const { t } = useTranslation('not-found-page')

  return <PageLayout>{t`page-not-found`}</PageLayout>
}

export default NotFoundPage
