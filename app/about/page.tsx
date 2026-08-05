import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Coffee,
  Heart,
  Sprout,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cafeInfo } from '@/lib/data';

const values = [
  {
    icon: <Coffee className="h-6 w-6" />,
    title: 'Made to Order',
    text: 'Nothing sits under a heat lamp. Every plate is fired fresh when you order — so it arrives hot, crisp, and exactly as it should.',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Made with Care',
    text: 'From the buna ceremony to the final latte art, every cup is poured by hand with genuine attention.',
  },
  {
    icon: <Sprout className="h-6 w-6" />,
    title: 'Locally Sourced',
    text: 'Our produce, dairy, and bread come from Ethiopian growers and bakers within 50 km of our door.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Community First',
    text: 'We host open-mic nights, art shows, and barista training for young Addis talent — coffee brings us together.',
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Hero */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          About Us
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
          The story behind the food
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {cafeInfo.description}
        </p>
      </div>

      {/* Story image + text */}
      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cafeInfo.storyImage}
            alt="Dado restaurant table spread"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            How it began
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
            <p>
              dado Kafe opened on a quiet corner of merkato in 2014, description 
            </p>
            <p>
              A decade later, we still grind our spices fresh each morning,
              still know our regulars by name, and still plate every dish like
              it might be the one someone remembers.
            </p>
            <p>
              Our menu blends the traditional — doro wot, shiro, kitfo, ful —
              with the cosmopolitan: grilled steaks, stacked burgers, fresh
              salads, and house-made desserts. Addis is a city of many worlds,
              and so are we.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="mt-16">
        <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
          What we stand for
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="animate-fade-up rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {value.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {value.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16">
        <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
          Come say hello
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-muted-foreground">
          Find us on Bole Road, give us a call, or slide into our DMs.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {/* Contact details */}
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-foreground">
              Contact &amp; Location
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground/80">{cafeInfo.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`tel:${cafeInfo.phone.replace(/\s/g, '')}`}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  {cafeInfo.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`mailto:${cafeInfo.email}`}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  {cafeInfo.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <SocialLink href={cafeInfo.social.instagram} label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={cafeInfo.social.facebook} label="Facebook">
                <Facebook className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={cafeInfo.social.twitter} label="Twitter">
                <Twitter className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          {/* Opening hours */}
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Clock className="h-5 w-5 text-primary" />
              Opening Hours
            </h3>
            <ul className="mt-4 space-y-3">
              {cafeInfo.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-border/40 pb-3 text-sm last:border-0 last:pb-0"
                >
                  <span className="font-medium text-foreground">{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-lg bg-success/10 px-4 py-3 text-sm font-medium text-success">
              Open now · Closes 11:30 PM
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
          <div className="relative flex h-64 items-center justify-center bg-secondary">
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <MapPin className="h-7 w-7" />
              </div>
              <p className="mt-3 font-display text-lg font-bold text-foreground">
                Dado restaurant
              </p>
              <p className="text-sm text-muted-foreground">
               merkato 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <Button asChild size="lg" className="group">
          <Link href="/menu">
            Browse the menu
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </section>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}
