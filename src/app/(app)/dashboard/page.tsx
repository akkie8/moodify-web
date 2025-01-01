import { Suspense } from 'react';
import { RecentPosts } from '@/components/dashboard/RecentPosts';
import { MoodSummary } from '@/components/dashboard/MoodSummary';
import { NewPostForm } from '@/components/dashboard/NewPostForm';
import { UserGreeting } from '@/components/dashboard/UserGreeting';

const DashboardPage = async () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <UserGreeting />
      <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
        <div className='md:col-span-2'>
          <NewPostForm />
          <Suspense fallback={<div>Loading recent posts...</div>}>
            <RecentPosts />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div>Loading mood summary...</div>}>
            <MoodSummary />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
