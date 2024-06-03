import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import { render as rtlRender } from '@testing-library/react'
import store from 'src/store'
import i18n from 'src/i18n'

export const render = (ui: ReactNode, { ...renderOptions } = {}) => {
  const Wrapper = (props: { children: ReactNode }) => {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}
