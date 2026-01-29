import { Eye } from 'lucide-react';

const OurVision = () => {
  return (
    <>
    <section className="bg-background/5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
        <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl bg-primary/10 flex items-center justify-center">
            <Eye className="h-24 w-24 text-primary" />
            </div>
            <div>
            <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle h-12 w-12">
                <Eye className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Vision</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building a Healthier Tomorrow
            </h2>
            <p className="text-muted-foreground mb-4 text-justify">
                We envision NorthPark Medical Center as the premier healthcare destination in the region – a place where patients receive world-class treatment in a warm, welcoming environment.
            </p>
            <p className="text-muted-foreground text-justify">
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