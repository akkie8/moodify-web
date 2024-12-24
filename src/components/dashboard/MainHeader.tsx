import Link from 'next/link';
import Image from 'next/image';

export const MainHeader = async () => {
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
          <Link href='/login' className='hover:opacity-80'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
              />
            </svg>
          </Link>
          <Link href='/settings' className='hover:opacity-80'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
};
