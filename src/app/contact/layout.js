import { Quicksand } from 'next/font/google'
import NavBar from '@/components/NavBar'

const quicksand = Quicksand({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <NavBar pathname='Contact' />
      <body>{children}</body>
    </html>
  )
}