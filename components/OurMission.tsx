import Image from "next/image";

const OurMission = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
        <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
                
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Healing with Heart, Leading with Excellence
                </h2>
                <p className="text-muted-dark mb-4 text-justify">
                Our mission is to deliver high-quality, accessible healthcare services that meet the diverse needs of our community. We are committed to treating every patient with dignity, respect, and compassion.
                </p>
                <p className="text-muted-dark text-justify">
                We strive to be at the forefront of medical innovation while maintaining the personal touch that defines exceptional patient care. Through continuous improvement and education, we aim to set new standards in healthcare excellence.
                </p>
            </div>
            <div className="order-1 lg:order-2">
                <div className="sm:aspect-[4/2] lg:aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image src="/hero_background.png" alt="Why Choose Us" width={600} height={400} className="w-full h-full object-cover" />
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurMission