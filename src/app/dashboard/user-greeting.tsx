'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const UserGreeting = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <div className='flex justify-between items-center'>
      <button onClick={() => router.push('/settings')} className='settings-button'>
        setting
      </button>
    </div>
  );
};
