import { describe, expect, test } from 'vitest'
import { screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { render } from 'src/libs/tests-utils'
import HomePage from './HomePage'

describe('HomePage tests', () => {
  test('Should containt results 1', async () => {
    await act(async () => render(<HomePage />))

    const results = screen.getByTestId('results')
    const items = results.querySelectorAll('tbody > tr')
    expect(items.length).toBe(10)
  })
})
