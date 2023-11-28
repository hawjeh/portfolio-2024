import Link from 'next/link';

export default function ResumeNav() {
  return (
    <div className="resume-nav">
      <Link href="#experience" className="text-link" aria-label="hawjeh-resume-experience">
        <span>Experience</span>
      </Link>
      <span> | </span>
      <Link href="#education" className="text-link" aria-label="hawjeh-resume-education">
        <span>Education</span>
      </Link>
      <span> | </span>
      <Link href="#tools" className="text-link" aria-label="hawjeh-resume-tools">
        <span>Tools</span>
      </Link>
      <span> | </span>
      <Link href="#achievements" className="text-link" aria-label="hawjeh-resume-achievements">
        <span>Achievements</span>
      </Link>
      <span> | </span>
      <Link href="#projects" className="text-link" aria-label="hawjeh-resume-projects">
        <span>Projects</span>
      </Link>
    </div>
  )
}
