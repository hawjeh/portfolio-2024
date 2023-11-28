import Link from 'next/link';

export default function ResumeNav() {
  return (
    <div className="resume-nav">
      <Link href="#experience" className="text-link" aria-label="Experience">
        <span>Experience</span>
      </Link>
      <span> | </span>
      <Link href="#education" className="text-link" aria-label="Education">
        <span>Education</span>
      </Link>
      <span> | </span>
      <Link href="#tools" className="text-link" aria-label="Tools">
        <span>Tools</span>
      </Link>
      <span> | </span>
      <Link href="#achievements" className="text-link" aria-label="Achievements">
        <span>Achievements</span>
      </Link>
      <span> | </span>
      <Link href="#projects" className="text-link" aria-label="Projects">
        <span>Projects</span>
      </Link>
    </div>
  )
}
