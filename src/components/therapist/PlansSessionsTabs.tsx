import { Video, MessageCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

interface PlanItem {
  id: string;
  title: string;
  icon: 'video' | 'chat';
  pricePerSession: number;
  totalPrice: number;
  duration: string;
  features: string[];
}

const plansData: PlanItem[] = [
  {
    id: 'couple-live',
    title: 'Couple Live Therapy',
    icon: 'video',
    pricePerSession: 5372,
    totalPrice: 21486,
    duration: '4 Video sessions of 60 minutes',
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
    id: 'individual-therapy',
    title: 'Individual Therapy',
    icon: 'video',
    pricePerSession: 2000,
    totalPrice: 8000,
    duration: '4 Video sessions of 45 minutes',
    features: [
      '4 Video/phone Sessions',
      'Private therapist',
      'Chat support between sessions',
      'Weekly sessions'
    ]
  }
];

const sessionsData: PlanItem[] = [
  {
    id: 'chat-session',
    title: 'Chat Therapy Session',
    icon: 'chat',
    pricePerSession: 2578,
    totalPrice: 2578,
    duration: '1 Chat session of 60 minutes',
    features: [
      '1 Chat Session',
      'Private therapist',
      'Unlimited app access with Meditation, Yoga & Self-care tools'
    ]
  },
  {
    id: 'video-session',
    title: 'Video Therapy Session',
    icon: 'video',
    pricePerSession: 1500,
    totalPrice: 1500,
    duration: '1 Video session of 50 minutes',
    features: [
      '1 Video/phone Session',
      'Private therapist',
      'Session recording available'
    ]
  }
];

const PlanCard = ({ plan }: { plan: PlanItem }) => {
  const IconComponent = plan.icon === 'video' ? Video : MessageCircle;
  
  return (
    <Card className="border-border/50 shadow-soft">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
            <IconComponent className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-2">
              <h4 className="font-medium text-foreground truncate">{plan.title}</h4>
              <div className="text-right shrink-0">
                <span className="text-lg font-semibold text-foreground">₹{plan.pricePerSession.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground">/session</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{plan.duration}</p>
            {plan.totalPrice !== plan.pricePerSession && (
              <p className="text-xs text-muted-foreground">₹{plan.totalPrice.toLocaleString()} Monthly</p>
            )}
            <ul className="mt-2 space-y-1">
              {plan.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const PlansSessionsTabs = () => {
  return (
    <Tabs defaultValue="plans" className="w-full">
      <TabsList className="w-full grid grid-cols-2 bg-transparent border-b border-border rounded-none h-auto p-0">
        <TabsTrigger 
          value="plans" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2.5 text-sm font-medium"
        >
          Plans
        </TabsTrigger>
        <TabsTrigger 
          value="sessions" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2.5 text-sm font-medium"
        >
          Sessions
        </TabsTrigger>
      </TabsList>
      <TabsContent value="plans" className="mt-3 space-y-3">
        {plansData.map(plan => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </TabsContent>
      <TabsContent value="sessions" className="mt-3 space-y-3">
        {sessionsData.map(session => (
          <PlanCard key={session.id} plan={session} />
        ))}
      </TabsContent>
    </Tabs>
  );
};

// Calculate lowest price from all plans and sessions
export const getLowestSessionPrice = (): number => {
  const allItems = [...plansData, ...sessionsData];
  return Math.min(...allItems.map(item => item.pricePerSession));
};
