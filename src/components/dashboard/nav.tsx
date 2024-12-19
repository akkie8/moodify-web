'use client';

import { User } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface DashboardNavProps {
  user: User;
}

export function DashboardNav({ user }: DashboardNavProps) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <nav className='border-b p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <span className='font-bold'>Dashboard</span>
          <span className='text-sm text-gray-500'>{user.email}</span>
        </div>
        <Button variant='outline' onClick={handleSignOut}>
          ログアウト
        </Button>
      </div>
    </nav>
  );
}
