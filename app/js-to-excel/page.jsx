import Profile from '../assets/imgs/cartoon.jpg'
import JsToExcel from '../components/JsToExcel';

export const metadata = {
  title: 'Haw Jeh | JS to Excel',
  description: 'Haw Jeh - Solution Whiz - Demo -JS to Excel',
  openGraph: {
    title: 'Haw Jeh | JS to Excel',
    description: 'Haw Jeh - Solution Whiz - Demo - JS to Excel',
    images: [
      {
        url: Profile.src
      }
    ],
  }
}

export default function JsToExcelPage() {
  return (
    <main>
      <JsToExcel />
    </main>
  )
}
