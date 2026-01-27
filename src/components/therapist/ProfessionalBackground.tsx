import { GraduationCap, Briefcase, ShieldCheck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EducationEntry } from './EducationEntry';
import { WorkExperienceEntry } from './WorkExperienceEntry';
import { CertificationEntry } from './CertificationEntry';

interface Education {
  institution: string;
  degree: string;
  from: string;
  to: string;
}

interface WorkExperience {
  jobTitle: string;
  company: string;
  employmentType: string;
  from: string;
  to: string;
}

interface Certification {
  certifyingBody: string;
  certificationName: string;
  licenseNumber?: string;
  validFrom: string;
  validTo: string;
}

interface ProfessionalBackgroundProps {
  education: Education[];
  workExperience: WorkExperience[];
  certifications: Certification[];
}

export const ProfessionalBackground = ({ 
  education, 
  workExperience, 
  certifications 
}: ProfessionalBackgroundProps) => {
  return (
    <div className="bg-card rounded-xl p-5 shadow-soft border border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-serif font-semibold text-foreground">Professional Background</h3>
      </div>
      
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="w-full grid grid-cols-3 bg-secondary/50 p-1 rounded-lg h-auto">
          <TabsTrigger 
            value="education" 
            className="text-xs sm:text-sm py-2 data-[state=active]:bg-card data-[state=active]:shadow-soft rounded-md"
          >
            <GraduationCap className="w-4 h-4 mr-1.5 hidden sm:inline" />
            Education
          </TabsTrigger>
          <TabsTrigger 
            value="experience" 
            className="text-xs sm:text-sm py-2 data-[state=active]:bg-card data-[state=active]:shadow-soft rounded-md"
          >
            <Briefcase className="w-4 h-4 mr-1.5 hidden sm:inline" />
            Experience
          </TabsTrigger>
          <TabsTrigger 
            value="certifications" 
            className="text-xs sm:text-sm py-2 data-[state=active]:bg-card data-[state=active]:shadow-soft rounded-md"
          >
            <ShieldCheck className="w-4 h-4 mr-1.5 hidden sm:inline" />
            Licenses
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="education" className="mt-4 space-y-3">
          {education.map((edu, index) => (
            <EducationEntry 
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              from={edu.from}
              to={edu.to}
            />
          ))}
        </TabsContent>
        
        <TabsContent value="experience" className="mt-4 space-y-3">
          {workExperience.map((exp, index) => (
            <WorkExperienceEntry 
              key={index}
              jobTitle={exp.jobTitle}
              company={exp.company}
              employmentType={exp.employmentType}
              from={exp.from}
              to={exp.to}
            />
          ))}
        </TabsContent>
        
        <TabsContent value="certifications" className="mt-4 space-y-3">
          {certifications.map((cert, index) => (
            <CertificationEntry 
              key={index}
              certifyingBody={cert.certifyingBody}
              certificationName={cert.certificationName}
              licenseNumber={cert.licenseNumber}
              validFrom={cert.validFrom}
              validTo={cert.validTo}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
