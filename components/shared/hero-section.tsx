import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cafeInfo } from '@/lib/data';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cafeInfo.heroImage}
          alt="dado dining spread"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Steam accents */}
      <div className="pointer-events-none absolute bottom-24 left-1/4 hidden h-24 w-1 rounded-full bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 animate-steam sm:block" />
      <div
        className="pointer-events-none absolute bottom-32 right-1/3 hidden h-20 w-1 rounded-full bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 animate-steam sm:block"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            Addis Ababa · Est. 2014
          </div>

          <h1
            className="animate-fade-up mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Dado<span className="text-accent">restaurant</span>
          </h1>

          <p
            className="animate-fade-up mt-3 font-display text-xl italic text-white/80 sm:text-2xl"
            style={{ animationDelay: '0.2s' }}
          >
            {cafeInfo.tagline}.
          </p>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            Hearty Ethiopian mains, grilled specialties, fresh salads, stacked
            burgers, and house-made desserts — made to order in the heart of Addis
            Ababa. Scan, browse, and order right from your phone.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.4s' }}
          >
            <Button asChild size="lg" className="group">
              <Link href="/menu">
                View Menu
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              Open today · {cafeInfo.hours[0].time}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              Bole Road, Addis Ababa
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
