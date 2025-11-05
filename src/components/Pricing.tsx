import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started and exploring MetaKlik.',
    features: [
      '5 Link Generations per Month',
      '5 Active Links',
      'Community Support',
    ],
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: '$19',
    description: 'Unlock advanced features for growing your online presence.',
    features: [
      '25 Link Generations per Month',
      '25 Active Links',
      'Community Support',
      'Priority Email Support',
      '10 Custom Domain Links',
    ],
    mostPopular: true,
  },
  {
    name: 'Platinum',
    price: '$49',
    description: 'Maximum power and flexibility for serious marketers.',
    features: [
      '50 Link Generations per Month',
      '50 Active Links',
      'Community Support',
      'Priority Email Support',
      '30 Custom Domain Links',
    ],
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id='pricing' className='relative bg-slate-900 py-20 sm:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base font-semibold text-indigo-400 tracking-wide uppercase'>
            Pricing
          </h2>
          <p className='mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl'>
            The Right Plan for Your Needs
          </p>
          <p className='mt-4 max-w-2xl mx-auto text-xl text-gray-300'>
            Choose the plan that works best for you and your business.
          </p>
        </div>

        <div className='mt-12 grid gap-8 lg:grid-cols-3'>
          {tiers.map((tier) => (
            <div key={tier.name} className='relative group'>
              {tier.mostPopular && (
                <div className='absolute -top-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-medium shadow-md'>
                  Most Popular
                </div>
              )}
              <div
                className={`relative p-px rounded-lg transition-all duration-300 ${
                  tier.mostPopular
                    ? 'bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 hover:shadow-indigo-500/30 hover:shadow-xl'
                    : 'bg-gray-700 hover:shadow-gray-700/30 hover:shadow-lg'
                }`}
              >
                <div className='relative bg-slate-800 p-8 pt-12 rounded-[7px] flex flex-col h-full'>
                  <h3 className='text-2xl font-semibold text-center text-white mt-4'>
                    {tier.name}
                  </h3>
                  <p className='text-center text-gray-400 mt-2'>
                    {tier.description}
                  </p>
                  <div className='mt-6 text-center'>
                    <span className='text-5xl font-extrabold text-white'>
                      {tier.price}
                    </span>
                    <span className='text-base font-medium text-gray-400'>
                      /mo
                    </span>
                  </div>
                  <ul className='mt-8 space-y-4 flex-grow'>
                    {tier.features.map((feature) => (
                      <li key={feature} className='flex items-start'>
                        <div className='flex-shrink-0'>
                          <Check className='h-6 w-6 text-green-400' />
                        </div>
                        <p className='ml-3 text-base text-gray-300'>
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className='mt-auto pt-8'>
                    <a
                      href='#'
                      className={`w-full block text-center px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                        tier.mostPopular
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30'
                          : 'bg-gray-700 text-gray-200 hover:bg-gray-600 shadow-md shadow-gray-700/30'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-25"></div>
    </section>
  );
};

export default Pricing;
