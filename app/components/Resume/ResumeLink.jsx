import Link from 'next/link';

export default function ResumeLink() {
  return (
    <div className="resume-link">
      <Link href="/resume" className="text-link text-link-button-orange" aria-label="To Learn More">
        <span>To Learn More</span>
      </Link>
    </div>
  )
}
