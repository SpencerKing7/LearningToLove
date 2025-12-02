import { ReactNode } from 'react'
import Navbar from './Navbar.tsx'
import Footer from './Footer.tsx'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
