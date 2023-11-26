import Profile from '../assets/imgs/cartoon.jpg'
import Resume from '../components/Resume';

export const metadata = {
  title: 'Haw Jeh | Resume',
  description: 'Haw Jeh - Solution Whiz - Resume',
  openGraph: {
    title: 'Haw Jeh | Page Not Found',
    description: 'Haw Jeh - Solution Whiz - Resume',
    images: [
      {
        url: Profile.src
      }
    ],
  }
}

export default function ResumePage() {
  return (
    <main>
      <Resume />
    </main>
  )
}
