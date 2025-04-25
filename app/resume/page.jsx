import Resume from '../components/Resume';
import { generateMetadataHelper } from '../helper';

export const metadata = generateMetadataHelper('Resume', 'resume');

export default function ResumePage() {
  return (
    <main>
      <Resume />
    </main>
  )
}
