import React from 'react'
// eslint-disable-next-line consistent-default-export-name/default-import-match-filename
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from 'twin.macro'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
