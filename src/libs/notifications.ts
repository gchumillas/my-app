import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotificationsCloseAction, NotificationsSetAction, Severity, State } from 'src/store/types'

export const useNotification = () => {
  const dispatch = useDispatch()
  const { open, message, severity, reason, descriptionMessage } = useSelector((state: State) => state)

  const sendNotification = React.useCallback(
    (params: { message: string; descriptionMessage?: string; severity?: Severity; reason?: any }) => {
      const { message, descriptionMessage, severity = 'info', reason } = params
      dispatch<NotificationsSetAction>({
        type: 'NOTIFICATIONS-SET',
        payload: { open: true, message, descriptionMessage, severity, reason }
      })
    },
    [dispatch]
  )

  const closeNotification = React.useCallback(() => {
    dispatch<NotificationsCloseAction>({ type: 'NOTIFICATIONS-CLOSE' })
  }, [dispatch])

  return React.useMemo(
    () => ({
      open,
      message,
      descriptionMessage,
      severity,
      reason,
      sendNotification,
      closeNotification
    }),
    [open, message, severity, reason, sendNotification, closeNotification, descriptionMessage]
  )
}
