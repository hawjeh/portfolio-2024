import IntroText from './IntroText'
import IntroPic from './IntroPic'

export default function IntroBanner() {
  return (
    <section className="container h-100 intro-banner">
      <div className="row pt-3">
        <div className="col-12 col-md-6 h-100 align-self-center" style={{ zIndex: 1 }}>
          <div className="p-3 ms-md-0 d-flex flex-column align-items-center text-center text-md-start">
            <div className="flex-fill d-block d-md-none">
              <IntroPic style="img-fluid intro-profile-pic-small" />
            </div>
            <IntroText
              firstLiner='im <span class="text-orange">Haw Jeh</span>'
              secondLiner='Tech · Solution <span class="text-red">Wizard</span> 🚀' />
          </div>
        </div>
        <div className="col-12 col-md-6 d-none d-md-block" style={{ zIndex: 1 }}>
          <IntroPic style="img-fluid intro-profile-pic" />
        </div>
      </div>
    </section>
  )
}
