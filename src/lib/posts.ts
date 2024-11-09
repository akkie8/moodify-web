import { Post, Mood } from './types';

const mockPosts: Post[] = [
  { id: '1', content: 'Feeling great today!', mood: 'joy', createdAt: new Date(), userId: '1' },
  {
    id: '2',
    content: 'Traffic was terrible',
    mood: 'anger',
    createdAt: new Date(Date.now() - 86400000),
    userId: '1',
  },
  {
    id: '3',
    content: 'Missing my old friends',
    mood: 'sadness',
    createdAt: new Date(Date.now() - 172800000),
    userId: '1',
  },
  {
    id: '4',
    content: 'Worried about the upcoming presentation',
    mood: 'fear',
    createdAt: new Date(Date.now() - 259200000),
    userId: '1',
  },
  {
    id: '5',
    content: 'The food at lunch was awful',
    mood: 'disgust',
    createdAt: new Date(Date.now() - 345600000),
    userId: '1',
  },
];

export async function getRecentPosts(): Promise<Post[]> {
  // In a real application, this would fetch posts from a database
  return mockPosts;
}

export async function getMoodSummary(): Promise<Record<Mood, number>> {
  // In a real application, this would aggregate mood data from the database
  return mockPosts.reduce(
    (acc, post) => {
      acc[post.mood] = (acc[post.mood] || 0) + 1;
      return acc;
    },
    {} as Record<Mood, number>
  );
}
