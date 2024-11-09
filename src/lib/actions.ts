'use server';

import { z } from 'zod';
import { MoodSchema } from './types';

const CreatePostSchema = z.object({
  content: z.string().min(1).max(280),
  mood: MoodSchema,
});

export async function createPost(data: z.infer<typeof CreatePostSchema>) {
  const result = CreatePostSchema.safeParse(data);

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  // In a real application, this would save the post to a database
  const newPost = {
    id: Math.random().toString(36).substr(2, 9),
    ...result.data,
    createdAt: new Date(),
    userId: '1', // Assuming the current user's ID is '1'
  };

  console.log('New post created:', newPost);

  return { success: true, post: newPost };
}
