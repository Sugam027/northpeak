import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { doctors } from '@/lib/data/doctors';
import Cta from '@/components/Cta';
import HeroSection from '@/components/HeroSection';
import TeamCard from '@/components/TeamCard';

const Doctors = () => {
  return (
    <>
    <HeroSection
        title='Meet Our'
        highlight='Expert Team'
        subtitle='Our team of dedicated healthcare professionals is here to provide you with exceptional care and support.'
        background='/hero_background.png'
      />
    

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <TeamCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <Cta />
    
    </>
  );
};

export default Doctors;
