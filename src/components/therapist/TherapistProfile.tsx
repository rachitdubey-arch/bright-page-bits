import { 
  Star, 
  MapPin, 
  Languages, 
  Heart,
  Shield,
  Users,
  Briefcase,
  MessageCircle,
  Award,
  BookOpen,
  CreditCard,
  Calendar
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { SiteHeader } from '@/components/SiteHeader';
import { ProfileSection } from './ProfileSection';
import { BookingSidebar } from './BookingSidebar';
import { SpecializationTag } from './SpecializationTag';
import { QualificationBadge } from './QualificationBadge';
import { ProfessionalBackground } from './ProfessionalBackground';
import { ReviewsSection } from './ReviewsSection';

const therapistData = {
  name: 'Dr. Priya Sharma',
  title: 'Clinical Psychologist',
  subtitle: 'Therapist / Psychologist',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  rating: 4.9,
  reviewCount: 127,
  location: 'Mumbai, India',
  languages: ['English', 'Hindi', 'Marathi'],
  experience: '12+ years',
  practicingSince: 2012,
  sessionsDone: 2500,
  isOnline: true,
  availability: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  bio: `I am a qualified Mental Health Practitioner and Therapist and Corporate wellness program based in Mumbai, dedicated to helping individuals improve their mental and emotional well-being. With a compassionate and non-judgmental approach, I offer therapy for people of all age groups, backgrounds, and walks of life.

Mental health is not a luxury — it's a necessity. Whether you are struggling with anxiety, stress, depression, trauma, relationship issues, grief, or simply feel the need to talk to someone in a safe space, I am here to support you. I believe that therapy is a collaborative journey where we work together to help you find clarity, balance, and emotional strength.

My aim is to provide holistic care, tailored to your unique needs. Every individual's story is different, and I honor that by creating personalized therapy plans that help you grow emotionally, mentally, and spiritually.`,
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
    'Relationship/Couple',
    'Spiritual',
    'Stress Management',
    'Trauma And PTSD',
    'Workplace Issues'
  ],
  approaches: [
    'Cognitive Behavioral Therapy (CBT)',
    'Mindfulness-Based Therapy',
    'Person-Centered Therapy',
    'Trauma-Focused Therapy'
  ],
  qualifications: [
    { title: 'Ph.D. in Clinical Psychology', subtitle: 'Mumbai University, 2012', type: 'degree' as const },
    { title: 'M.Phil in Clinical Psychology', subtitle: 'NIMHANS, 2009', type: 'degree' as const },
    { title: 'RCI Licensed Psychologist', subtitle: 'License #12345', type: 'certification' as const },
    { title: 'EMDR Certified Practitioner', subtitle: 'EMDR India, 2018', type: 'training' as const },
  ],
  clientFocus: [
    'Adults (18-65)',
    'Young Adults',
    'Couples',
    'LGBTQ+ Affirming'
  ],
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
  ],
  reviews: [
    { id: '1', name: 'Rahul Rajput', rating: 5, comment: 'I would like to express my sincere appreciation for today\'s session. Dr. Sharma demonstrated exceptional professionalism, clarity, and empathy throughout. Her ability to understand and guide the conversation took the experience to the next level. Her insights were meaningful, and her approach made the session both impactful and comfortable. Thank you, Dr. Sharma, for being truly amazing at what you do.' },
    { id: '2', name: 'Prachi Tyagi', rating: 5, comment: 'It was an amazing session with insightful solutions and advices. Thank you so much for helping me' },
    { id: '3', name: 'Suryanshi Tyagi', rating: 5, comment: 'It was a great session' },
    { id: '4', name: 'Gayathri Robbi', rating: 5, comment: 'It was a great session with Dr. Sharma. She made me understand why things are the way they are and taught me many things to work on that are in my control. The session gave me a hope for life. Thank you so much Dr. Sharma' }
  ]
};

export const TherapistProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <div className="max-w-6xl mx-auto px-4 py-6 lg:py-8">
        <div className="grid lg:grid-cols-[1fr_340px] gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="space-y-5">
            {/* Hero Section */}
            <div className="bg-card rounded-xl p-5 shadow-soft border border-border/50 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <Avatar className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl shadow-soft border-2 border-border">
                  <AvatarImage src={therapistData.image} alt={therapistData.name} className="object-cover" />
                  <AvatarFallback className="text-2xl font-serif">{therapistData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-3">
                  {/* Name and Verified Badge */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-xl sm:text-2xl font-serif font-semibold text-foreground">
                      {therapistData.name}
                    </h1>
                    <Badge variant="outline" className="text-[hsl(var(--online))] border-[hsl(var(--online))] text-xs font-medium">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  
                  {/* Title */}
                  <p className="text-muted-foreground text-sm">{therapistData.title}</p>

                  {/* Rating, Location, Languages */}
                  <div className="flex items-center gap-4 flex-wrap text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="font-medium text-foreground">{therapistData.rating}</span>
                      <span>({therapistData.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{therapistData.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Languages className="w-4 h-4" />
                      <span>{therapistData.languages.join(', ')}</span>
                    </div>
                  </div>

                  {/* Experience and Sessions */}
                  <div className="flex items-center gap-6 pt-2 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>{therapistData.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{therapistData.sessionsDone.toLocaleString()}+ sessions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-card rounded-xl p-5 shadow-soft border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-base font-serif font-semibold text-foreground">Specialization:</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {therapistData.specializations.map((spec) => (
                  <SpecializationTag key={spec} label={spec} />
                ))}
              </div>
            </div>

            {/* About Section */}
            <ProfileSection 
              title="About:" 
              icon={<Heart className="w-5 h-5 text-primary" />}
              collapsible={false}
            >
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                {therapistData.bio}
              </p>
            </ProfileSection>

            {/* Insurance Coverage */}
            <ProfileSection 
              title="Insurance Coverage" 
              icon={<CreditCard className="w-5 h-5 text-primary" />}
              collapsible={false}
            >
              <div className="flex flex-wrap gap-2">
                {therapistData.insurance.map((ins) => (
                  <SpecializationTag key={ins} label={ins} variant="highlight" />
                ))}
              </div>
            </ProfileSection>

            {/* Therapeutic Approaches */}
            <ProfileSection 
              title="Therapeutic Approaches" 
              icon={<BookOpen className="w-5 h-5 text-primary" />}
              collapsible={false}
            >
              <div className="flex flex-wrap gap-2">
                {therapistData.approaches.map((approach) => (
                  <SpecializationTag key={approach} label={approach} variant="highlight" />
                ))}
              </div>
            </ProfileSection>

            {/* Qualifications */}
            <ProfileSection 
              title="Qualifications & Training" 
              icon={<Award className="w-5 h-5 text-primary" />}
              collapsible={false}
            >
              <div className="grid sm:grid-cols-2 gap-3">
                {therapistData.qualifications.map((qual, index) => (
                  <QualificationBadge 
                    key={index}
                    title={qual.title}
                    subtitle={qual.subtitle}
                    type={qual.type}
                  />
                ))}
              </div>
            </ProfileSection>

            {/* Client Focus */}
            <ProfileSection 
              title="I Work With" 
              icon={<Users className="w-5 h-5 text-primary" />}
              collapsible={false}
            >
              <div className="flex flex-wrap gap-2">
                {therapistData.clientFocus.map((focus) => (
                  <SpecializationTag key={focus} label={focus} />
                ))}
              </div>
            </ProfileSection>

            {/* Professional Background - Tabbed Section */}
            <ProfessionalBackground 
              education={therapistData.education}
              workExperience={therapistData.workExperience}
              certifications={therapistData.certifications}
            />

            {/* Reviews Section */}
            <ReviewsSection 
              reviews={therapistData.reviews}
              averageRating={therapistData.rating}
              totalReviews={therapistData.reviewCount}
            />
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
