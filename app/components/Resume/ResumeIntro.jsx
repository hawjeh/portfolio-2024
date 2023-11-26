import HawJeh from '../../assets/imgs/profile.png'
import { Oleo_Script } from 'next/font/google';

const inter = Oleo_Script({ weight: ['400'], subsets: ['latin'] })
const nameClass = inter.className + " text-h4 text-orange"

export default function ResumeIntro() {
  return (
    <div className="row intro">
      <div className="col-12 col-lg-3 offset-lg-1 col-md-4 mb-3">
        <div className="d-flex align-items-center justify-content-center h-100">
          <img
            src={HawJeh.src}
            className="img-fluid intro-img"
            alt="Haw Jeh Picture"
          />
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-8 mb-3">
        <div className="d-flex flex-column text-center text-md-start justify-content-center h-100">
          <h1 className={nameClass}>Haw Jeh</h1>
          <h4>Solution <span className="text-red">Wizard</span> 🚀</h4>
          <p>
            Haw Jeh has unrelenting passion for all things tech. <br />
            He leaves no stone unturned to deliver the best services and solutions.
          </p>
        </div>
      </div>
    </div>
  )
}
