import { Outlet } from 'react-router'

import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function SiteLayout() {
  return (
    <div className="flex min-h-screen min-h-dvh flex-col bg-background text-foreground">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
