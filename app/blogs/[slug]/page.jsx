import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Favicon from '../../assets/imgs/favicon.png';
import Header from '../../components/Header';
import ScrollToTop from '../../components/Scroller/ScrollToTop';
import Footer from '../../components/Footer';
import { CacheBlogPosts, CacheBlogPost, GetBlogPost } from '../../components/Blog/BlogHelper';
import ShareThis from '@/app/components/Blog/ShareThis';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posts = CacheBlogPosts(slug);
  // 404
  if (!posts || posts.length === 0) {
    return {};
  }

  const blogPost = CacheBlogPost(slug);

  const gTitle = 'Haw Jeh | ' + blogPost.data.title;
  const gLink = 'https://hawjeh.com/blogs/' + slug;
  const gDescription = blogPost.data.description;
  const gKeywords = blogPost.data.keywords;
  const gImage = 'https://hawjeh.com' + blogPost.data.thumbnail;

  return {
    title: gTitle,
    description: gDescription,
    keywords: gKeywords,
    metadataBase: new URL(gLink),
    openGraph: {
      title: gTitle,
      description: gDescription,
      url: gLink,
      type: 'website',
      images: [
        {
          url: gImage,
          width: 800,
          height: 600,
          alt: gTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: gTitle,
      description: gDescription,
      images: [gImage],
    },
    icons: {
      icon: Favicon.src,
    },
    charset: 'utf-8'
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const posts = CacheBlogPosts(slug);

  // 404
  if (!posts || posts.length === 0) {
    notFound();
  }

  const blogPost = CacheBlogPost(slug);

  return (
    <main>
      <Header />
      <section className="container blog-post">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1>{blogPost.data.title}</h1>
            <p>{blogPost.data.category} | {blogPost.data.date}</p>
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