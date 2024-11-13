import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>About Us</h3>
            <p className='text-gray-400'>
              We are dedicated to providing the best shopping experience for our
              customers.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/products'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href='/categories'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Customer Service</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/faq'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href='/shipping'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href='/returns'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Connect With Us</h3>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='sr-only'>Facebook</span>
                <Facebook className='h-6 w-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='sr-only'>Twitter</span>
                <Twitter className='h-6 w-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='sr-only'>Instagram</span>
                <Instagram className='h-6 w-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='sr-only'>LinkedIn</span>
                <Linkedin className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-800 text-center'>
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} Vilange Store. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
