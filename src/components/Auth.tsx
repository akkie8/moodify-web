'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

export default function AuthUI() {
  const [origin, setOrigin] = useState('');
  const supabase = createClientComponentClient();

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  if (!origin) return null;

  return (
    <div className='w-full max-w-md mx-auto p-4'>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
        redirectTo={`${origin}/auth/callback`}
      />
    </div>
  );
}
