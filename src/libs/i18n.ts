import React from 'react'
import { useTranslation } from 'react-i18next'

export const useTranslator = (namespace?: string) => {
  const { t } = useTranslation(namespace)

  return React.useCallback(
    (key: string | ReadonlyArray<string>, params: Record<string, unknown> = {}): string => {
      const str = [key].flat().join('')
      return t(str, params)
    },
    [t]
  )
}
