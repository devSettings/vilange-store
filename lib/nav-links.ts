import {
  BookOpenText,
  Contact,
  FileUser,
  GraduationCap,
  Home,
} from 'lucide-react';

const navLinks = [
  { id: 1, name: 'Home', slug: 'home', icon: Home, path: '/' },
  {
    id: 2,
    name: 'Products',
    slug: 'information',
    icon: BookOpenText,
    path: '/enfomasyon',
  },
  {
    id: 3,
    name: 'Programs',
    slug: 'programs',
    icon: GraduationCap,
    path: '/pwogram-yo',
  },
  //   { id: 4, name: 'Blòg', slug: 'blog', icon: Newspaper, path: '/blog' },
  {
    id: 5,
    name: 'About Us',
    slug: 'about-us',
    icon: FileUser,
    path: '/about-us',
  },
  {
    id: 6,
    name: 'Contact Us',
    slug: 'contact-us',
    icon: Contact,
    path: '/contact-us',
  },
];

export default navLinks;
