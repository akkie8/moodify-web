// components/Auth.tsx
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AuthUI() {
  return (
    <div className='w-full max-w-md mx-auto p-4'>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
        redirectTo={`${window.location.origin}/auth/callback`}
        theme='dark'
      />
    </div>
  );
}
