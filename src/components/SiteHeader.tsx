import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">T</span>
          </div>
          <span className="text-primary font-semibold text-lg hidden sm:inline">
            TherapyMantra
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by state, city, provider name..."
              className="pl-9 pr-4 h-9 bg-background border-border rounded-full text-sm"
            />
          </div>
        </div>

        {/* Settings Button */}
        <Button variant="ghost" size="icon" className="shrink-0">
          <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
    </header>
  );
};
