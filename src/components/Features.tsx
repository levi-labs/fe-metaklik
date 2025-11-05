import React from 'react';
import { Edit3, Link, Zap } from 'lucide-react';

const features = [
  {
    name: 'Easy Tag Customization',
    description: 'Effortlessly edit titles, descriptions, and images to create compelling link previews that capture attention and drive engagement.',
    icon: Edit3,
  },
  {
    name: 'Affiliate Link Cloaking',
    description: 'Use your own custom domain to shorten and brand your affiliate links, increasing trust and click-through rates while maintaining your brand identity.',
    icon: Link,
  },
  {
    name: 'Blazing Fast Redirects',
    description: 'Our optimized infrastructure ensures that your users are redirected to the destination URL in milliseconds, providing a seamless user experience.',
    icon: Zap,
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="absolute top-0 -z-10 h-full w-full bg-slate-900">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(99,102,241,0.5)] opacity-50 blur-[80px] animate-blob animate-pulse"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Everything You Need to Succeed
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            MetaKlik provides a complete toolkit to enhance your online presence.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative p-6 bg-slate-800 rounded-lg leading-none">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg leading-6 font-medium text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-25"></div>
    </section>
  );
};

export default Features;
