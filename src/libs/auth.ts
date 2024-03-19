import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignInAction, SignOutAction, State } from 'src/store/types'

export const useAuth = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: State) => state.token)

  const signIn = useCallback(
    (token: string) => {
      dispatch<SignInAction>({ type: 'SIGN-IN', payload: { token } })
    },
    [dispatch]
  )

  const signOut = useCallback(() => {
    dispatch<SignOutAction>({ type: 'SIGN-OUT' })
  }, [dispatch])

  return useMemo(() => ({ token, signIn, signOut }), [token, signIn, signOut])
}
