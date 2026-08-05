import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dado restaurant — Food That Brings People Together | Addis Ababa',
  description:
    'Dado restaurant is a modern Ethiopian eatery in the heart of Addis Ababa serving hearty mains, grilled specialties, fresh salads, stacked burgers, and house-made desserts. Scan the QR code, browse the menu, and order from your phone.',
  keywords: [
    'Dado restaurant',
    'Ethiopian restaurant',
    'Addis Ababa eatery',
    'digital menu',
    'QR menu',
    'Ethiopian food',
    'Doro Wot',
  ],
  openGraph: {
    title: 'Dado restaurant— Food That Brings People Together',
    description:
      'Hearty Ethiopian mains, grills, burgers, salads, and desserts. Browse our digital menu from your phone.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dado restaurant — Food That Brings People Together',
    description:
      'Modern Ethiopian eatery in Addis Ababa. Browse our digital menu from your phone.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
