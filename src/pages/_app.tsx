import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${roboto.variable} font-sans max-w-[1440px] h-screen m-auto bg-ceu-limpo bg-center bg-cover relative`}>
       <Component {...pageProps} />
    </div>
  )
}