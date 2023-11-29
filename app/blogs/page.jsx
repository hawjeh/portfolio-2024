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
  const blogs = GetBlogList(searchParams);
  
  return (
    <main>
      <Header />
      <section className="container blogs">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand">
              Category: 
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href={`/blogs`} className="text-link nav-link" aria-label="All">
                    <span>All</span>
                  </Link>
                </li>
                {
                  blogs && blogs.blogPostsCategory.map((category, index) => (
                    <li className="nav-item" key={index}>
                      <Link href={`/blogs?category=${category}`} className="text-link nav-link" aria-label={category}>
                        <span>{category}</span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
        <div className="row">
          {
            blogs && blogs.blogPosts.map((blog, index) => (
              <div className="col-12 col-sm-5 col-md-5 col-lg-3 mb-3" key={index}>
                <Link href={`/blogs/${blog.slug}`} className="text-link" rel="noopener noreferrer" target="_blank" aria-label={blog.title}>
                  <div className="card align-items-center">
                    <img src={blog.thumbnail} alt={blog.title} className="card-img-top img-fluid" loading="lazy" />
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
