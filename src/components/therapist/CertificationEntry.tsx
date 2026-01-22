import { ShieldCheck } from 'lucide-react';

interface CertificationEntryProps {
  certifyingBody: string;
  certificationName: string;
  licenseNumber?: string;
  validFrom: string;
  validTo: string;
}

export const CertificationEntry = ({ 
  certifyingBody, 
  certificationName, 
  licenseNumber,
  validFrom, 
  validTo 
}: CertificationEntryProps) => {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <ShieldCheck className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground">{certificationName}</h4>
        <p className="text-sm text-muted-foreground">{certifyingBody}</p>
        {licenseNumber && (
          <p className="text-xs text-muted-foreground">License #: {licenseNumber}</p>
        )}
        <p className="text-xs text-muted-foreground mt-1">Valid: {validFrom} – {validTo}</p>
      </div>
    </div>
  );
};
