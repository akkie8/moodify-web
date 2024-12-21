'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// import { useAuth } from '@/components/providers/AuthProvider';

export const UserGreeting = () => {
  const router = useRouter();
  // const { user, loading } = useAuth();
  // console.log('Auth state:', { user, loading });

  useEffect(() => {}, []);

  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>
        {/* {user?.profile?.name ? `Welcome, ${user.profile.name}!` : 'Welcome!'} */}
      </h1>
      <button onClick={() => router.push('/settings')} className='settings-button'>
        setting
      </button>
    </div>
  );
};
