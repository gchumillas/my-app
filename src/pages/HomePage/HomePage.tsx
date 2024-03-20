import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePageLoader } from 'src/libs/loaders'
import { Item } from 'src/providers/types'
import { getItems } from 'src/providers/items'
import PageLayout from 'src/layouts/PageLayout'
import DataTable from 'src/components/DataTable'

const HomePage = () => {
  const { t } = useTranslation('home-page')
  const [items, setItems] = useState<Item[]>([])

  usePageLoader(async () => {
    const items = await getItems()
    setItems(items)
  }, [])

  return (
    <PageLayout>
      <DataTable>
        <thead>
          <tr>
            <th>{t`id`}</th>
            <th>{t`name`}</th>
            <th>{t`jobTitle`}</th>
            <th>{t`email`}</th>
            <th>{t`country`}</th>
          </tr>
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
      </DataTable>
    </PageLayout>
  )
}

export default HomePage
