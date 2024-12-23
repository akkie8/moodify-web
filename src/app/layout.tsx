import type { Metadata } from 'next';
import { Kosugi, Alegreya } from 'next/font/google';
import '@/styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';

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
      <body className='flex flex-col min-h-screen'>
        <header className='text-white shadow-md'>
          <nav className='container mx-auto flex justify-between items-center p-4'>
            <h1 className='text-2xl font-bold'>
              <Link href='/'>
                <Image src='/moodify.svg' alt='Moodify' width={120} height={32} />
              </Link>
            </h1>
            <div className='space-x-4 text-gray-500'>
              <Link href='/login' className='hover:underline'>
                Login
              </Link>
              <Link href='/dashboard' className='hover:underline'>
                Dashboard
              </Link>
              <Link href='/settings' className='hover:underline'>
                Settings
              </Link>
            </div>
          </nav>
        </header>

        <main className='flex-grow flex'>{children}</main>

        <footer className='p-4 text-center text-gray-500 bg-gray-50'>
          <div className='text-sm flex gap-3 items-center justify-center'>
            <Link href='/about'>運営者情報</Link>
            <Link href='/notice'>特定商取引法に基づく表記</Link>
            <Link href='/terms'>利用規約</Link>
            <Link href='/policy'>プライバシーポリシー</Link>
            <Link href='/contact'>お問い合わせ</Link>
          </div>
          <hr className='my-4 bg-gray-200 w-10/12 mx-auto'></hr>
          <p className='mb-2'>Moodify © 2025</p>
        </footer>
      </body>
    </html>
  );
}
