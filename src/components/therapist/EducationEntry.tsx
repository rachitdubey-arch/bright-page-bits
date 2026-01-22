import { GraduationCap } from 'lucide-react';

interface EducationEntryProps {
  institution: string;
  degree: string;
  from: string;
  to: string;
}

export const EducationEntry = ({ institution, degree, from, to }: EducationEntryProps) => {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <GraduationCap className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground">{degree}</h4>
        <p className="text-sm text-muted-foreground">{institution}</p>
        <p className="text-xs text-muted-foreground mt-1">{from} – {to}</p>
      </div>
    </div>
  );
};
