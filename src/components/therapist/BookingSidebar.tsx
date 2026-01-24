import { useState } from 'react';
import { Video, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Plan {
  id: string;
  icon: React.ReactNode;
  title: string;
  pricePerSession: number;
  monthlyPrice: number;
  sessionCount: number;
  sessionDuration: number;
  features: string[];
}

interface Session {
  id: string;
  icon: React.ReactNode;
  title: string;
  price: number;
  duration: number;
  description: string;
}

const plans: Plan[] = [
  {
    id: 'couple-live',
    icon: <Video className="w-5 h-5 text-primary-foreground" />,
    title: 'Couple Live Therapy',
    pricePerSession: 5372,
    monthlyPrice: 21486,
    sessionCount: 4,
    sessionDuration: 60,
    features: [
      '4 Video/phone Sessions',
      'Private therapist',
      'Couple Chat with the therapist',
      'Weekly sessions',
      'Unlimited app access with Meditation, Yoga & Self-care tools',
      'Pay every month'
    ]
  },
  {
    id: 'individual-live',
    icon: <Video className="w-5 h-5 text-primary-foreground" />,
    title: 'Individual Live Therapy',
    pricePerSession: 3500,
    monthlyPrice: 14000,
    sessionCount: 4,
    sessionDuration: 45,
    features: [
      '4 Video/phone Sessions',
      'Private therapist',
      'Chat with the therapist',
      'Weekly sessions',
      'Unlimited app access with Meditation, Yoga & Self-care tools',
      'Pay every month'
    ]
  }
];

const sessions: Session[] = [
  {
    id: 'video-single',
    icon: <Video className="w-5 h-5 text-primary-foreground" />,
    title: 'Video Session',
    price: 4500,
    duration: 60,
    description: 'One-on-one video session with the therapist'
  },
  {
    id: 'chat-session',
    icon: <MessageCircle className="w-5 h-5 text-primary-foreground" />,
    title: 'Chat Session',
    price: 2000,
    duration: 30,
    description: 'Text-based chat session'
  }
];

export const BookingSidebar = () => {
  const [activeTab, setActiveTab] = useState<'plans' | 'sessions'>('plans');
  const [selectedPlan] = useState(plans[0]);
  const [selectedSession] = useState(sessions[0]);

  return (
    <div className="lg:sticky lg:top-6 space-y-0">
      <Card className="shadow-medium border-border overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('plans')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === 'plans'
                ? 'text-primary border-b-2 border-primary bg-background'
                : 'text-muted-foreground hover:text-foreground bg-muted/30'
            }`}
          >
            Plans
          </button>
          <button
            onClick={() => setActiveTab('sessions')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === 'sessions'
                ? 'text-primary border-b-2 border-primary bg-background'
                : 'text-muted-foreground hover:text-foreground bg-muted/30'
            }`}
          >
            Sessions
          </button>
        </div>

        <CardContent className="p-4">
          {activeTab === 'plans' ? (
            <div className="space-y-4">
              {/* Plan Card */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    {selectedPlan.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-medium text-foreground text-sm truncate">{selectedPlan.title}</h4>
                      <div className="text-right flex-shrink-0">
                        <span className="text-base font-semibold text-foreground">₹ {selectedPlan.pricePerSession.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground"> /session</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {selectedPlan.sessionCount} Video sessions of {selectedPlan.sessionDuration} minutes , ₹{selectedPlan.monthlyPrice.toLocaleString()} Monthly
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 pl-1">
                  {selectedPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {sessions.map((session) => (
                <div key={session.id} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    {session.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-medium text-foreground text-sm">{session.title}</h4>
                      <div className="text-right flex-shrink-0">
                        <span className="text-base font-semibold text-foreground">₹ {session.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {session.duration} minutes • {session.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Message Button */}
      <Button 
        size="lg" 
        className="w-full h-12 text-base font-medium mt-4 shadow-soft hover:shadow-medium transition-all"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Message {activeTab === 'plans' ? 'for Plan' : 'Therapist'}
      </Button>

      {/* Mobile Floating Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
        <Button size="lg" className="w-full h-12 text-base font-medium shadow-medium">
          <MessageCircle className="w-4 h-4 mr-2" />
          Message Therapist
        </Button>
      </div>
    </div>
  );
};
