"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/lib/data/services";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {

  return (
    <Card className="relative w-[320px] h-[380px] group lg:aspect-auto">
      
      {/* Background Image */}
      <Image
        src={service.image || "/hero_background.png"} 
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

      {/* Content */}
      <CardContent className="relative bottom-0 p-5 flex flex-col justify-end h-full">
        <h2 className="text-2xl font-bold text-white leading-tight mb-2">
          {service.title}
        </h2>

        <p className="text-sm text-white/80 mb-5 line-clamp-3">
          {service.shortDescription}
        </p>
        <Link href={`/services/${service.id}`} className="mb-4">
          <Button variant="ghost" className="w-full bg-white hover:translate-none hover:bg-white/70 rounded-2xl text-lg py-2">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
