import { Award, GraduationCap, BookOpen } from 'lucide-react';

interface QualificationBadgeProps {
  title: string;
  subtitle?: string;
  type: 'degree' | 'certification' | 'training';
}

const iconMap = {
  degree: GraduationCap,
  certification: Award,
  training: BookOpen,
};

export const QualificationBadge = ({ title, subtitle, type }: QualificationBadgeProps) => {
  const Icon = iconMap[type];
  
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50 transition-all duration-200 hover:bg-secondary hover:shadow-soft">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm text-foreground leading-tight">{title}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
};
