import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q071PHWZBD" type="text-javascript" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-Q071PHWZBD');
        `}
      </Script>
    </>
  )
}