import NavBar from '@/components/NavBar'
import { quicksand } from '@/lib/fonts'

export default function Layout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <NavBar pathname='Contact' />
      <body>{children}</body>
    </html>
  )
}