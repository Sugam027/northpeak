import Image from 'next/image';

const OurVision = () => {
  return (
    <>
    <section className="bg-background/5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
        <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="sm:aspect-[4/2] lg:aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/hero_background.png" alt="Why Choose Us" width={600} height={400} className="w-full h-full object-cover" />
            </div>
            <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Vision</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building a Healthier Tomorrow
            </h2>
            <p className="text-muted-dark mb-4 text-justify">
                We envision NorthPark Medical Center as the premier healthcare destination in the region – a place where patients receive world-class treatment in a warm, welcoming environment.
            </p>
            <p className="text-muted-dark text-justify">
                Our vision extends beyond treating illness. We aim to be a pillar of community health, promoting wellness, prevention, and healthy living. We see a future where every individual has access to quality healthcare, regardless of their circumstances.
            </p>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default OurVision