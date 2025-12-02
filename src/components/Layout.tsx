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
      {children}
      <Footer />
    </>
  )
}

export default Layout
