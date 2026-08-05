import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Phone, Star, Quote, QrCode, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/shared/hero-section';
import { MenuCard } from '@/components/shared/menu-card';
import { ReviewCard } from '@/components/shared/review-card';
import { cafeInfo, getPopularItems, reviews } from '@/lib/data';

export default function HomePage() {
  const popular = getPopularItems(6);
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <>
      <HeroSection />

      {/* How it works */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              How It Works
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
              From scan to served in three taps
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              No app to download. No login. Customers just scan and order.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Step
              num="1"
              icon={<QrCode className="h-6 w-6" />}
              title="Scan the QR code"
              text="Customer scans the code on their table with their phone camera. The menu opens instantly in the browser."
            />
            <Step
              num="2"
              icon={<UtensilsCrossed className="h-6 w-6" />}
              title="Browse the menu"
              text="Full menu with photos, prices, ingredients, and ratings. Search and filter by category."
            />
            <Step
              num="3"
              icon={<ShoppingBag className="h-6 w-6" />}
              title="Order & enjoy"
              text="Customer taps to add items and sends the order. Kitchen sees it instantly. Food arrives."
            />
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          <InfoTile
            icon={<Clock className="h-5 w-5 text-primary" />}
            title="Opening Hours"
            lines={[cafeInfo.hours[0].day, cafeInfo.hours[0].time]}
          />
          <InfoTile
            icon={<MapPin className="h-5 w-5 text-primary" />}
            title="Location"
            lines={['Bole Road, Friendship Building', 'Addis Ababa, Ethiopia']}
          />
          <InfoTile
            icon={<Phone className="h-5 w-5 text-primary" />}
            title="Reservations"
            lines={[cafeInfo.phone, 'Or walk right in']}
          />
        </div>
      </section>

      {/* Popular items */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Guest Favourites
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Most-loved on the menu
            </h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              The dishes our regulars come back for, week after week. Tap any
              card to see ingredients and details.
            </p>
          </div>
          <Button asChild variant="outline" className="group shrink-0">
            <Link href="/menu">
              Full menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((item, i) => (
            <div
              key={item.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <MenuCard item={item} priority={i < 3} />
            </div>
          ))}
        </div>
      </section>

      {/* Story strip */}
      <section className="relative overflow-hidden bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cafeInfo.baristaImage}
                alt="Grilled platter at Dado restaurant"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-6 w-6 fill-primary text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {avgRating.toFixed(1)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {reviews.length * 60}+ reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Story
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              From the heart of Ethiopian cooking
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {cafeInfo.description}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              We source produce from growers within 50 km, grind our spices
              fresh each morning, and make every plate to order — so every meal
              tastes the way it should: generous, honest, and full of soul.
            </p>
            <Button asChild className="mt-6 group">
              <Link href="/about">
                Read our story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Kind Words
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
            What our guests say
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
            Real reviews from the people who keep our espresso machine humming.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to order?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
              Browse the full menu from your phone — no app, no wait. Just scan,
              tap, and enjoy.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-6 group"
            >
              <Link href="/menu">
                Explore the Menu
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoTile({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {lines.map((line, i) => (
          <p
            key={i}
            className={i === 0 ? 'text-sm text-foreground/80' : 'text-sm text-muted-foreground'}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function Step({
  num,
  icon,
  title,
  text,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="relative flex flex-col items-center rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow">
          {num}
        </span>
      </div>
      <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </div>
  );
}


