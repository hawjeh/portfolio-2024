import Footer from "../Footer";
import ResumeAchievement from "./ResumeAchievement";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeIntro from "./ResumeIntro";
import ResumeProject from "./ResumeProject";
import ResumeTool from "./ResumeTool";
import ScrollToTop from "../Scroller/ScrollToTop";

export default function Resume() {
  return (
    <>
      <section className="container resume">
        <ResumeIntro />
        <ResumeExperience />
        <div className="row mb-0 mb-lg-3">
          <ResumeEducation />
          <ResumeTool />
        </div>
        <div className="row mb-0 mb-lg-3">
          <ResumeAchievement />
          <ResumeProject />
        </div>
      </section>
      <ScrollToTop />
      <Footer showSocialLink={true} />
    </>
  )
}
