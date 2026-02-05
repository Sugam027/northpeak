// app/contact/page.tsx (Server Component)
import { contactInfo, socialLinks } from '@/lib/data/contacts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';


export const metadata = {
  title: 'Contact | Research Portfolio',
  description: "Get in touch for research collaboration, questions, or discussions about sustainable agriculture and forestry.",
};

const Contact = () => {
  return (
    <>
    <HeroSection
        title="Contact"
        subtitle="I'd love to hear from you! Whether you have questions about my research, want to discuss potential collaborations, or just want to connect, feel free to reach out through any of the methods below."
        background="/hero_background.png" />

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <div className="aspect-video rounded-2xl bg-secondary/50 h-full w-full flex items-center justify-center overflow-hidden">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.378559678231!2d85.35329617462695!3d27.767307576148234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1dd8d9585d69%3A0x7cda378dfab5012c!2sNorth%20Peak%20Health%20Care%20And%20Wellness!5e0!3m2!1sen!2snp!4v1769618974144!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="North Peak Health Care and Wellness Center"
                    ></iframe>
                </div>
            </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {contactInfo.map((contact, index) => (
                        <Card key={index}>
                            <CardHeader className='pb-1!'>
                                <div className="flex items-center gap-3">
                                    <div className="icon-circle h-10 w-10 bg-background/10 p-2 rounded-md">
                                        <contact.icon className="h-full w-full text-background" />   
                                    </div>
                                    {contact.label}
                                </div>    
                            </CardHeader>
                            <CardContent>
                                {Array.isArray(contact.value) ? (
                                    <ul className="space-y-1">
                                        {contact.value.map((item, idx) => (
                                            <li key={idx} className="text-sm text-muted-dark">{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-muted-dark">{contact.value}</p>
                                )}
                            </CardContent>
                        </Card>
                    ))}

                    {socialLinks.map((link, index) => (
                        <Card key={index} className='bg-card shadow-card'>
                            <CardHeader className='pb-1!'>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 bg-background/10 p-2 rounded-md">
                                        <svg
                                            role="img"
                                            viewBox="0 0 24 24"
                                            width="100%"
                                            height="100%"
                                            fill="#2b8883"
                                            aria-label="GitHub"
                                            >
                                            <path d={link.icon.path} />
                                        </svg>
                                    </div>
                                        {link.name}
                                </div>    
                            </CardHeader>   
                            <CardContent>
                                <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer ">
                                    <p className='text-sm text-muted-dark hover:text-background'>{link.username}</p>
                                </Link>   
                            </CardContent>             
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Contact;