import Link from 'next/link';

export default function Header() {
  return (
    <nav className="navbar navbar-expand mb-3">
      <div className="container d-flex justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="text-link nav-link" aria-label="Home">
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/resume" className="text-link nav-link" aria-label="Resume">
              <span>Resume</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blogs" className="text-link nav-link" aria-label="Blog">
              <span>Blog</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
