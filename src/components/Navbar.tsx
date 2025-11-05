import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-800 shadow-sm'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 pt-4'>
          <div className='shrink-0 h-full flex items-center overflow-hidden'>
            <a
              href='#'
              className='font-bold text-gray-900 h-full flex items-center'
            >
              <Image
                width={200}
                height={220}
                src='/assets/metaklik.png'
                alt='Logo'
                className='min-w-2/6 object-contain'
              />
            </a>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <a href='#features' className='text-white hover:text-indigo-400'>
              Features
            </a>
            <a href='#pricing' className='text-white hover:text-indigo-400'>
              Pricing
            </a>
            <a href='#about' className='text-white hover:text-indigo-400'>
              About
            </a>
            <a
              href='#testimonials'
              className='text-white hover:text-indigo-400'
            >
              Testimonials
            </a>
          </div>
          <div>
            <a
              href='/signin'
              className='px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700'
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
