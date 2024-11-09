import { z } from 'zod';

export const MoodSchema = z.enum(['joy', 'anger', 'sadness', 'fear', 'disgust']);

export const PostSchema = z.object({
  id: z.string(),
  content: z.string().min(1).max(280),
  mood: MoodSchema,
  createdAt: z.date(),
  userId: z.string(),
});

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export type Mood = z.infer<typeof MoodSchema>;
export type Post = z.infer<typeof PostSchema>;
export type User = z.infer<typeof UserSchema>;
