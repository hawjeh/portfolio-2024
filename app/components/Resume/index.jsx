import Footer from '../Footer'
import ResumeEducation from './ResumeEducation'
import ResumeExperienceV2 from './ResumeExperienceV2'
import ResumeIntro from './ResumeIntro'

export default function Resume() {
  return (
    <>
      <section className="container resume">
        <ResumeIntro />
        <ResumeExperienceV2 />
        <ResumeEducation />
      </section>
      <Footer showSocialLink={true} />
    </>
  )
}
