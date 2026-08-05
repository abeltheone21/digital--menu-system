import Link from 'next/link';
import { ArrowLeft, Clock, Flame, Leaf, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { RatingStars } from '@/components/shared/rating-stars';
import { MenuCard } from '@/components/shared/menu-card';
import { formatPrice } from '@/lib/format';
import { getItemById, getRelatedItems } from '@/lib/data';
import type { MenuItem } from '@/lib/types';

interface FoodDetailsProps {
  item: MenuItem;
}

export function FoodDetails({ item }: FoodDetailsProps) {
  const related = getRelatedItems(item);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/menu"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to menu
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </div>
          {item.popular && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground shadow-md">
              <Flame className="h-3.5 w-3.5" />
              Popular
            </span>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {item.name}
            </h1>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <RatingStars
              rating={item.rating}
              size="md"
              reviewCount={item.reviewCount}
            />
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              {item.prepTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Flame className="h-4 w-4 text-primary" />
              {item.calories} cal
            </span>
          </div>

          <div className="mt-5">
            <span className="font-display text-3xl font-bold text-primary">
              {formatPrice(item.price)}
            </span>
          </div>

          <Separator className="my-6" />

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Description
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {item.longDescription}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              <Leaf className="h-4 w-4 text-primary" />
              Ingredients
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.ingredients.map((ingredient) => (
                <Badge
                  key={ingredient}
                  variant="secondary"
                  className="rounded-full bg-secondary px-3 py-1.5 text-sm font-normal"
                >
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="flex-1">
              Add to Order
            </Button>
            <Button size="lg" variant="outline">
              Save for Later
            </Button>
          </div>
        </div>
      </div>

      {/* Related items */}
      {related.length > 0 && (
        <section className="mt-16">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              You might also like
            </h2>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            More from the same category, hand-picked for you.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <MenuCard key={rel.id} item={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export function FoodDetailsFallback({ id }: { id: string }) {
  const item = getItemById(id);
  if (!item) return null;
  return <FoodDetails item={item} />;
}
