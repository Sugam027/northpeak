import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Cta = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden bg-background/15">
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
      
      <div className="container text-center relative">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Schedule Your Appointment?
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Take the first step towards better health. Our team is ready to provide you with exceptional care tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Book Appointment <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <a href="tel:+15551234567">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              <Phone className="h-4 w-4 mr-2" /> +1 (555) 123-4567
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
