import { Mail, Phone, MapPin, ExternalLink, Facebook } from "lucide-react";
import { siFacebook, siInstagram } from "simple-icons";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "john.smith@university.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "123 University Ave, City, State, ZIP",
  }

];

export const socialLinks = [
  {
    name: "Facebook",
    icon: siFacebook,
    url: "https://linkedin.com/in/johnsmith",
    description: "North Peak",
    username: "North Peak"
  },
  {
    name: "Instagram",
    icon: siInstagram,
    url: "https://researchgate.net/profile/John_Smith",
    description: "North Peak",
    username: "@northpeak"
  }
];

export const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
];