import { Action, State } from './types'

const initState: State = {
  token: ''
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
  }

  return state
}
