import { GetBlogList } from './components/Blog/BlogHelper';

const URL = "https://www.hawjeh.com";

export default async function sitemap() {
  const today = new Date();
  today.setUTCHours(0,0,0,0);

  const blogsPosts = GetBlogList({}).blogPosts.map(({ slug }) => ({
    url: `${URL}/blogs/${slug}`,
    lastModified: today.toISOString(),
    priority: 1.0
  }));

  const routes = ["", "/resume", "/blogs"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: today.toISOString(),
    priority: 1.0
  }));

  return [...routes, ...blogsPosts];
}
