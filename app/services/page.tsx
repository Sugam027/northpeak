import Link from 'next/link';
import { Bookmark } from 'lucide-react';
import { services } from '@/lib/data/services';
import Cta from '@/components/Cta';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  return (
    <>
    <HeroSection
        title='Our'
        highlight='Services'
        subtitle='Explore our comprehensive range of medical services designed to meet all your healthcare needs.'
        background='/hero_background.png'
      />

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>

  );
};

export default Services;