import { ReactNode, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface ProfileSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  collapsible?: boolean;
}

export const ProfileSection = ({ 
  title, 
  icon, 
  children, 
  defaultOpen = true,
  collapsible = true 
}: ProfileSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!collapsible) {
    return (
      <Card className="shadow-soft border-border/50 overflow-hidden">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg font-serif">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-soft border-border/50 overflow-hidden transition-shadow duration-200 hover:shadow-medium">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <CardHeader className="pb-4 cursor-pointer hover:bg-secondary/30 transition-colors">
            <CardTitle className="flex items-center justify-between text-lg font-serif">
              <span className="flex items-center gap-2">
                {icon}
                {title}
              </span>
              <ChevronDown 
                className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="animate-fade-in">{children}</CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
