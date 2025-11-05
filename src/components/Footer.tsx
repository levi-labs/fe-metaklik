import React from 'react';
import Image from 'next/image';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-gray-300 py-12 sm:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='xl:col-span-1'>
            {/* Logo */}
            <Image
              width={240}
              height={340}
              src='/assets/metaklik.png'
              alt='MetaKlik Logo'
              className='w-auto h-12 sm:h-14 md:h-36 object-contain'
            />
            <p className='text-gray-400 text-base mb-6'>
              Craft the perfect first impression, every single time.
            </p>
            <div className='flex space-x-6'>
              <a href='#' className='text-indigo-300 hover:text-indigo-100'>
                <span className='sr-only'>GitHub</span>
                <Github className='h-6 w-6' />
              </a>
              <a href='#' className='text-indigo-300 hover:text-indigo-100'>
                <span className='sr-only'>Twitter</span>
                <Twitter className='h-6 w-6' />
              </a>
              <a href='#' className='text-indigo-300 hover:text-indigo-100'>
                <span className='sr-only'>LinkedIn</span>
                <Linkedin className='h-6 w-6' />
              </a>
            </div>
          </div>
          <div className='mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-indigo-300 tracking-wider uppercase'>
                  Solutions
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-indigo-300 tracking-wider uppercase'>
                  Support
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <a
                      href='#pricing'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-indigo-300 tracking-wider uppercase'>
                  Company
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <a
                      href='#about'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-indigo-300 tracking-wider uppercase'>
                  Legal
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Claim
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base text-gray-400 hover:text-white'
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 border-t border-slate-800 pt-8'>
          <p className='text-base text-gray-500 xl:text-center'>
            &copy; 2025 MetaKlik, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
