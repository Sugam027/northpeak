

export interface Service {
  background?: string;
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  image?: string;
}

export const services: Service[] = [
  {
    background: '/hero_background.png',
    id: 'general',
    title: 'General Consultation',
    shortDescription: 'Comprehensive health assessments and personalized care plans.',
    description: 'Our General Consultation services provide comprehensive health assessments and personalized care plans tailored to your unique needs. Our experienced physicians conduct thorough examinations, review your medical history, and develop treatment strategies that address both immediate concerns and long-term wellness goals. We believe in building lasting relationships with our patients through attentive care and open communication.',
    features: [
      'Complete physical examinations',
      'Preventive health screenings',
      'Chronic disease management',
      'Health education and counseling',
      'Referrals to specialists when needed',
      'Follow-up care coordination',
    ],
    image: '/hero_background.png',

  },
  {
    background: '/hero_background.png',
    id: 'cardiology',
    title: 'Cardiology',
    shortDescription: 'Expert heart care with advanced diagnostics and treatment.',
    description: 'Our Cardiology department offers expert heart care with advanced diagnostics and treatment options for cardiovascular conditions. Our team of cardiologists uses state-of-the-art technology to diagnose and treat heart disease, arrhythmias, and other cardiac conditions. We focus on both interventional procedures and preventive cardiology to help you maintain a healthy heart.',
    features: [
      'Electrocardiogram (ECG/EKG)',
      'Echocardiography',
      'Stress testing',
      'Cardiac catheterization',
      'Heart failure management',
      'Preventive cardiology programs',
    ],
    image: '/hero_background.png',
  },
  {
    background: '/hero_background.png',
    id: 'pediatrics',
    title: 'Pediatrics',
    shortDescription: 'Gentle, specialized care for children in a friendly environment.',
    description: 'Our Pediatrics department provides gentle, specialized care for infants, children, and adolescents in a child-friendly environment. Our pediatricians are trained to address the unique health needs of young patients, from routine check-ups to complex medical conditions. We create a warm, welcoming atmosphere that helps children feel comfortable and safe.',
    features: [
      'Well-child visits and immunizations',
      'Developmental screenings',
      'Acute illness care',
      'Behavioral health support',
      'Nutrition and growth monitoring',
      'Adolescent health services',
    ],
    image: '/hero_background.png',
  },
  {
    background: '/hero_background.png',
    id: 'dental',
    title: 'Dental Care',
    shortDescription: 'Complete oral health services from cleanings to advanced procedures.',
    description: 'Our Dental Care department offers complete oral health services ranging from routine cleanings to advanced dental procedures. Our skilled dentists and hygienists use modern techniques and technology to ensure comfortable, effective treatment. We emphasize preventive care while providing comprehensive solutions for all your dental needs.',
    features: [
      'Professional cleanings and exams',
      'Cosmetic dentistry',
      'Restorative procedures',
      'Orthodontic consultations',
      'Oral surgery',
      'Emergency dental care',
    ],
    image: '/hero_background.png',
  },
  {
    background: '/hero_background.png',
    id: 'laboratory',
    title: 'Laboratory & Diagnostics',
    shortDescription: 'State-of-the-art lab testing for accurate health insights.',
    description: 'Our Laboratory & Diagnostics department features state-of-the-art testing facilities that provide accurate, timely health insights. From routine blood work to specialized diagnostic tests, our certified technicians ensure precise results that help your healthcare providers make informed treatment decisions.',
    features: [
      'Blood chemistry panels',
      'Imaging services (X-ray, MRI, CT)',
      'Pathology services',
      'Genetic testing',
      'Allergy testing',
      'Quick turnaround times',
    ],
    image: '/hero_background.png',
  },
  {
    background: '/hero_background.png',
    id: 'neurology',
    title: 'Neurology',
    shortDescription: 'Specialized care for brain and nervous system disorders.',
    description: 'Our Neurology department provides specialized care for disorders of the brain, spine, and nervous system. Our neurologists diagnose and treat conditions ranging from migraines and epilepsy to stroke and neurodegenerative diseases. We combine advanced diagnostic tools with personalized treatment approaches.',
    features: [
      'Neurological evaluations',
      'EEG and EMG testing',
      'Stroke care and prevention',
      'Movement disorder treatment',
      'Memory and cognitive assessments',
      'Headache management',
    ],
    image: '/hero_background.png',
  },
  {
    background: '/hero_background.png',
    id: 'orthopedics',
    title: 'Orthopedics',
    shortDescription: 'Expert care for bones, joints, and musculoskeletal conditions.',
    description: 'Our Orthopedics department offers expert care for conditions affecting bones, joints, muscles, and ligaments. Whether you need treatment for a sports injury, arthritis, or require joint replacement surgery, our orthopedic specialists provide comprehensive care to restore mobility and reduce pain.',
    features: [
      'Sports medicine',
      'Joint replacement surgery',
      'Arthroscopic procedures',
      'Fracture care',
      'Physical therapy',
      'Spine care',
    ],
    image: '/hero_background.png',
  },
  {
    background: '/hero_background.png',
    id: 'ophthalmology',
    title: 'Ophthalmology',
    shortDescription: 'Complete eye care from routine exams to surgical procedures.',
    description: 'Our Ophthalmology department provides complete eye care services from routine vision exams to complex surgical procedures. Our eye care specialists diagnose and treat a wide range of conditions including cataracts, glaucoma, and macular degeneration, using the latest technology to preserve and restore your vision.',
    features: [
      'Comprehensive eye exams',
      'Cataract surgery',
      'Glaucoma treatment',
      'LASIK consultations',
      'Diabetic eye care',
      'Pediatric ophthalmology',
    ],
    image: '/hero_background.png',
  },
];
