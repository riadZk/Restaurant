import './globals.css'
import { Montserrat,East_Sea_Dokdo } from 'next/font/google'
import Navbar from './components/page'

const bodyfonts = Montserrat({ subsets: ['latin'], })

export const metadata = {
  title: 'SavorSphere',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyfonts.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
