import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  reviewCount?: number;
  className?: string;
}

const sizeMap = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

const textSizeMap = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

export function RatingStars({
  rating,
  size = 'md',
  showValue = true,
  reviewCount,
  className,
}: RatingStarsProps) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const fillPercent = Math.max(0, Math.min(1, rating - (star - 1))) * 100;
          return (
            <div key={star} className="relative">
              <Star
                className={cn(sizeMap[size], 'text-muted-foreground/30')}
                strokeWidth={1.5}
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fillPercent}%` }}
              >
                <Star
                  className={cn(
                    sizeMap[size],
                    'fill-accent text-accent'
                  )}
                  strokeWidth={1.5}
                />
              </div>
            </div>
          );
        })}
      </div>
      {showValue && (
        <span className={cn('font-medium text-foreground', textSizeMap[size])}>
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className={cn('text-muted-foreground', textSizeMap[size])}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
