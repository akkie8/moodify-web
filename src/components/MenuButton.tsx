'use client';

import { useCallback } from 'react';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { Session } from '@supabase/supabase-js';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type MenuButtonProps = {
  session: Session | null;
};

const MenuButton = ({ session }: MenuButtonProps) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      // Clear any cached data
      router.refresh();
      // Clear client-side cache and revalidate
      await fetch('/api/auth/clear-cache', {
        method: 'POST',
        credentials: 'include',
      });
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }, [supabase.auth, router]);

  const handleSignIn = useCallback(() => {
    router.push('/login');
  }, [router]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='h-9 w-9 p-0'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>メニューを開く</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-56'>
        {session ? (
          <>
            <div className='px-2 py-1.5 text-sm'>{session.user.email}</div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} className='text-red-600 focus:text-red-600'>
              ログアウト
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem onClick={handleSignIn}>ログイン</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuButton;
