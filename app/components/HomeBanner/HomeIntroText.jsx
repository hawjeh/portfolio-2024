import ResumeLink from '../Resume/ResumeLink';
import SocialLink from '../SocialLink';
import { Oleo_Script } from 'next/font/google';

const inter = Oleo_Script({ weight: ['400'], subsets: ['latin'] })
const mainClassH1 = inter.className + " text-h1"
const mainClassH4 = inter.className + " text-h4"

export default function HomeIntroText({ firstLiner, secondLiner }) {
    return (
        <>
            <div className="flex-fill d-none d-md-block">
                <h1 className={mainClassH1} dangerouslySetInnerHTML={{ __html: firstLiner }}></h1>
                <h2 className="text-h3" dangerouslySetInnerHTML={{ __html: secondLiner }}></h2>
                <SocialLink />
                <ResumeLink />
            </div>
            <div className="flex-fill mt-3 d-block d-md-none">
                <h2 className={mainClassH4} dangerouslySetInnerHTML={{ __html: firstLiner }}></h2>
                <h5 dangerouslySetInnerHTML={{ __html: secondLiner }}></h5>
                <SocialLink />
                <ResumeLink />
            </div>
        </>
    )
}
