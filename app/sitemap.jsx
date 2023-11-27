// import { getSortedPostsData } from "../lib/posts";

const URL = "https://hawjeh.com";

export default async function sitemap() {
  // const posts = getSortedPostsData.map(({ id, date }) => ({
  //   url: `${URL}/blog/${id}`,
  //   lastModified: date,
  // }));

  const routes = ["", "/resume"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    priority: 1.0
  }));

  // return [...routes, ...posts];
  return [...routes];
}
