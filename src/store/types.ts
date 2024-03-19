export type State = {
  token: string
}

export type SignInAction = {
  type: 'SIGN-IN'
  payload: {
    token: string
  }
}

export type SignOutAction = {
  type: 'SIGN-OUT'
}

export type Action = SignInAction | SignOutAction
