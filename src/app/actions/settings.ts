'use server';

import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const settingsSchema = z.object({
  username: z.string().min(3).max(50),
});

export async function updateSettings(formData: FormData) {
  const validatedFields = settingsSchema.safeParse({
    username: formData.get('username'),
  });

  if (!validatedFields.success) {
    return { error: 'Invalid username. Please check your input.' };
  }

  const { username } = validatedFields.data;

  try {
    // ここでは仮のユーザーIDを使用しています。実際の実装では認証されたユーザーのIDを使用してください。
    const userId = '1';
    await prisma.user.update({
      where: { id: userId },
      data: { username },
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to update settings:', error);
    return { error: 'Failed to update settings. Please try again.' };
  }
}
