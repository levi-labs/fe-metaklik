import Image from 'next/image';
import React from 'react';

export default function MaintenancePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl w-full text-center'>
        {/* Maintenance Illustration */}
        <div className='mb-8 flex justify-center'>
          <div className='relative w-full max-w-md md:max-w-lg lg:max-w-xl'>
            <Image
              src='/maintenance.webp'
              alt='Maintenance Illustration'
              width={600}
              height={600}
              className='w-full h-auto object-contain drop-shadow-2xl animate-pulse-slow'
              priority
            />
          </div>
        </div>

        {/* Message Content */}
        <div className='space-y-6 px-4'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>
            We&apos;ll be back soon!
          </h1>

          <div className='space-y-4'>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-300 font-medium'>
              Our website is currently undergoing scheduled maintenance
            </p>

            <p className='text-base sm:text-lg text-gray-400 max-w-2xl mx-auto'>
              We&apos;re working hard to improve your experience. Thank you for
              your patience and understanding.
            </p>
          </div>

          {/* Additional Info */}
          <div className='mt-12 pt-8 border-t border-gray-700'>
            <p className='text-sm sm:text-base text-gray-500'>
              Need immediate assistance? Contact us at{' '}
              <a
                href='mailto:support@metaklik.com'
                className='text-indigo-400 hover:text-indigo-300 underline transition-colors'
              >
                support@metaklik.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
