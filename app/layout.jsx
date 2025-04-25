import { Suspense } from "react";
import Loading from "./components/Loading";
import './assets/bootstrap.scss'
import './assets/main.scss'
import { Space_Grotesk } from 'next/font/google'
import GoogleAnalytics from "./components/Google/GoogleAnalytics";
import { generateMetadataHelper } from './helper';

const inter = Space_Grotesk({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export const metadata = generateMetadataHelper('', '');

export const viewport = {
  width: 'device-width',
  'initial-scale': '1'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  )
}
