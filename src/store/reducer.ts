import { Action, State } from './types'

const initState: State = {
  // auth
  token: '',
  // notifications
  open: false,
  severity: 'info',
  message: '',
  descriptionMessage: undefined,
  reason: undefined,
  // loaders
  loaders: 0,
  setLoaders: () => {}
}

export const reducer = (state = initState, action: Action): State => {
  if (action.type == 'SIGN-IN') {
    const { token } = action.payload
    return {
      ...state,
      token
    }
  } else if (action.type == 'SIGN-OUT') {
    return {
      ...state,
      token: ''
    }
  } else if (action.type == 'LOADERS-ADD') {
    return {
      ...state,
      loaders: state.loaders + 1
    }
  } else if (action.type == 'LOADERS-REMOVE') {
    return {
      ...state,
      loaders: Math.max(0, state.loaders - 1)
    }
  }

  return state
}
