import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { ArticlePage } from './pages/ArticlePage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { GenericServicePage } from './pages/GenericServicePage'
import { MaterialsPage } from './pages/MaterialsPage'
import { MaterialTopicPage } from './pages/MaterialTopicPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ServicesPage } from './pages/ServicesPage'
import { TintingPage } from './pages/TintingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/posluhy" element={<ServicesPage />} />
          <Route path="/posluhy/tonuvannya-avto" element={<TintingPage />} />
          <Route path="/posluhy/:serviceSlug" element={<GenericServicePage />} />
          <Route path="/pro-nas" element={<AboutPage />} />
          <Route path="/kontakty" element={<ContactPage />} />
          <Route path="/materialy" element={<MaterialsPage />} />
          <Route path="/materialy/yak-obrati-tonuvannya" element={<ArticlePage />} />
          <Route path="/materialy/:materialSlug" element={<MaterialTopicPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
