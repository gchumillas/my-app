export type State = {
  // auth
  token: string
  // notifications
  open: boolean
  severity: Severity
  message: string
  descriptionMessage?: string
  reason?: any
  // loaders
  loaders: number
  setLoaders: (_: (_: number) => number) => void
}

/**
 * Auth
 */

export type SignInAction = {
  type: 'SIGN-IN'
  payload: {
    token: string
  }
}

export type SignOutAction = {
  type: 'SIGN-OUT'
}

/**
 * Notifications
 */

export type Severity = 'info' | 'success' | 'warning' | 'danger'

export type NotificationsSetAction = {
  type: 'NOTIFICATIONS-SET'
  payload: {
    open: boolean
    message: string
    descriptionMessage?: string
    severity?: Severity
    reason?: any
  }
}

export type NotificationsCloseAction = {
  type: 'NOTIFICATIONS-CLOSE'
}

/**
 * Loades
 */

export type LoadersAddAction = {
  type: 'LOADERS-ADD'
}

export type LoadersRemoveAction = {
  type: 'LOADERS-REMOVE'
}

export type Action =
  | SignInAction
  | SignOutAction
  | NotificationsSetAction
  | NotificationsCloseAction
  | LoadersAddAction
  | LoadersRemoveAction
