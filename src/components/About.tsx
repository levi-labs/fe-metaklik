import React from 'react';

const timelineEvents = [
  {
    year: '2023',
    title: 'The Spark of an Idea',
    description:
      'Frustrated by ugly link previews, our founders sketched out the initial concept for MetaKlik on a coffee shop napkin.',
  },
  {
    year: 'Early 2024',
    title: 'Building the Engine',
    description:
      'With a small, dedicated team, we began development, focusing on creating a powerful yet simple-to-use customization engine.',
  },
  {
    year: 'Mid 2024',
    title: 'Beta Launch',
    description:
      'We launched our private beta to a select group of creators and marketers, gathering invaluable feedback to refine the platform.',
  },
  {
    year: '2025',
    title: 'Public Launch',
    description:
      'MetaKlik is officially launched to the public, empowering everyone to create beautiful, effective Open Graph previews.',
  },
];

const About = () => {
  return (
    <section
      id='about'
      className='relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden'
    >
      <div
        className='absolute top-0 left-0 w-full h-20'
        style={{ transform: 'scaleY(-1)' }}
      >
        <svg
          viewBox='0 0 1440 120'
          preserveAspectRatio='none'
          className='w-full h-full text-slate-900'
        >
          <path
            d='M0,60 C240,0 480,120 720,60 C960,0 1200,120 1440,60 L1440,120 L0,120 Z'
            fill='currentColor'
          />
        </svg>
      </div>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white'>
        <div className='absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
        {/* Shooting Stars */}
        <div
          className='absolute top-1/4 left-1/4 w-1 h-40 bg-gradient-to-b from-indigo-500 to-transparent animate-shooting-star'
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className='absolute top-1/2 left-1/2 w-1 h-40 bg-gradient-to-b from-purple-500 to-transparent animate-shooting-star'
          style={{ animationDelay: '3s' }}
        ></div>
        <div
          className='absolute bottom-1/4 right-1/4 w-1 h-40 bg-gradient-to-b from-pink-500 to-transparent animate-shooting-star'
          style={{ animationDelay: '5s' }}
        ></div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>
            About Us
          </h2>
          <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
            We&apos;re on a Mission to Improve the Web
          </p>
          <p className='mt-4 max-w-3xl mx-auto text-xl text-gray-600'>
            MetaKlik was born from a simple frustration: too many shared links look
            terrible. We believe that every piece of content deserves a
            beautiful, informative preview. Our mission is to provide creators,
            marketers, and businesses with the tools they need to put their best
            foot forward online.
          </p>
        </div>

        <div className='mt-20'>
          <h3 className='text-2xl font-extrabold text-center text-gray-900 tracking-tight'>
            Our Story
          </h3>
          <div className='relative mt-12'>
            <div
              className='absolute left-1/2 -ml-0.5 w-1 bg-linear-to-b from-indigo-300 to-purple-300 rounded-full h-full'
              aria-hidden='true'
            ></div>
            <div className='space-y-12'>
              {timelineEvents.map((event, index) => (
                <div key={event.title} className='relative'>
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div className='p-6 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/80 transition-all duration-300 hover:shadow-indigo-500/20 hover:shadow-2xl hover:-translate-y-1'>
                        <p className='text-sm font-semibold text-indigo-600'>
                          {event.year}
                        </p>
                        <h4 className='mt-2 text-lg font-medium text-gray-900'>
                          {event.title}
                        </h4>
                        <p className='mt-2 text-base text-gray-600'>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='w-6 h-6 bg-indigo-500 rounded-full opacity-50 blur-sm'></div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-600 rounded-full'></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="max-w-7xl mx-auto border-gray-200" />
    </section>
  );
};

export default About;
