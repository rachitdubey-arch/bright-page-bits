import { Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface WorkExperienceEntryProps {
  jobTitle: string;
  company: string;
  employmentType: string;
  from: string;
  to: string;
}

export const WorkExperienceEntry = ({ 
  jobTitle, 
  company, 
  employmentType, 
  from, 
  to 
}: WorkExperienceEntryProps) => {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Briefcase className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-semibold text-foreground">{jobTitle}</h4>
          <Badge variant="outline" className="text-xs">
            {employmentType}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{company}</p>
        <p className="text-xs text-muted-foreground mt-1">{from} – {to}</p>
      </div>
    </div>
  );
};
