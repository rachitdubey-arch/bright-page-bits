import { Video, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AvailabilityCalendar } from './AvailabilityCalendar';

export const BookingSidebar = () => {
  return (
    <div className="lg:sticky lg:top-6 space-y-4">
      {/* Session Info Card */}
      <Card className="shadow-medium border-border/50">
        <CardHeader className="pb-3">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-serif font-semibold text-foreground">₹1,500</span>
            <span className="text-sm text-muted-foreground">per session</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Session Types */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Session types available</p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-sm">
                <Video className="h-3.5 w-3.5" />
                <span>Video</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-sm">
                <Phone className="h-3.5 w-3.5" />
                <span>Audio</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-sm">
                <MapPin className="h-3.5 w-3.5" />
                <span>In-person</span>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>50 minutes per session</span>
          </div>

          {/* Features */}
          <div className="space-y-2 pt-2 border-t border-border">
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

      {/* Calendar Card */}
      <Card className="shadow-medium border-border/50">
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
        Book Session
      </Button>

      {/* Mobile Floating Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
        <Button size="lg" className="w-full h-12 text-base font-medium shadow-medium">
          Book Session — ₹1,500
        </Button>
      </div>
    </div>
  );
};
