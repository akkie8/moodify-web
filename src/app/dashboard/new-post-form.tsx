'use client';

import { useState } from 'react';
// import { useActionState } from 'react';
// import { createPost } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
// import { useToast } from '@/hooks/use-toast';

const moods = [
  { value: 'joy', label: 'Joy', color: 'bg-yellow-500' },
  { value: 'anger', label: 'Anger', color: 'bg-red-500' },
  { value: 'sadness', label: 'Sadness', color: 'bg-blue-500' },
  { value: 'fear', label: 'Fear', color: 'bg-purple-500' },
  { value: 'disgust', label: 'Disgust', color: 'bg-green-500' },
];

export const NewPostForm = () => {
  // const { toast } = useToast();
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');
  // const [state, formAction] = useActionState(createPost, {
  //   onSuccess: (result) => {
  //     setContent('');
  //     setMood('');
  //     toast({
  //       title: 'Post created',
  //       description: 'Your mood has been recorded successfully.',
  //     });
  //   },
  //   onError: (error) => {
  //     toast({
  //       title: 'Error',
  //       description: 'Failed to create post. Please try again.',
  //       variant: 'destructive',
  //     });
  //   },
  // });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // formAction({ content, mood });
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
      <Button type='submit'>Posting...</Button>
      {/* <Button type='submit' disabled={state.success}>
        {state.success ? 'Posting...' : 'Post Mood'}
      </Button> */}
    </form>
  );
};
