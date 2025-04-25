import Search from '../components/Search';

import { generateMetadataHelper } from '../helper';

export const metadata = generateMetadataHelper('Search', 'search');

export default function SearchPage() {
  return (
    <main>
      <Search />
    </main>
  )
}
