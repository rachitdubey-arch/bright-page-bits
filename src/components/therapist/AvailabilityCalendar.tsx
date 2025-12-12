import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Mock current month data
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const availableDays = [3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26, 29];
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <div className="space-y-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <h4 className="font-serif font-semibold text-foreground">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h4>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekDays.map((day) => (
          <div key={day} className="text-xs font-medium text-muted-foreground py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {emptyDays.map((_, i) => (
          <div key={`empty-${i}`} className="h-9" />
        ))}
        {days.map((day) => {
          const isAvailable = availableDays.includes(day);
          const isSelected = selectedDate === day;
          const isPast = day < currentDate.getDate();
          
          return (
            <button
              key={day}
              onClick={() => isAvailable && !isPast && setSelectedDate(day)}
              disabled={!isAvailable || isPast}
              className={`
                h-9 rounded-lg text-sm font-medium transition-all duration-200
                ${isPast ? 'text-muted-foreground/40 cursor-not-allowed' : ''}
                ${isAvailable && !isPast ? 'hover:bg-accent hover:text-accent-foreground cursor-pointer' : ''}
                ${isSelected ? 'bg-primary text-primary-foreground shadow-soft' : ''}
                ${isAvailable && !isSelected && !isPast ? 'bg-success-light text-success' : ''}
                ${!isAvailable && !isPast ? 'text-muted-foreground' : ''}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="pt-4 border-t border-border animate-fade-in">
          <p className="text-sm font-medium text-foreground mb-3">Available times</p>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${selectedTime === time 
                    ? 'bg-primary text-primary-foreground shadow-soft' 
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
