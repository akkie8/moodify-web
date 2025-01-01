import type { Metadata } from 'next';
import { Kosugi, Alegreya } from 'next/font/google';
import '@/styles/globals.css';
import { MainHeader } from '@/components/dashboard/MainHeader';
import { MainFooter } from '@/components/common/MainFooter';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Omoma',
  description: 'Omoma is a social media platform for sharing your mood.',
};

export const kosugi = Kosugi({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-kosugi',
});

export const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-alegreya',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={`h-full ${kosugi.variable} ${alegreya.variable}`}>
      <body className='flex min-h-screen flex-col'>
        <MainHeader />
        <main className='flex flex-grow'>{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
