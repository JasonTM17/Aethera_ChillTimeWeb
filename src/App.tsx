import { BrowserRouter, Route, Routes } from 'react-router'

import { AetheraHero } from './components/aethera-hero'
import { RouteEffects } from './components/route-effects'
import { SiteLayout } from './components/site-layout'
import { NotFoundPage } from './pages/not-found-page'

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route index element={<AetheraHero />} />
        <Route element={<SiteLayout />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
