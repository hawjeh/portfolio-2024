import Link from 'next/link';

export default function ResumeLink() {
  return (
    <div className="resume-link">
      <Link href="/resume" aria-label="hawjeh-resume">
        <span>To Learn More</span>
      </Link>
    </div>
  )
}
