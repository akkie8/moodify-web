import Link from 'next/link';
import Image from 'next/image';
import MenuButton from '@/components/MenuButton';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export const dynamic = 'force-dynamic';

export const MainHeader = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header className='text-white shadow-md'>
      <nav className='max-w-6xl container mx-auto flex justify-between items-center p-2'>
        <div className='w-[160px]'></div>
        <h1 className='text-2xl font-bold'>
          <Link href='/'>
            <Image src='/omoma.png' alt='Moodify' width={160} height={40} />
          </Link>
        </h1>
        <div className='w-[160px] flex justify-end space-x-4 text-slate-700'>
          <MenuButton session={session} />
        </div>
      </nav>
    </header>
  );
};
