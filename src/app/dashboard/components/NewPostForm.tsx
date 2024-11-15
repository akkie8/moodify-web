// components/NewPostForm.tsx
'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/providers/AuthProvider';
import { useRouter } from 'next/navigation';

const moods = [
  { value: 'joy', label: 'Joy', color: 'bg-yellow-500' },
  { value: 'anger', label: 'Anger', color: 'bg-red-500' },
  { value: 'sadness', label: 'Sadness', color: 'bg-blue-500' },
  { value: 'fear', label: 'Fear', color: 'bg-purple-500' },
  { value: 'disgust', label: 'Disgust', color: 'bg-green-500' },
];

export const NewPostForm = () => {
  const { user, loading } = useAuth();
  console.log('Auth state:', { user, loading });
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      console.error('User is not authenticated');
      return;
    }

    // setLoading(true);
    try {
      const { error } = await supabase.from('posts').insert({
        user_id: user.id,
        content,
        mood,
      });

      if (error) {
        console.error('Error creating post:', error);
        throw error;
      }

      setContent('');
      setMood('');
      router.refresh();
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='How are you feeling?'
        className='w-full'
        required
      />
      <RadioGroup value={mood} onValueChange={setMood} className='flex space-x-2'>
        {moods.map((m) => (
          <div key={m.value} className='flex items-center space-x-2'>
            <RadioGroupItem value={m.value} id={m.value} className={m.color} />
            <Label htmlFor={m.value}>{m.label}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button type='submit' disabled={loading}>
        {loading ? 'Posting...' : 'Post Mood'}
      </Button>
    </form>
  );
};
