import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import ScrollToTop from '../../components/Scroller/ScrollToTop';
import Footer from '../../components/Footer';
import { CacheBlogPosts, CacheBlogPost } from '../../components/Blog/BlogHelper';
import ShareThis from '@/app/components/Blog/ShareThis';

export async function generateMetadata({ params }) {
  const posts = CacheBlogPosts(params.slug);
  // 404
  if (!posts || posts.length === 0) {
    return {};
  }

  const blogPost = CacheBlogPost(params.slug);

  return {
    title: 'Haw Jeh | ' + blogPost.data.title,
    description: 'Haw Jeh - Blog - ' + blogPost.data.description,
    keywords: 'Haw Jeh, Blog, ' + blogPost.data.keyword,
    openGraph: {
      title: 'Haw Jeh | ' + blogPost.data.title,
      description: 'Haw Jeh - Blog - ' + blogPost.data.description,
      images: [
        {
          url: blogPost.data.thumbnail
        }
      ],
    },
    charset: 'utf-8'
  }
}

export default async function BlogPost({ params }) {
  const posts = CacheBlogPosts(params.slug);

  // 404
  if (!posts || posts.length === 0) {
    notFound();
  }

  const blogPost = CacheBlogPost(params.slug);

  return (
    <main>
      <Header />
      <section className="container blog-post">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1>{blogPost.data.title}</h1>
            <p>{blogPost.data.category} | {blogPost.data.keyword} | {blogPost.data.date}</p>
          </div>
          <div className="col-12 offset-lg-2 col-lg-8 wrapper">
            <MDXRemote source={blogPost.content} />            
          </div>
        </div>
      </section>
      <ShareThis />
      <ScrollToTop />
      <Footer showSocialLink={true} />
    </main>
  )
}