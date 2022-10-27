import { StaticImageData } from 'next/image';

import { images } from '../constants';

interface Features {
  image: StaticImageData;
  title: string;
  text: string;
  navigate: string;
}

interface Testimonials {
  message: string;
  image: StaticImageData;
  name: string;
  work: string;
}

interface Categories {
  image: StaticImageData;
  category: string;
  date: string;
  message: string;
  icon: StaticImageData;
  name: string;
}

export const FEATURES: Features[] = [
  {
    image: images.feature1,
    title: 'Cool feature title',
    text: 'Learning curve network effects return on investment.',
    navigate: 'Explore Page',
  },
  {
    image: images.feature2,
    title: 'Even cooler feature',
    text: 'Learning curve network effects return on investment.',
    navigate: 'Explore Page',
  },
  {
    image: images.feature3,
    title: 'Cool feature title',
    text: 'Learning curve network effects return on investment.',
    navigate: 'Explore Page',
  },
];

export const TESTIMONIALS: Testimonials[] = [
  {
    message:
      'Buyer buzz partner network disruptive non-disclosure agreement business',
    image: images.profile1,
    name: 'Albus Dumbledore',
    work: 'Manager @ Howarts',
  },
  {
    message:
      'Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.',
    image: images.profile2,
    name: 'Severus Snape',
    work: 'Manager @ Slytherin',
  },
  {
    message:
      'Release facebook responsive web design business model canvas seed money monetization.',
    image: images.profile3,
    name: 'Harry Potter',
    work: 'Team Leader @ Gryffindor',
  },
];

export const CATEGORIES: Categories[] = [
  {
    image: images.cat1,
    category: 'Category',
    date: 'November 22, 2021',
    message: 'Pitch termsheet backing validation focus release.',
    icon: images.profile4,
    name: 'Chandler Bing',
  },
  {
    image: images.cat2,
    category: 'Category',
    date: 'November 22, 2021',
    message:
      'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    icon: images.profile5,
    name: 'Rachel Green',
  },
  {
    image: images.cat3,
    category: 'Category',
    date: 'November 22, 2021',
    message:
      'Beta prototype sales iPad gen-z marketing network effects value proposition',
    icon: images.profile6,
    name: 'Monica Geller',
  },
];
