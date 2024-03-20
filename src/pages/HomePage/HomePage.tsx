import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePageLoader } from 'src/libs/loaders'
import { Item } from 'src/providers/types'
import { getItems } from 'src/providers/items'
import PageLayout from 'src/layouts/PageLayout'

const HomePage = () => {
  const { t } = useTranslation('home-page')
  const [items, setItems] = useState<Item[]>([])

  usePageLoader(async () => {
    const items = await getItems()
    setItems(items)
  }, [])

  return (
    <PageLayout>
      <table>
        <thead>
          <th>
            <td>{t`id`}</td>
            <td>{t`name`}</td>
            <td>{t`jobTitle`}</td>
            <td>{t`email`}</td>
            <td>{t`country`}</td>
          </th>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.jobTitle}</td>
              <td>{item.email}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageLayout>
  )
}

export default HomePage
