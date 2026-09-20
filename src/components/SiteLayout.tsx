import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileContactBar } from './MobileContactBar'

export function SiteLayout() {
  return (
    <div className="site-frame">
      <Header />
      <main><Outlet /></main>
      <Footer />
      <MobileContactBar />
    </div>
  )
}
