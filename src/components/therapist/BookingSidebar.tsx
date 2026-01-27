import { Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AvailabilityCalendar } from './AvailabilityCalendar';
import { PlansSessionsTabs, getLowestSessionPrice } from './PlansSessionsTabs';

export const BookingSidebar = () => {
  const lowestPrice = getLowestSessionPrice();

  return (
    <div className="lg:sticky lg:top-20 space-y-4">
      {/* Per Session Price - Shows Lowest */}
      <Card className="shadow-soft border-border/50">
        <CardHeader className="pb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-muted-foreground">Starting from</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-serif font-semibold text-foreground">₹{lowestPrice.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground">per session</span>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          {/* Duration */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground pb-3 border-b border-border">
            <Clock className="h-4 w-4" />
            <span>45-60 minutes per session</span>
          </div>

          {/* Features */}
          <div className="space-y-2 pt-3">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>Free 15-min consultation</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>Flexible rescheduling</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>Secure & confidential</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plans & Sessions Tabs */}
      <Card className="shadow-soft border-border/50">
        <CardContent className="p-4">
          <PlansSessionsTabs />
        </CardContent>
      </Card>

      {/* Calendar Card */}
      <Card className="shadow-soft border-border/50">
        <CardHeader className="pb-2">
          <p className="text-sm font-medium text-foreground">Select appointment</p>
        </CardHeader>
        <CardContent>
          <AvailabilityCalendar />
        </CardContent>
      </Card>

      {/* Book Button */}
      <Button 
        size="lg" 
        className="w-full h-12 text-base font-medium shadow-soft hover:shadow-medium transition-all"
      >
        Message Therapist
      </Button>

      {/* Mobile Floating Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-card/95 backdrop-blur-sm border-t border-border z-50">
        <Button size="lg" className="w-full h-12 text-base font-medium shadow-medium">
          Book Session — ₹{lowestPrice.toLocaleString()}
        </Button>
      </div>
    </div>
  );
};
