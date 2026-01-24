import { 
  Star, 
  MapPin, 
  CheckSquare, 
  Users,
  Info,
  MessageCircle,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  CreditCard,
  Monitor
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { ProfileSection } from './ProfileSection';
import { BookingSidebar } from './BookingSidebar';
import { SpecializationTag } from './SpecializationTag';
import { EducationEntry } from './EducationEntry';
import { WorkExperienceEntry } from './WorkExperienceEntry';
import { CertificationEntry } from './CertificationEntry';

const therapistData = {
  name: 'Swati Sanap',
  title: 'Psychologist',
  subtitle: 'Therapist/ Psychologist',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  rating: 5,
  reviewCount: 53,
  location: 'Bahrain, Capital Governorate, Manama',
  availability: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  isOnline: true,
  bio: `I am a qualified Mental Health Practitioner and Therapist and Corporate wellness program based in Bahrain, dedicated to helping individuals improve their mental and emotional well-being. With a compassionate and non-judgmental approach, I offer therapy for people of all age groups, backgrounds, and walks of life.

Mental health is not a luxury — it's a necessity. Whether you are struggling with anxiety, stress, depression, trauma, relationship issues, grief, or simply feel the need to talk to someone in a safe space, I am here to support you. I believe that therapy is a collaborative journey where we work together to help you find clarity, balance, and emotional strength.

My aim is to provide holistic care, tailored to your unique needs. Every individual's story is different, and I honor that by creating personalized therapy plans that help you grow emotionally, mentally, and spiritually.

Sessions are conducted with the highest level of confidentiality and respect. I work with individuals, couples, families, and groups, offering both online and in-person therapy sessions to make mental health support easily accessible to everyone.

Mental health challenges can feel isolating, but you don't have to face them alone. I'm here to walk with you on your healing journey.

If you're ready to take a step toward emotional well-being, feel free to reach out. Your mental health matters, and help is just a message away.

📌 Contact anytime for appointments, queries, or more information.

Let's work together for a better, healthier you.`,
  specializations: [
    'Abuse',
    'Addiction',
    'Anger',
    'Anxiety',
    'Child Or Teen',
    'Depression',
    'Family',
    'Insomnia',
    'LGBTQ+',
    'OCD',
    'Relationship/ Couple',
    'Spiritual',
    'Stress Management',
    'Trauma And PTSD',
    'Workplace Issues',
    'Employee Mental Health / EAP',
    'Divorce',
    'Online Therapy'
  ],
  sessionModes: ['Video', 'Audio', 'Chat'],
  insurance: [
    'Aetna',
    'Cigna',
    'Blue Cross Blue Shield (BCBS)',
    'United HealthCare (UHC)',
    'Humana',
    'Kaiser Permanente'
  ],
  education: [
    { institution: 'Mumbai University', degree: 'Ph.D. in Clinical Psychology', from: '2009', to: '2012' },
    { institution: 'NIMHANS, Bangalore', degree: 'M.Phil in Clinical Psychology', from: '2007', to: '2009' },
    { institution: 'Delhi University', degree: 'M.A. in Psychology', from: '2005', to: '2007' },
    { institution: 'St. Xavier\'s College, Mumbai', degree: 'B.A. in Psychology (Hons)', from: '2002', to: '2005' }
  ],
  workExperience: [
    { jobTitle: 'Senior Clinical Psychologist', company: 'Fortis Healthcare', employmentType: 'Full-time', from: 'Jan 2018', to: 'Present' },
    { jobTitle: 'Clinical Psychologist', company: 'Kokilaben Dhirubhai Ambani Hospital', employmentType: 'Full-time', from: 'Mar 2014', to: 'Dec 2017' },
    { jobTitle: 'Junior Psychologist', company: 'Tata Memorial Centre', employmentType: 'Full-time', from: 'Jun 2012', to: 'Feb 2014' },
    { jobTitle: 'Psychology Intern', company: 'NIMHANS', employmentType: 'Internship', from: 'Jan 2011', to: 'May 2012' }
  ],
  certifications: [
    { certifyingBody: 'Rehabilitation Council of India (RCI)', certificationName: 'Licensed Clinical Psychologist', licenseNumber: 'A12345', validFrom: 'Jan 2012', validTo: 'Dec 2027' },
    { certifyingBody: 'EMDR India', certificationName: 'EMDR Certified Practitioner', licenseNumber: 'EMDR-2018-456', validFrom: 'Mar 2018', validTo: 'Mar 2026' },
    { certifyingBody: 'Beck Institute', certificationName: 'Certified CBT Therapist', validFrom: 'Jun 2015', validTo: 'Jun 2025' },
    { certifyingBody: 'Indian Association of Clinical Psychologists', certificationName: 'IACP Membership', licenseNumber: 'IACP-789', validFrom: 'Jan 2013', validTo: 'Dec 2025' }
  ]
};

export const TherapistProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar */}
      <header className="border-b border-border bg-background sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs text-primary-foreground font-bold">T</span>
            </div>
            <span className="text-primary font-semibold">TherapyMantra</span>
          </div>
          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by state, city, provider name..."
                className="w-full h-9 px-4 rounded-full border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <button className="p-2 hover:bg-muted rounded-lg">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
        </div>
      </header>

      {/* Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-info to-primary" />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Main Content */}
          <div>
            {/* Profile Header Card */}
            <Card className="shadow-soft border-border mb-0">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <Avatar className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg border-2 border-border">
                    <AvatarImage src={therapistData.image} alt={therapistData.name} className="object-cover" />
                    <AvatarFallback className="text-xl font-serif rounded-lg">{therapistData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h1 className="text-xl sm:text-2xl font-semibold text-foreground font-sans">
                          {therapistData.name}
                        </h1>
                        <p className="text-muted-foreground text-sm">{therapistData.title}</p>
                        <p className="text-muted-foreground text-sm">{therapistData.subtitle}</p>
                        {therapistData.isOnline && (
                          <span className="text-online font-medium text-sm">Online</span>
                        )}
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < therapistData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} 
                          />
                        ))}
                        <span className="text-muted-foreground text-sm ml-1">({therapistData.reviewCount})</span>
                      </div>
                    </div>

                    {/* Availability & Location */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <CheckSquare className="w-4 h-4 text-muted-foreground" />
                        <span>{therapistData.availability.join(',')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <MapPin className="w-4 h-4 text-destructive" />
                        <span>{therapistData.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialization Section */}
                <ProfileSection 
                  title="Specialization" 
                  icon={<Users className="w-4 h-4" />}
                >
                  <div className="flex flex-wrap gap-2">
                    {therapistData.specializations.map((spec) => (
                      <SpecializationTag key={spec} label={spec} />
                    ))}
                  </div>
                </ProfileSection>

                {/* About Section */}
                <ProfileSection 
                  title="About" 
                  icon={<Info className="w-4 h-4" />}
                >
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-line text-sm">
                    {therapistData.bio}
                  </p>
                </ProfileSection>

                {/* Session Mode Section */}
                <ProfileSection 
                  title="Session Mode" 
                  icon={<Monitor className="w-4 h-4" />}
                >
                  <div className="flex flex-wrap gap-2">
                    {therapistData.sessionModes.map((mode) => (
                      <SpecializationTag key={mode} label={mode} variant="highlight" />
                    ))}
                  </div>
                </ProfileSection>

                {/* Insurance Coverage */}
                <ProfileSection 
                  title="Insurance Coverage" 
                  icon={<CreditCard className="w-4 h-4" />}
                >
                  <div className="flex flex-wrap gap-2">
                    {therapistData.insurance.map((ins) => (
                      <SpecializationTag key={ins} label={ins} />
                    ))}
                  </div>
                </ProfileSection>

                {/* Education */}
                <ProfileSection 
                  title="Education" 
                  icon={<GraduationCap className="w-4 h-4" />}
                >
                  <div className="space-y-3">
                    {therapistData.education.map((edu, index) => (
                      <EducationEntry 
                        key={index}
                        institution={edu.institution}
                        degree={edu.degree}
                        from={edu.from}
                        to={edu.to}
                      />
                    ))}
                  </div>
                </ProfileSection>

                {/* Work Experience */}
                <ProfileSection 
                  title="Work Experience" 
                  icon={<Briefcase className="w-4 h-4" />}
                >
                  <div className="space-y-3">
                    {therapistData.workExperience.map((exp, index) => (
                      <WorkExperienceEntry 
                        key={index}
                        jobTitle={exp.jobTitle}
                        company={exp.company}
                        employmentType={exp.employmentType}
                        from={exp.from}
                        to={exp.to}
                      />
                    ))}
                  </div>
                </ProfileSection>

                {/* Certifications / Licenses */}
                <ProfileSection 
                  title="Certifications / Licenses" 
                  icon={<ShieldCheck className="w-4 h-4" />}
                  className="border-b-0"
                >
                  <div className="space-y-3">
                    {therapistData.certifications.map((cert, index) => (
                      <CertificationEntry 
                        key={index}
                        certifyingBody={cert.certifyingBody}
                        certificationName={cert.certificationName}
                        licenseNumber={cert.licenseNumber}
                        validFrom={cert.validFrom}
                        validTo={cert.validTo}
                      />
                    ))}
                  </div>
                </ProfileSection>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="hidden lg:block">
            <BookingSidebar />
          </div>
        </div>

        {/* Mobile Booking Section */}
        <div className="lg:hidden mt-6 pb-24">
          <BookingSidebar />
        </div>
      </div>
    </div>
  );
};
