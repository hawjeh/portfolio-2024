import SocialLink from '../SocialLink';

export default function Footer({ showSocialLink }) {
  return (
    <section className="footer">
      <div className="d-flex flex-column align-items-center py-5">
        <div className="flex-fill" style={{ zIndex: 1 }}>
          <b className="text-orange">hawjeh</b> <i className="bi bi-c-circle"></i> {(new Date().getFullYear())} all right reserve.
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
