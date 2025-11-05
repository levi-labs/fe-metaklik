'use client';

import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const OnboardingSlide = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => (
  <div className='flex flex-col justify-center items-center text-center p-6 h-full w-full'>
    <Image
      width={600}
      height={600}
      src={imageUrl}
      alt={title}
      className='w-[600px] h-[600px] object-contain mx-auto mb-4'
    />
    <h3 className='text-xl font-semibold text-white mb-2'>{title}</h3>
    <p className='text-gray-400'>{description}</p>
  </div>
);

const SignInCarousel = () => {
  return (
    <div className='relative hidden lg:flex flex-col justify-center items-center bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 p-8 lg:p-12'>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className='w-full h-full'
      >
        <SwiperSlide>
          <OnboardingSlide
            title='Customize Your Links'
            description='Craft stunning Open Graph previews for every link you share. Control your narrative.'
            imageUrl='/assets/carousel/custom.svg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <OnboardingSlide
            title='Boost Engagement'
            description='Attractive links lead to more clicks. Increase your CTR and brand visibility.'
            imageUrl='/assets/carousel/boost.svg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <OnboardingSlide
            title='Track Your Performance'
            description='Gain valuable insights with our powerful analytics. Optimize your strategy.'
            imageUrl='/assets/carousel/track.svg'
          />
        </SwiperSlide>
      </Swiper>
      {/* Custom Navigation Arrows */}
      <div className='absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 z-10'>
        <button className='swiper-button-prev p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors'>
          <ChevronLeft className='w-6 h-6' />
        </button>
        <button className='swiper-button-next p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors'>
          <ChevronRight className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default SignInCarousel;
