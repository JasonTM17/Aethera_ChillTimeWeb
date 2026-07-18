import { BrowserRouter, Route, Routes } from 'react-router'

import { AetheraHero } from './components/aethera-hero'
import { RouteEffects } from './components/route-effects'
import { SiteLayout } from './components/site-layout'
import { AboutPage } from './pages/about-page'
import { JournalPage } from './pages/journal-page'
import { NotFoundPage } from './pages/not-found-page'
import { ReachUsPage } from './pages/reach-us-page'
import { StudioPage } from './pages/studio-page'

export function AppRoutes() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route index element={<AetheraHero />} />
        <Route element={<SiteLayout />}>
          <Route path="studio" element={<StudioPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="reach-us" element={<ReachUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
