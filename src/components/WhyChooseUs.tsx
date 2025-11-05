import React from 'react';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

const incentives = [
  {
    name: 'Boost Your CTR',
    description:
      "A compelling Open Graph image and description can dramatically increase your click-through rates. Don't leave it to chance.",
    icon: TrendingUp,
  },
  {
    name: 'Strengthen Brand Identity',
    description:
      'Consistent branding across all your shared links reinforces your brand identity and builds recognition with your audience.',
    icon: ShieldCheck,
  },
  {
    name: 'Gain Audience Insights',
    description:
      'Our analytics provide valuable insights into how your links are performing, helping you to optimize your content strategy.',
    icon: Users,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id='why-choose-us'
      className='relative bg-slate-900 py-20 sm:py-24'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='relative h-64 lg:h-auto'>
            <Image
              className='w-full h-full object-contain rounded-lg'
              width={600}
              height={600}
              src='/assets/marketing.svg'
              alt='Illustration'
            />
          </div>
          <div>
            <h2 className='text-base font-semibold text-indigo-400 tracking-wide uppercase'>
              Why Choose Us
            </h2>
            <p className='mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl'>
              A Better Way to Share Your Content
            </p>
            <p className='mt-4 text-xl text-gray-300'>
              Stop leaving money on the table. Take control of your link
              previews and unlock your content's true potential.
            </p>
            <div className='mt-10 space-y-8'>
              {incentives.map((incentive) => (
                <div key={incentive.name} className='flex items-start'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-indigo-400'>
                      <incentive.icon className='h-6 w-6' aria-hidden='true' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-lg leading-6 font-medium text-white'>
                      {incentive.name}
                    </h3>
                    <p className='mt-2 text-base text-gray-400'>
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
