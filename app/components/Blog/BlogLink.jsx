import Link from 'next/link';

export default function BlogLink() {
  return (
    <div className="blog-link">
      <Link href="/blogs" className="text-link text-link-button-orange" aria-label="To Read">
        <span>To Read</span>
      </Link>
    </div>
  )
}
