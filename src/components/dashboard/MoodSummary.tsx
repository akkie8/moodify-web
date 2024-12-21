import { getMoodSummary } from '@/lib/posts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const MoodSummary = async () => {
  const summary = await getMoodSummary();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mood Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className='space-y-2'>
          {Object.entries(summary).map(([mood, count]) => (
            <li key={mood} className='flex justify-between'>
              <span className='capitalize'>{mood}</span>
              <span>{count}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
