import './globals.css'
import { Quicksand } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Angelo Hague',
  description: 'Computer Science Graduate and Web Designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <NavBar />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
