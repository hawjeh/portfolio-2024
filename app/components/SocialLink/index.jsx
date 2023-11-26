import Link from 'next/link';

export default function SocialLink() {
  return (
    <section className="social-link">
      <div className="icon-group">
        <Link href="https://linkedin.com/in/hawjeh" rel="noopener noreferrer" target="_blank" aria-label="hawjeh-linkedin">
          <i className="bi bi-linkedin me-3" alt="hawjeh-linkedin"></i>
        </Link>
        <Link href="https://github.com/hawjeh" rel="noopener noreferrer" target="_blank" aria-label="hawjeh-github">
          <i className="bi bi-github me-3" alt="hawjeh-github"></i>
        </Link>
        <Link href="https://facebook.com/HawJeh/" rel="noopener noreferrer" target="_blank" aria-label="hawjeh-facebook">
          <i className="bi bi-facebook me-3" alt="hawjeh-facebook"></i>
        </Link>
        <Link href="https://twitter.com/hawjeh" rel="noopener noreferrer" target="_blank" aria-label="hawjeh-twitter">
          <i className="bi bi-twitter-x me-3" alt="hawjeh-twitter"></i>
        </Link>
        <Link href="https://instagram.com/hawjeh/" rel="noopener noreferrer" target="_blank" aria-label="hawjeh-instagram">
          <i className="bi bi-instagram me-3" alt="hawjeh-instagram"></i>
        </Link>
      </div>
    </section>
  )
}
