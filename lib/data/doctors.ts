import { LucideIcon, Stethoscope, Heart, Baby, Smile, FlaskConical } from 'lucide-react';

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  specialtyIcon: LucideIcon;
  description: string;
  education: string[];
  experience: string;
  image?: string;
}

export const doctors: Doctor[] = [
  {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Physician',
    specialtyIcon: Stethoscope,
    description: 'Dr. Sarah Johnson is a board-certified general physician with over 15 years of experience in primary care. She is dedicated to providing comprehensive health assessments and personalized treatment plans for patients of all ages. Her approach combines evidence-based medicine with compassionate care.',
    education: ['MD, Harvard Medical School', 'Residency, Johns Hopkins Hospital'],
    experience: '15+ years',
    image: '/hero_background.png',
  },
  {
    id: 'dr-michael-chen',
    name: 'Dr. Michael Chen',
    specialty: 'Cardiologist',
    specialtyIcon: Heart,
    description: 'Dr. Michael Chen is a renowned cardiologist specializing in interventional cardiology and heart failure management. He has performed over 2,000 cardiac procedures and is committed to advancing heart health through innovative treatments and preventive care strategies.',
    education: ['MD, Stanford University', 'Fellowship, Cleveland Clinic'],
    experience: '12+ years',
    image: '/hero_background.png',
  },
  {
    id: 'dr-emily-williams',
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrician',
    specialtyIcon: Baby,
    description: 'Dr. Emily Williams is a compassionate pediatrician who specializes in child development and adolescent medicine. She creates a warm, welcoming environment for young patients and their families, focusing on preventive care and healthy lifestyle guidance.',
    education: ['MD, Yale School of Medicine', 'Residency, Children\'s Hospital of Philadelphia'],
    experience: '10+ years',
    image: '/hero_background.png',
  },
  {
    id: 'dr-david-martinez',
    name: 'Dr. David Martinez',
    specialty: 'Dentist',
    specialtyIcon: Smile,
    description: 'Dr. David Martinez is an expert in cosmetic and restorative dentistry. He combines artistic skill with advanced dental technology to create beautiful, healthy smiles. His gentle approach and attention to patient comfort make dental visits stress-free.',
    education: ['DDS, UCLA School of Dentistry', 'Advanced Prosthodontics Certification'],
    experience: '8+ years',
    image: '/hero_background.png',
  },
  {
    id: 'dr-amanda-lee',
    name: 'Dr. Amanda Lee',
    specialty: 'Pathologist',
    specialtyIcon: FlaskConical,
    description: 'Dr. Amanda Lee is a clinical pathologist specializing in diagnostic medicine and laboratory services. Her expertise in molecular diagnostics and precision medicine helps ensure accurate diagnoses for complex medical conditions.',
    education: ['MD, PhD, Columbia University', 'Fellowship, Mayo Clinic'],
    experience: '14+ years',
    image: '/hero_background.png',
  },
  {
    id: 'dr-james-wilson',
    name: 'Dr. James Wilson',
    specialty: 'General Physician',
    specialtyIcon: Stethoscope,
    description: 'Dr. James Wilson brings a holistic approach to primary care, emphasizing preventive medicine and lifestyle modifications. He is passionate about building long-term relationships with patients and helping them achieve optimal health.',
    education: ['MD, Duke University', 'MPH, Harvard School of Public Health'],
    experience: '18+ years',
    image: '/hero_background.png',
  },
];
