
import Image from 'next/image';

const OurStory = () => {
  return (
    <>
    <section className="bg-background/5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/hero_background.png" alt="Why Choose Us" width={600} height={400} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Legacy of Compassionate Care
              </h2>
              <p className="text-muted-dark mb-4 text-justify">
                NorthPark Medical Center was founded in 1995 with a simple mission: to provide exceptional healthcare services to our community. What started as a small clinic with just five doctors has grown into a comprehensive medical center serving thousands of patients annually.
              </p>
              <p className="text-muted-dark mb-4 text-justify">
                Over the years, we have expanded our facilities, added new departments, and embraced cutting-edge medical technology. But our core values remain unchanged – compassion, excellence, and patient-centered care.
              </p>
              <p className="text-muted-dark text-justify">
                Today, NorthPark is home to over 20 specialized physicians and 100+ healthcare professionals, all dedicated to improving the health and well-being of our patients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurStory