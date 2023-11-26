import Footer from '../Footer'
import HomeBanner from '../HomeBanner'
import LinkParticles from '../LinkParticles'

export default function HomePage() {
  return (
    <>
      <LinkParticles />
      <HomeBanner />
      <Footer showSocialLink={false} />
    </>
  )
}
