import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Doctor } from '@/lib/data/doctors';

interface TeamCardProps {
  doctor: Doctor;
}

const TeamCard = ({ doctor }: TeamCardProps) => {
  return (
    <>
    <div className='sm:w-full min-h-[300px] max-w-sm'>
        <Card
            key={doctor.id}
            className="group">
            <Link href={`/teams/${doctor.id}`}>
                <div className="relative w-full h-66 overflow-hidden">
                    <Image src={doctor.image as string} alt={doctor.name} fill className='object-cover transition-transform duration-700 ease-out group-hover:scale-110' />
                </div>
                <CardContent>
                <div className="p-5 text-center">
                <h3 className="font-heading text-lg font-semibold text-foreground transition-colors">
                    {doctor.name}
                </h3>
                <p className="text-muted-dark text-sm mt-1">{doctor.specialty}</p>
                <p className="text-muted-dark text-sm mt-1">{doctor.experience}</p>
                    <span className="inline-flex items-center gap-1 text-muted-dark text-sm mt-3 transition-colors duration-300 group-hover:text-background">
                    View Profile <ArrowRight className="h-3 w-3 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                </div>
                </CardContent>
            </Link>
        </Card>

    </div>
    
    </>
  )
}

export default TeamCard