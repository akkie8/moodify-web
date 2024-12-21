'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthUI() {
  const supabase = createClientComponentClient();

  return (
    <div className='w-full max-w-md mx-auto p-4'>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
        redirectTo={`${process.env.NEXT_PUBLIC_SITE_URL}/callback`}
      />
    </div>
  );
}
