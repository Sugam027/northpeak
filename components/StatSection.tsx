import { Users, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '50,000+', label: 'Patients Treated' },
  { icon: Award, value: '20+', label: 'Expert Doctors' },
  { icon: Clock, value: '24/7', label: 'Emergency Care' },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-background/15">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="icon-circle h-12 w-12 mb-2 inline-flex items-center justify-center bg-background/10 rounded-full">
                <stat.icon className="h-8 w-8 text-background" />
              </div>
              <span className="text-3xl font-bold text-foreground">{stat.value}</span>
              <span className="text-muted-dark">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
