import Header from "../Header";
import Footer from "../Footer";
import GoogleCustomSearch from "../Google/GoogleCustomSearch";

export default function Search() {
  return (
    <>
      <Header />
      <section className="container search">
        <GoogleCustomSearch />
      </section>
      <Footer showSocialLink={true} />
    </>
  )
}
