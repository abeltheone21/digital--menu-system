import { Star } from 'lucide-react';
import { RatingStars } from '@/components/shared/rating-stars';
import type { Review } from '@/lib/types';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    
    <article className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.avatar}
          alt={review.name}
          className="h-11 w-11 rounded-full object-cover ring-2 ring-border"
          loading="lazy"
        />
        <div>
          <p className="font-semibold leading-tight text-foreground">
            {review.name}
          </p>
          <p className="text-xs text-muted-foreground">{review.role}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <RatingStars rating={review.rating} size="sm" showValue={false} />
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
        &ldquo;{review.comment}&rdquo;
      </p>

      <div className="mt-4 flex items-center gap-1.5 border-t border-border/50 pt-4">
        <Star className="h-4 w-4 fill-accent text-accent" />
        <span className="text-sm font-semibold text-foreground">
          {review.rating}.0
        </span>
        <span className="text-xs text-muted-foreground">out of 5</span>
      </div>
    </article>
  );
}
