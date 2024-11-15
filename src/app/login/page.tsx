'use client';

// import { Button } from '@/components/ui/button';
// import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// import { signInWithGoogle } from '@/lib/auth';
import AuthUI from '@/components/Auth';

export default function LoginPage() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <AuthUI />
    </div>
  );
}
