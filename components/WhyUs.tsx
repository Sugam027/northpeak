import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const reasons = [
  'Experienced and certified medical professionals',
  'State-of-the-art medical facilities and equipment',
  'Personalized care plans for every patient',
  'Affordable healthcare services',
  '24/7 emergency services available',
  'Convenient location with easy parking',
];

const WhyUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground">Why Choose Us</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl bg-white overflow-hidden">
                <Image src="/hero_background.png" alt="Why Choose Us" width={600} height={400} className="w-full h-full object-cover" />
            </div>

            <div>
                <h2 className="font-heading text-2xl md:text-2xl font-bold text-foreground mt-2 mb-6">
                We Provide the Best Healthcare Services
                </h2>
                <p className="text-muted-foreground mb-8">
                At NorthPark Medical Center, we are committed to providing exceptional healthcare services that prioritize your well-being. Our team of dedicated professionals works tirelessly to ensure you receive the best possible care.
                </p>

                <ul className="space-y-4 mb-8">
                {reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{reason}</span>
                    </li>
                ))}
                </ul>

                <Link href="/about">
                <Button className="btn-primary">Learn More</Button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
