import Script from 'next/script';

export default function ShareThis() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Script src="https://platform-api.sharethis.com/js/sharethis.js#property=642962586134c500128ce940&product=inline-share-buttons" type="text-javascript" async />
      <div className="sharethis-inline-share-buttons"></div>
    </div>
  )
}
