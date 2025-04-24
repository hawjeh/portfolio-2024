import Profile from '../assets/imgs/cartoon.jpg'
import Header from '../components/Header';
import ScrollToTop from '../components/Scroller/ScrollToTop';
import Footer from '../components/Footer';
import { GetBlogList } from '../components/Blog/BlogHelper';
import Link from 'next/link';

export const metadata = {
  title: 'Haw Jeh | Blogs',
  description: 'Haw Jeh - Solution Whiz - Blogs',
  openGraph: {
    title: 'Haw Jeh | Blogs',
    description: 'Haw Jeh - Solution Whiz - Blogs',
    images: [
      {
        url: Profile.src
      }
    ],
  }
}

export default function BlogPage({ searchParams }) {
  const params = searchParams || {};
  const blogs = GetBlogList(params);

  return (
    <main>
      <Header />
      <section className="container blogs">
        <div className="row mb-3">
          <div className="col-12">
            <div className="d-flex flex-wrap">
              <p className="me-3">Category:</p>
              <Link href={`/blogs`} className="text-link nav-link me-2 mb-2" aria-label="All">
                <span>All</span>
              </Link>
              {
                blogs && blogs.blogPostsCategory.map((category, index) => (
                  <Link href={`/blogs?category=${category}`} className="text-link nav-link me-2 mb-2" aria-label={category} key={index}>
                    <span>{category}</span>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
        <div className="row">
          {
            blogs && blogs.blogPosts.map((blog, index) => (
              <div className="col-12 col-sm-5 col-md-5 col-lg-3 mb-3" key={index}>
                <Link href={`/blogs/${blog.slug}`} className="text-link" aria-label={blog.title}>
                  <div className="card align-items-center">
                    <img src={blog.thumbnail} alt={blog.title} className="card-img-top img-fluid" loading="lazy" />
                    <span className="text-smaller">{blog.date}</span>
                    <div className="card-body text-center">
                      <span>{blog.title}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </section>
      <ScrollToTop />
      <Footer showSocialLink={true} />
    </main>
  )
}
