import fs from 'fs'
import path from 'path'
import { cache } from 'react';
import matter from 'gray-matter'

export const POSTS_PATH = path.join(process.cwd(), 'app/data/blogs')

const CacheBlogPosts = cache(slug => {
  const posts = fs.readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => path.replace(/\.mdx?$/, ''))
    .filter((title) => title === slug);
  return posts;
});

const CacheBlogPost = cache(slug => {
  const content = GetBlogPost(slug);
  return content;
});

const GetBlogPost = (slug) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf-8');
  return matter(source);
}

const GetBlogList = ({ category }) => {
  const posts = fs.readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fName) => fName.replace('.mdx', ''));

  const blogPosts = posts.map((post) => {
    const blogPost = GetBlogPost(post);
    return blogPost.data;
  });

  return {
    blogPosts: blogPosts.filter((post) => {
      if (category) {
        if (post.category.toLowerCase() === category.toLowerCase()) {
          return true;
        } else {
          return false
        }
      }
      return true;
    }).sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    }),
    blogPostsCategory: blogPosts.map((post) => post.category).sort((a, b) => a.localeCompare(b)).filter((value, index, array) => array.indexOf(value) === index)
  };
}


export { CacheBlogPosts, CacheBlogPost, GetBlogList };