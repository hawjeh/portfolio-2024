import Link from 'next/link';
import SocialLink from '../SocialLink';
import Co2CarbonEmission from '../Green/Co2CarbonEmission';

export default function Footer({ showSocialLink }) {
  return (
    <section className="footer">
      <div className="d-flex flex-column align-items-center py-5">
        <div className="flex-fill text-center" style={{ zIndex: 1 }}>
          <Link href="/" className="text-link opacity-100" aria-label="hawjeh">
            <b className="text-orange">hawjeh </b>
          </Link>
          <i className="bi bi-c-circle"></i> {(new Date().getFullYear())} all right reserve.
          <Co2CarbonEmission />
        </div>
        {
          showSocialLink && (
            <div className="flex-fill mt-3" style={{ zIndex: 1 }}>
              <SocialLink />
            </div>
          )
        }
      </div>
    </section>
  )
}
