import { sleep } from 'src/libs/utils'
import { faker } from '@faker-js/faker'
import { Item } from './types'

export const getItems = async (): Promise<Item[]> => {
  return Promise.resolve(
    [...Array(10).keys()].map((i) => ({
      id: `${i}`.padStart(3, '0'),
      name: faker.person.fullName(),
      jobTitle: faker.person.jobTitle(),
      email: faker.internet.email()
    }))
  )
}

export type DeleteItemParams = {
  id: string
}
export const deleteItem = async (_: DeleteItemParams): Promise<void> => {
  await sleep(5)
}
