// eslint-disable-next-line consistent-default-export-name/default-import-match-filename
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { GlobalStyles } from 'twin.macro'
import store from './store'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
)
