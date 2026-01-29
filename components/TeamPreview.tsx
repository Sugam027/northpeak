"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { doctors } from '@/lib/data/doctors';
import TeamCard from '@/components/TeamCard';

const TeamPreview = () => {
  const previewDoctors = doctors.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
      <div className="container">
        <div className="text-center mb-12"> 
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of experienced healthcare professionals is dedicated to providing you with the best medical care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewDoctors.map((doctor) => (
            <TeamCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/doctors">
            <Button className="btn-primary">Meet All Doctors</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
