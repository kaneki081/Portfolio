import NavBar from '@/components/NavBar'
import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { Josefin_Sans } from 'next/font/google'
import FootBar from '@/components/FootBar'

const inter = Josefin_Sans({ 
  subsets: ['latin'],
  weight: "400" })

export const metadata: Metadata = {
  title: 'Jose Acebuche',
  description: 'My Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:dark light dark:bg-black bg-white`}>
          <div className='min-h-screen flex flex-col items-center justify-between  
           gap-4 scroll-smooth relative'>
            <NavBar/>
            {children}
            <FootBar/>    
          </div>
        <Toaster position='top-center'/>
      </body>
    </html>
  )
}
