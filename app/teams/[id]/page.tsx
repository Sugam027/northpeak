import { notFound } from 'next/navigation';
import { doctors } from '@/lib/data/doctors';
import DoctorDetail from '@/components/DoctorDetail';

interface DoctorDetailPageProps {
  params: {
    id: string;
  };
}

// Generate static paths for all doctors
export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: DoctorDetailPageProps) {
  const {id} = await params;
  const doctor = doctors.find((d) => d.id === id);
  
  if (!doctor) {
    return {
      title: 'Doctor Not Found',
    };
  }

  return {
    title: `${doctor.name} - North Peak Medical`,
    description: doctor.description,
  };
}

export default async function DoctorDetailPage({ params }: DoctorDetailPageProps) {
  const {id} = await params;
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  return <DoctorDetail doctor={doctor} doctorId={id} />;
}