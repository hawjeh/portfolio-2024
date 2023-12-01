import Header from "../Header";
import Footer from "../Footer";
import JsToExcelTable from './JsToExcelTable';

export default function JsToExcel() {
  return (
    <>
      <Header />
      <section className="container js-to-excel">
        <JsToExcelTable />
      </section>
      <Footer showSocialLink={true} />
    </>
  )
}
