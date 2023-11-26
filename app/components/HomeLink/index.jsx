import Link from 'next/link';

export default function HomeLink() {
  return (
    <div className="home-link">
      <Link href="/" aria-label="hawjeh-home">
        <span>Go Back</span>
      </Link>
    </div>
  )
}
