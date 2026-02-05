import { Phone } from 'lucide-react';
import { Button } from './ui/button';

const Cta = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12 md:py-24 bg-gradient-primary relative overflow-hidden bg-background/15">
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
      
      <div className="container text-center relative">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Schedule Your Appointment?
        </h2>
        <p className="text-muted-dark max-w-2xl mx-auto mb-8">
          Take the first step towards better health. Our team is ready to provide you with exceptional care tailored to your needs.
        </p>
        {/* <div className="group flex flex-col sm:flex-row gap-4 justify-center"> */}
          {/* <Link href="/contact">
            <Button variant="ghost">
              Book Appointment <ArrowRight className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1.5" />
            </Button>
          </Link> */}
          <a href="tel:+15551234567">
            <Button variant="default" className="text-white">
              <Phone className="h-4 w-4 mr-2" /> +1 (555) 123-4567
            </Button>
          </a>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Cta;
