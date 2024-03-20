import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadersAddAction, LoadersRemoveAction, State } from 'src/store/types'
import { useNotification } from './notifications'

export const useLoader = () => {
  const dispatch = useDispatch()
  const { loaders } = useSelector((state: State) => state)
  const addLoader = React.useCallback(() => dispatch<LoadersAddAction>({ type: 'LOADERS-ADD' }), [dispatch])
  const removeLoader = React.useCallback(() => dispatch<LoadersRemoveAction>({ type: 'LOADERS-REMOVE' }), [dispatch])

  return React.useMemo(
    () => ({
      loading: loaders > 0,
      loaders,
      addLoader,
      removeLoader
    }),
    [loaders, addLoader, removeLoader]
  )
}

export const useRequestLoader = <T extends (..._: any[]) => Promise<any>>(
  callback: T,
  deps: React.DependencyList
): [(..._: Parameters<T>) => Promise<void>, { loading: boolean; value: Awaited<ReturnType<T>> | undefined }] => {
  const { addLoader, removeLoader } = useLoader()
  const { sendNotification } = useNotification()
  const [{ loading, value }, setState] = React.useState<{
    loading: boolean
    value: Awaited<ReturnType<T>> | undefined
  }>({
    loading: false,
    value: undefined
  })

  const fn = React.useCallback(
    async (args: any) => {
      setState((state) => ({ ...state, loading: true }))
      addLoader()
      await callback(args)
        .then((value) => setState(() => ({ loading: false, value })))
        .catch((err) => {
          const message = `${err.message ?? err}`
          sendNotification({ message, severity: 'danger', reason: err })
          console.error(message)
        })
        .finally(() => {
          setState((state) => ({ ...state, loading: false }))
          removeLoader()
        })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [addLoader, removeLoader, sendNotification, ...deps]
  ) as T

  return React.useMemo(() => [fn, { loading, value }], [fn, loading, value])
}

export const usePageLoader = <T extends () => Promise<any>>(callback: T, deps: React.DependencyList) => {
  const { addLoader, removeLoader } = useLoader()
  const { sendNotification } = useNotification()
  const [{ loading, value }, setState] = React.useState<{
    loading: boolean
    value: Awaited<ReturnType<T>> | undefined
  }>({
    loading: true,
    value: undefined
  })

  React.useEffect(() => {
    setState((state) => ({ ...state, loading: true }))
    addLoader()
    callback()
      .then((value) => setState(() => ({ loading: false, value })))
      .catch((err) => {
        const message = `${err.message ?? err}`
        sendNotification({ message, severity: 'danger', reason: err })
        console.error(message)
      })
      .finally(() => {
        setState((state) => ({ ...state, loading: false }))
        removeLoader()
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addLoader, removeLoader, sendNotification, ...deps])

  return React.useMemo(() => ({ loading, value }), [loading, value])
}
