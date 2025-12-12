import { 
  Star, 
  MapPin, 
  Languages, 
  Clock, 
  Heart,
  Shield,
  Users,
  Briefcase,
  MessageCircle,
  Award,
  BookOpen
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ProfileSection } from './ProfileSection';
import { BookingSidebar } from './BookingSidebar';
import { SpecializationTag } from './SpecializationTag';
import { QualificationBadge } from './QualificationBadge';

const therapistData = {
  name: 'Dr. Priya Sharma',
  title: 'Clinical Psychologist',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  rating: 4.9,
  reviewCount: 127,
  location: 'Mumbai, India',
  languages: ['English', 'Hindi', 'Marathi'],
  experience: '12+ years',
  practicingSince: 2012,
  sessionsDone: 2500,
  bio: `I'm a licensed clinical psychologist with over 12 years of experience helping individuals navigate life's challenges. My approach combines evidence-based therapies with compassionate understanding, creating a safe space where healing can begin.

I specialize in anxiety disorders, depression, relationship issues, and trauma recovery. I believe that every person has the innate capacity for growth and change, and my role is to help you discover and nurture that potential.`,
  specializations: [
    'Anxiety & Stress',
    'Depression',
    'Relationship Issues',
    'Trauma & PTSD',
    'Self-Esteem',
    'Life Transitions',
    'Work-Life Balance',
    'Grief & Loss'
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
  ]
};

export const TherapistProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-6 lg:py-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="space-y-5">
            {/* Hero Section */}
            <div className="flex flex-col sm:flex-row gap-5 items-start animate-fade-in">
              <Avatar className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl shadow-medium border-4 border-card">
                <AvatarImage src={therapistData.image} alt={therapistData.name} className="object-cover" />
                <AvatarFallback className="text-2xl font-serif">{therapistData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">
                      {therapistData.name}
                    </h1>
                    <Badge variant="secondary" className="bg-success-light text-success border-success/20">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-muted-foreground font-medium">{therapistData.title}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{therapistData.rating}</span>
                    <span className="text-muted-foreground">({therapistData.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{therapistData.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Languages className="w-4 h-4" />
                    <span>{therapistData.languages.join(', ')}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/70">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{therapistData.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/70">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{therapistData.sessionsDone.toLocaleString()}+ sessions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <ProfileSection 
              title="About Me" 
              icon={<Heart className="w-5 h-5 text-primary" />}
              defaultOpen={true}
            >
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {therapistData.bio}
              </p>
            </ProfileSection>

            {/* Specializations */}
            <ProfileSection 
              title="Specializations" 
              icon={<MessageCircle className="w-5 h-5 text-primary" />}
              defaultOpen={true}
            >
              <div className="flex flex-wrap gap-2">
                {therapistData.specializations.map((spec) => (
                  <SpecializationTag key={spec} label={spec} />
                ))}
              </div>
            </ProfileSection>

            {/* Therapeutic Approaches */}
            <ProfileSection 
              title="Therapeutic Approaches" 
              icon={<BookOpen className="w-5 h-5 text-primary" />}
              defaultOpen={false}
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
              defaultOpen={false}
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
              defaultOpen={false}
            >
              <div className="flex flex-wrap gap-2">
                {therapistData.clientFocus.map((focus) => (
                  <SpecializationTag key={focus} label={focus} />
                ))}
              </div>
            </ProfileSection>
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
