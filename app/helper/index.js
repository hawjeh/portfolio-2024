import Favicon from '../assets/imgs/favicon.png';
import Profile from '../assets/imgs/cartoon.jpg';

const generateMetadataHelper = (title, url) => {

  const baseTitle = 'Haw Jeh - Solution Whiz';
  const gTitle = title ? 'Haw Jeh | ' + title : baseTitle;

  const baseLink = 'https://hawjeh.com';
  const gLink = url ? baseLink + '/' + url : baseLink;

  const faviconSrc = baseLink + Favicon.src;
  const profileSrc = baseLink + Profile.src;

  return {
    title: gTitle,
    description: 'The personal portfolio and blog of Haw Jeh - a solution architect and tech lead with expertise in cloud solutioning, systems thinking, and innovative software solutions.',
    keywords: 'Haw Jeh, Portfolio, Software Developer, Software Engineer, Tech Lead, Solution Architect, .NET, Javascript, Typscript, Resume, Blog, Tech Lead, System Thinker, Creative, Efficient, Collaborative, Product, Sitefinity, Directus',
    metadataBase: new URL(gLink),
    openGraph: {
      title: gTitle,
      description: 'Discover the portfolio, blog, and resume of Haw Jeh - a tech leader passionate about building efficient, creative, and collaborative solutions.',
      url: gLink,
      type: 'website',
      images: [
        {
          url: profileSrc,
          width: 800,
          height: 600,
          alt: 'Haw Jeh',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: gTitle,
      description: 'Explore Haw Jeh portfolio, resume, and blog as a solution architect and software leader.',
      images: [profileSrc],
    },
    icons: {
      icon: faviconSrc,
    },
    charset: 'utf-8'
  }
}

export { generateMetadataHelper };