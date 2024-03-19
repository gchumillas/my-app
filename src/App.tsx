import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import i18n from './i18n'

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
