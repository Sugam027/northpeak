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
            className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300"
        >
            <div className="relative w-full h-66 overflow-hidden">
                <Image src={doctor.image as string} alt={doctor.name} fill className='object-cover' />
            </div>
            <CardContent>
            <div className="p-5 text-center">
            <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {doctor.name}
            </h3>
            <p className="text-primary text-sm mt-1">{doctor.specialty}</p>
            <p className="text-primary text-sm mt-1">{doctor.experience}</p>
            <Link href={`/teams/${doctor.id}`}>
                <span className="inline-flex items-center gap-1 text-muted-foreground text-sm mt-3 group-hover:text-primary transition-colors">
                View Profile <ArrowRight className="h-3 w-3" />
                </span>
            </Link>
            </div>
            </CardContent>
        </Card>

    </div>
    
    </>
  )
}

export default TeamCard