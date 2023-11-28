import { Suspense } from "react";
import Loading from "./components/Loading";

import { Space_Grotesk } from 'next/font/google'
import Favicon from './assets/imgs/favicon.png'
import Profile from './assets/imgs/cartoon.jpg'
import './assets/bootstrap.scss'
import './assets/main.scss'

const inter = Space_Grotesk({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Haw Jeh',
  description: 'Haw Jeh - Solution Whiz - perosnal, portfolio and blogging site',
  keywords: 'Haw Jeh, Portfolio, Software Developer, Software Engineer, Team Lead, Tech Lead, .NET, Solution Architect, Resume, CV, Tech, Solution Whiz, System Thinker, Efficient, Creative, Integrative, Collaborative',
  metadataBase: new URL('https://hawjeh.com'),
  openGraph: {
    title: 'Haw Jeh',
    description: 'Haw Jeh - Solution Whiz - perosnal, portfolio and blogging site',
    images: [
      {
        url: Profile.src
      }
    ],
  },
  charset: 'utf-8'
}

export const viewport = {
  width: 'device-width',
  'initial-scale': '1'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={Favicon.src} />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  )
}
