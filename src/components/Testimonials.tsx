import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  // English Testimonials
  {
    quote:
      'MetaKlik has been a game-changer for our content strategy. Our click-through rates have increased by 30% since we started using it!',
    author: 'Sarah Johnson',
    title: 'Marketing Manager, Acme Inc.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote:
      'I love how easy it is to use. I can create a custom link preview in seconds, without any technical knowledge. Highly recommended!',
    author: 'David Chen',
    title: 'Content Creator, Tech Weekly',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
  },
  {
    quote:
      'The ability to use our own domain for affiliate links is a huge plus. It has helped us to increase trust with our audience and boost our conversions.',
    author: 'Maria Garcia',
    title: 'Affiliate Marketer, The Affiliate Hub',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
  {
    quote:
      'An indispensable tool for any modern marketing team. The analytics are insightful and have directly impacted our campaign performance.',
    author: 'Michael Brown',
    title: 'Digital Strategist, Innovate Ltd.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
  },
  {
    quote:
      'The best part is the support. The team is responsive and genuinely cares about their users. A breath of fresh air in the SaaS world.',
    author: 'Emily White',
    title: 'Small Business Owner',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d',
  },
  {
    quote:
      'We saw an immediate improvement in our social media engagement after implementing MetaKlik. It just works.',
    author: 'Chris Green',
    title: 'Social Media Manager, ConnectYou',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d',
  },
  // Indonesian Testimonials
  {
    quote:
      'Sejak pakai MetaKlik, CTR kami meroket! Alat yang wajib dimiliki setiap digital marketer di Indonesia. Keren banget!',
    author: 'Budi Santoso',
    title: 'Digital Marketer, Maju Jaya',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e2902670ad',
  },
  {
    quote:
      'Sangat mudah digunakan, bahkan untuk pemula seperti saya. Tampilan link jadi lebih profesional dan menarik. Terima kasih MetaKlik!',
    author: 'Citra Lestari',
    title: 'Blogger & Content Creator',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e2902670bd',
  },
  {
    quote:
      'Fitur custom domain untuk link afiliasi sangat membantu meningkatkan kepercayaan audiens. Konversi jadi lebih tinggi dari sebelumnya.',
    author: 'Agus Wijaya',
    title: 'Pemain Afiliasi',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e2902670cd',
  },
  {
    quote:
      'Analitiknya detail dan mudah dipahami. Saya jadi bisa membuat strategi konten yang lebih baik dan terukur. Recommended!',
    author: 'Dewi Anggraini',
    title: 'Social Media Strategist, Agency Kita',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e2902670dd',
  },
  {
    quote:
      'Support timnya luar biasa. Cepat tanggap dan solutif. Jarang ada layanan SaaS dengan support sepersonal ini.',
    author: 'Eko Prasetyo',
    title: 'Pemilik UMKM',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e2902670ed',
  },
  {
    quote:
      'Engagement di media sosial kami langsung naik setelah pakai MetaKlik. Simpel, tapi dampaknya besar. Suka banget!',
    author: 'Fitriani',
    title: 'Pengelola Media Sosial',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e2902670fd',
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className='relative p-px bg-linear-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-lg my-4 mx-4 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20'>
    <div className='relative bg-white p-6 rounded-[7px]'>
      <Quote className='absolute top-4 left-4 w-8 h-8 text-gray-200' />
      <blockquote className='text-lg text-gray-700 italic relative z-10 ml-2 pl-4'>
        {testimonial.quote}
      </blockquote>
      <figcaption className='mt-6 flex items-center space-x-4'>
        <img
          className='h-12 w-12 rounded-full'
          src={testimonial.avatar}
          alt={testimonial.author}
        />
        <div>
          <div className='font-semibold text-gray-900'>
            {testimonial.author}
          </div>
          <div className='text-indigo-600'>{testimonial.title}</div>
        </div>
      </figcaption>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id='testimonials' className='bg-gray-50 py-20 sm:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>
            Testimonials
          </h2>
          <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
            Loved by Creators Worldwide
          </p>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='relative h-96 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'>
            <div className='absolute w-full flex flex-col animate-scroll-up'>
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
          <div className='relative h-96 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'>
            <div className='absolute w-full flex flex-col animate-scroll-down'>
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
