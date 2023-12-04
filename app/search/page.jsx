import Profile from '../assets/imgs/cartoon.jpg'
import Search from '../components/Search';

export const metadata = {
  title: 'Haw Jeh | Search',
  description: 'Haw Jeh - Solution Whiz - Search',
  openGraph: {
    title: 'Haw Jeh | Search',
    description: 'Haw Jeh - Solution Whiz - Search',
    images: [
      {
        url: Profile.src
      }
    ],
  }
}

export default function SearchPage() {
  return (
    <main>
      <Search />
    </main>
  )
}
