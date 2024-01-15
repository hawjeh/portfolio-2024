import { GetBlogList } from './components/Blog/BlogHelper';

const URL = "https://www.hawjeh.com";

export default async function sitemap() {
  const blogsPosts = GetBlogList({}).blogPosts.map(({ slug, date }) => ({
    url: `${URL}/blogs/${slug}`,
    lastModified: new Date(date).toISOString(),
    priority: 0.7
  }));

  const blogPosts = GetBlogList({}).blogPosts.map(({ slug, date }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: new Date(date).toISOString(),
    priority: 0.7
  }));

  const routes = ["", "/resume", "/blogs"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    priority: 1.0
  }));

  return [...routes, ...blogsPosts, ...blogPosts];
}
