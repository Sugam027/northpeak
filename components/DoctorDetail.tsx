// components/ServiceDetail.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Clock, Globe, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Cta from '@/components/Cta';
import { Card, CardContent } from '@/components/ui/card';
import { Doctor, doctors } from '@/lib/data/doctors';

interface DoctorDetailProps {
  doctor: Doctor;
  doctorId: string;
}

export default function DoctorDetail({ doctor, doctorId }: DoctorDetailProps) {

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <Image
            src={doctor.image as string}
            width={100}
            height={100}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
  
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-background/80 via-background/70 to-background/60" />
        </div>
  
        {/* Content */}
  
        <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/teams" 
            className="inline-flex items-center gap-2 text-white hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Teams
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-muted mb-4">
            {doctor.name}
          </h1>
          
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center overflow-hidden relative">
              {doctor.image ? (
                <Image 
                  src={doctor.image as string} 
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-muted-foreground">No Image Available</div>
              )}
            </div>

            {/* Content */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                About This Service
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {doctor.description}
              </p>

              <div className="space-y-6">
                {/* Education */}
                <div className="flex items-start gap-4">
                  <div className="icon-circle h-12 w-12 flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Education</h3>
                    <ul className="space-y-1">
                      {doctor.education.map((edu, index) => (
                        <li key={index} className="text-muted-foreground">{edu}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-4">
                  <div className="icon-circle h-12 w-12 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Experience</h3>
                    <p className="text-muted-foreground">{doctor.experience}</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-start gap-4">
                  <div className="icon-circle h-12 w-12 flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Languages</h3>
                    <p className="text-muted-foreground">{doctor.languages.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Other Doctors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors
              .filter((doc) => doc.id !== doctorId)
              .slice(0, 4)
              .map((doc) => {
                return (
                  <Card className='h-70 relative' key={doc.id}>
                      <Link
                        key={doc.id}
                        href={`/teams/${doc.id}`}
                      >
                      <Image
                        src={doc.image || "/hero_background.png"} 
                        alt={doc.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                      <CardContent className="relative bottom-0 flex flex-col justify-end p-5 h-full">
                        <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                          {doc.name}
                        </h3>
                      </CardContent>
                  
                    </Link>
                  </Card>
                    
                );
              })}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}

// ========================================
// app/services/[id]/page.tsx
// ========================================

/*
import { services } from '@/lib/data/services';
import ServiceDetail from '@/components/ServiceDetail';
import { notFound } from 'next/navigation';

interface ServiceDetailPageProps {
  params: {
    id: string;
  };
}

// Generate static paths for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const service = services.find((s) => s.id === params.id);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - North Peak Medical`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} serviceId={params.id} />;
}
*/

// ========================================
// OPTIONAL: app/services/[id]/not-found.tsx
// ========================================

/*
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="bg-blue-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl">🔍</span>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Service Not Found
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/services">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Services
          </Button>
        </Link>
      </div>
    </div>
  );
}
*/