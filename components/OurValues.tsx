import { Eye, Heart, Target } from 'lucide-react';

const OurValues = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
        <div className="container">
            <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                What We Stand For
            </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 text-center shadow-card">
                <div className="icon-circle h-16 w-16 mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Compassion</h3>
                <p className="text-muted-foreground text-sm">
                We treat every patient with empathy, understanding, and genuine care.
                </p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-card">
                <div className="icon-circle h-16 w-16 mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                We pursue the highest standards in medical care and patient service.
                </p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-card">
                <div className="icon-circle h-16 w-16 mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Integrity</h3>
                <p className="text-muted-foreground text-sm">
                We operate with honesty, transparency, and ethical principles.
                </p>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurValues