import { BrowserRouter, Route, Routes } from 'react-router'

import { AetheraHero } from './components/aethera-hero'
import { RouteEffects } from './components/route-effects'
import { SiteLayout } from './components/site-layout'
import { AboutPage } from './pages/about-page'
import { NotFoundPage } from './pages/not-found-page'
import { StudioPage } from './pages/studio-page'

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route index element={<AetheraHero />} />
        <Route element={<SiteLayout />}>
          <Route path="studio" element={<StudioPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
