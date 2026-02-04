"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ReactNode } from "react";

interface HeroSectionProps {
    badgeText?: string; 
    title: string;
    highlight?: string;
    subtitle?: string;
    background?: string; 
    children?: ReactNode;
}

export default function HeroSection({
    badgeText,
    title,
    highlight,
    subtitle,
    background,
    children
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <Image
          src={background as string}
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
        {badgeText && (
            <Badge variant="default" className="mb-4 text-secondary-foreground shadow-md">
              {badgeText}
            </Badge>
        )}
        <h1 className="text-5xl md:text-6xl font-bold text-muted mb-4">
          {title}
          {highlight && (
            <span className="block text-[#1E6B68]">{highlight}</span>
          )}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
        )}

        {/* Optional children (buttons, stats, etc.) */}
        {children}
      </div>
    </section>
  );
}
