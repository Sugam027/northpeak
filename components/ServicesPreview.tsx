import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { services } from '@/lib/data/services';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

const ServicesPreview = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-12 bg-background/5">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Medical Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services
            .slice(0, 4)
            .map((service, index) => {
              return (
                <Card key={index} className='h-40'>
                    <Link
                      href={`/services/${service.id}`}
                    >
                    <Image
                      src={service.image as string} 
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                    <CardContent className="relative bottom-0 flex flex-col justify-end p-5 h-full">
                      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{service.shortDescription}</p>
                    </CardContent>
                
                  </Link>
                </Card>
                  
              );
            })}
        </div>

        <div className="text-center mt-10">
          <Link href="/services">
            <Button className="btn-primary">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
