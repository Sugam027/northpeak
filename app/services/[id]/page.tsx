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