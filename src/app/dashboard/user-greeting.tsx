import { getCurrentUser } from '@/lib/auth';

export const UserGreeting = async () => {
  const user = await getCurrentUser();

  return <h1 className='text-3xl font-bold'>Welcome back, {user?.name || 'User'}!</h1>;
};
