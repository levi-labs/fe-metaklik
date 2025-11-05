import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
