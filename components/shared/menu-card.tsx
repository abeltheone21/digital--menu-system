import Link from 'next/link';
import { Star, Clock, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { MenuItem } from '@/lib/types';
import { formatPrice } from '@/lib/format';
import { RatingStars } from '@/components/shared/rating-stars';

interface MenuCardProps {
  item: MenuItem;
  className?: string;
  priority?: boolean;
}

export function MenuCard({ item, className, priority }: MenuCardProps) {
  return (
    <Link
      href={`/menu/${item.id}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.name}
          {...(priority ? { loading: 'eager' } : { loading: 'lazy' })}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        {/* Popular badge */}
        {item.popular && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
            <Flame className="h-3 w-3" />
            Popular
          </span>
        )}

        {/* Rating chip */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <Star className="h-3 w-3 fill-accent text-accent" />
          {item.rating.toFixed(1)}
        </span>

        {/* Prep time */}
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-1 text-xs font-medium text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <Clock className="h-3 w-3 text-primary" />
          {item.prepTime}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
          {item.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-3">
          <RatingStars rating={item.rating} size="sm" reviewCount={item.reviewCount} />
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
          <span className="font-display text-lg font-bold text-primary">
            {formatPrice(item.price)}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
            View details
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
