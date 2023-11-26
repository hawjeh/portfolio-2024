import HomeIntroText from './HomeIntroText'
import HomePic from './HomePic'

export default function HomeBanner() {
  return (
    <section className="container home-banner">
      <div className="row">
        <div className="col-12 col-md-6 h-100 align-self-center" style={{ zIndex: 1 }}>
          <div className="p-3 ms-md-0 d-flex flex-column align-items-center text-center text-md-start">
            <div className="flex-fill d-block d-md-none">
              <HomePic style="img-fluid home-profile-pic-small" />
            </div>
            <HomeIntroText
              firstLiner='im <span class="text-orange">Haw Jeh</span>'
              secondLiner='Tech · Solution <span class="text-red">Wizard</span> 🚀' />
          </div>
        </div>
        <div className="col-12 col-md-6 d-none d-md-block" style={{ zIndex: 1 }}>
          <HomePic style="img-fluid home-profile-pic" />
        </div>
      </div>
    </section>
  )
}
