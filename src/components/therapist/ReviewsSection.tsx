import { Star, MessageCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProfileSection } from './ProfileSection';

interface Review {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  date?: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= rating
              ? 'fill-warning text-warning'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="py-4 border-b border-border/50 last:border-b-0">
      <div className="flex items-start gap-3">
        <Avatar className="w-10 h-10 border border-border">
          <AvatarImage src={review.avatar} alt={review.name} />
          <AvatarFallback className="bg-muted text-muted-foreground text-sm">
            {review.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className="font-medium text-foreground text-sm">{review.name}</h4>
          </div>
          <StarRating rating={review.rating} />
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
            {review.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ReviewsSection = ({ reviews, averageRating, totalReviews }: ReviewsSectionProps) => {
  return (
    <ProfileSection
      title="Reviews:"
      icon={<Star className="w-5 h-5 text-primary" />}
      collapsible={false}
      headerRight={
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= Math.round(averageRating)
                    ? 'fill-warning text-warning'
                    : 'fill-muted text-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-primary">{averageRating}</span>
          <span className="text-sm text-muted-foreground">({totalReviews})</span>
        </div>
      }
    >
      <div className="divide-y divide-border/50">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </ProfileSection>
  );
};
