import Profile from './assets/imgs/cartoon.jpg';
import HomeLink from './components/HomeLink';
import ResumeLink from './components/Resume/ResumeLink';

export const metadata = {
    title: 'Haw Jeh | Page Not Found',
    description: 'Haw Jeh - Solution Whiz - Page Not Found',
    openGraph: {
        title: 'Haw Jeh | Page Not Found',
        description: 'Haw Jeh - Solution Whiz - Page Not Found',
        images: [
            {
                url: Profile.src
            }
        ],
    }
}

export default function NotFound() {
    return (
        <main className="d-flex flex-column justify-content-center align-items-center">
            <h2>Bro, Page Not Found!</h2>
            <div className="d-flex flex-row">
                <div className="m-3">
                    <HomeLink />
                </div>
                <div className="m-3">
                    <ResumeLink />
                </div>
            </div>
        </main>
    )
}
