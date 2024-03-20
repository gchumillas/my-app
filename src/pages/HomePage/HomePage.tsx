import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLoader, usePageLoader, useRequestLoader } from 'src/libs/loaders'
import { Item } from 'src/providers/types'
import { deleteItem, getItems } from 'src/providers/items'
import PageLayout from 'src/layouts/PageLayout'
import DataTable from 'src/components/DataTable'
import Button from 'src/components/Button'

const HomePage = () => {
  const { t } = useTranslation('home-page')
  const { loading } = useLoader()
  const [items, setItems] = useState<Item[]>([])

  const [doCreate] = useRequestLoader(async () => {
    alert('Unimplemented')
  }, [])

  const [doEdit] = useRequestLoader(async () => {
    alert('Unimplemented')
  }, [])

  const [doDelete] = useRequestLoader(
    async (id: string) => {
      if (!confirm(t`are you sure?`)) return
      await deleteItem({ id })
      console.log('done!')
    },
    [t]
  )

  usePageLoader(async () => {
    const items = await getItems()
    setItems(items)
  }, [])

  return (
    <PageLayout>
      <p className="mb-4">{loading ? t`processing-request` : <>&nbsp;</>}</p>
      <DataTable>
        <thead>
          <tr>
            <th>{t`id`}</th>
            <th>{t`name`}</th>
            <th>{t`jobTitle`}</th>
            <th>{t`email`}</th>
            <th>{t`country`}</th>
            <th>
              <Button disabled={loading} onClick={doCreate} className="text-right">{t`create`}</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.jobTitle}</td>
              <td>{item.email}</td>
              <td>{item.country}</td>
              <td>
                <div className="inline-flex gap-2">
                  <Button disabled={loading} onClick={doEdit}>{t`edit`}</Button>
                  <Button disabled={loading} onClick={() => doDelete(item.id)}>{t`delete`}</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </PageLayout>
  )
}

export default HomePage
