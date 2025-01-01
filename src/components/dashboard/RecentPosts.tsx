import { getRecentPosts } from '@/lib/posts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const RecentPosts = async () => {
  const posts = await getRecentPosts();

  return (
    <div className='mt-8 space-y-4'>
      <h2 className='text-2xl font-semibold'>Recent Posts</h2>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.mood}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
            <p className='mt-2 text-sm text-muted-foreground'>
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
